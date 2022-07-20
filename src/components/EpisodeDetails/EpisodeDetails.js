import { useContext, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FunctionContext } from '../../App';
import { getData } from '../../functions/getData';
import { apiResultReducer } from '../../functions/apiResultReducer';
import noImage from '../../images/no-image.png'

const EpisodeDetails = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const stripHtml = useContext(FunctionContext)
    const { episodeId } = useParams()
    const { result, loading, error } = apiState

    useEffect(() => {
        getData(dispatch, `episodes/${episodeId}`, `Oops, couldn't find any details for this episode!`)
    },[episodeId])

    return (
        <>  {result &&
                <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
                    <Row className='mb-4 gap-3'>
                        <Col md='auto'>
                            {result.image ?
                                <Image src={result.image.medium}/>
                                : <Image style={{width: '250px'}} src={noImage}/>
                            }
                        </Col>
                        <Col md className='d-flex align-items-center'>
                            <div>
                                <h2>{result.name}</h2>
                                <h5><span>Air Date:</span> {result.airdate ? result.airdate : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {result.airtime ? result.airtime : '-'}</h5>
                                <h5><span>Season:</span> {result.season ? result.season : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Episode:</span> {result.number ? result.number : '-'}</h5>
                                    <h5><span>Rating: </span> {result.rating.average ? result.rating.average : '-'}</h5>
                                <h5><span></span></h5>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <h3>Summary</h3>
                        <p>{result.summary ? stripHtml(result.summary) : 'No summary on file'}</p>
                    </Row>
                </Container>
            }
            {loading && <Container className='d-flex justify-content-center'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='d-flex justify-content-center'><h1>No Results</h1></Container>}
            {error && <Container className='d-flex justify-content-center'><h1>{error}</h1></Container>}
        </>
    );
};

export default EpisodeDetails;