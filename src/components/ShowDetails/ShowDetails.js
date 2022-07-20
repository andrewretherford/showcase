import { useContext, useReducer, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FunctionContext } from '../../App';
import { apiResultReducer } from '../../functions/apiResultReducer';
import noImage from '../../images/no-image.png'

const ShowDetails = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const { showId } = useParams()
    const stripHtml = useContext(FunctionContext)
    const { result, loading, error } = apiState

    useEffect(() => {
        dispatch({ type: 'loading' })
        fetch(`https://api.tvmaze.com/shows/${showId}`)
        .then(res => {
            if(res.status === 404) {
                return dispatch({
                    type: 'error',
                    error: `Oops, couldn't find any details for this show!`
                })
            } else if(res.status === 200 || res.status === 304) {
                return res.json()
            }
        })
        .then(data => {
            dispatch({
                type: 'success',
                data: data
            })
        })
        .catch(err => {
            dispatch({
                type: 'error',
                error: 'Oops, something went wrong! Please try again later.'
            })
            console.log(err)
        })
    },[showId])

    return (
        <>
            {result &&
                <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
                    <Row className='mb-4 gap-3'>
                        <Col md='auto'>
                            {result.image ?
                                <Image variant='thumb' src={result.image.medium}/>
                                : <Image variant='thumb' src={noImage}/>
                            }
                        </Col>
                        <Col md className='d-flex align-items-center'>
                            <div>
                                <h2>{result.name}</h2>
                                <h5><span>Genre:</span> {result.genres.length > 0 ? result.genres.join(', ') : '-'}</h5>
                                <h5><span>Type:</span> {result.type ? result.type : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Language:</span> {result.language ? result.language : '-'}</h5>
                                <h5><span>Status:</span> {result.status ? result.status : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {result.runtime ? result.runtime : '-'}</h5>
                                <h5><span>Premiered:</span> {result.premiered ? result.premiered : '-'}</h5>
                                {result.schedule.time ? 
                                    <h5><span>Schedule:</span> {result.schedule.days.join(', ')}s at {result.schedule.time}</h5>
                                    : <h5><span>Schedule:</span> - </h5>
                                }
                                <h5><span>Network:</span> {result.network ? result.network.name : '-'}</h5>
                                <h5><span>Rating: </span> {result.rating.average ? result.rating.average : '-'}</h5>
                                <h5><span></span></h5>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <h3>Summary</h3>
                        <p>{stripHtml(result.summary)}</p>
                    </Row>
                        <Container>
                            <Row>
                                <Col xs='auto'>
                                    <Link to={`/results/${result.id}/episodes`}>Episodes</Link>
                                </Col>
                                <Col xs='auto'>
                                    <Link to={`/results/${result.id}/cast`}>Cast</Link>
                                </Col>
                                <Col xs='auto'>
                                    <Link to={`/results/${result.id}/crew`}>Crew</Link>
                                </Col>
                                {result.officialSite && 
                                    <Col xs='auto'>
                                        <a href={result.officialSite}>Official Site</a>
                                    </Col>
                                }

                            </Row>
                        </Container>
                </Container>
            }
            {loading && <Container className='d-flex justify-content-center'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='d-flex justify-content-center'><h1>No Results</h1></Container>}
            {error && <Container className='d-flex justify-content-center'><h1>{error}</h1></Container>}
        </>
    )
};

export default ShowDetails;