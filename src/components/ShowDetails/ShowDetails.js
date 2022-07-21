import { useContext, useReducer, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FunctionContext } from '../../App';
import { getData } from '../../functions/getData';
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
        getData(dispatch, `shows/${showId}`, `Oops, couldn't find any details for this show!`)
    },[showId])

    return (
        <Container className='mt-5 mb-5 detailsDisplay'>
            {result &&
                <>
                    <Row className='mb-4 gap-3'>
                        <Col md='auto'>
                            <Image variant='thumb' src={result.image ? result.image.medium: noImage}/>
                        </Col>
                        <Col md className='d-flex align-items-center'>
                            <div>
                                <h2>{result.name}</h2>
                                <h5><span>Genre:</span> {result.genres.length > 0 ? result.genres.join(', ') : '-'}</h5>
                                <h5><span>Type:</span> {result.type ? result.type : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Language:</span> {result.language ? result.language : '-'}</h5>
                                <h5><span>Status:</span> {result.status ? result.status : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {result.runtime ? result.runtime : '-'}</h5>
                                <h5><span>Premiered:</span> {result.premiered ? result.premiered : '-'}</h5>
                                <h5><span>Schedule:</span> {result.schedule.time ? `${result.schedule.days.join(', ')} at ${result.schedule.time}` : '-'}</h5>
                                <h5><span>Network:</span> {result.network ? result.network.name : '-'}</h5>
                                <h5><span>Rating: </span> {result.rating.average ? result.rating.average : '-'}</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <h3>Summary</h3>
                        <p>{result.summary ? stripHtml(result.summary) : 'No summary available.'}</p>
                    </Row>
                    <Container>
                        <Row>
                            <Col xs='auto'>
                                <Link to={`/results/${result.id}/episodes`} className='cardLink'>Episodes</Link>
                            </Col>
                            <Col xs='auto'>
                                <Link to={`/results/${result.id}/cast`} className='cardLink'>Cast</Link>
                            </Col>
                            <Col xs='auto'>
                                <Link to={`/results/${result.id}/crew`} className='cardLink'>Crew</Link>
                            </Col>
                            {result.officialSite && 
                                <Col xs='auto'>
                                    <a href={result.officialSite} className='cardLink'>Official Site</a>
                                </Col>
                            }
                        </Row>
                    </Container>
                </>
            }
            {loading && <Container className='infoText'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='infoText'><h1>No Results</h1></Container>}
            {error && <Container className='infoText'><h1>{error}</h1></Container>}
        </Container>
    )
};

export default ShowDetails;