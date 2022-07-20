import { useEffect, useReducer, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';
import { getData } from '../../functions/getData';
import { FunctionContext } from '../../App';
import { apiResultReducer } from '../../functions/apiResultReducer';
import noImage from '../../images/no-image.png'

const Home = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const stripHtml = useContext(FunctionContext)
    const { result, loading, error } = apiState

    useEffect(() => {
        getData(dispatch, `shows`, `Oops, couldn't find any shows!`)
    },[])

    return (
        <Container className='mt-4 mb-4'>
            {result &&
                <Row xs={1} md={2} lg={3} xl={4} className='g-4 contentWrapper'>
                    {result.map((show, index) => {
                        return (
                            <Card key={index} className='displayCard'>
                                <Card.Img variant='top' src={show.image ? show.image.medium : noImage} className='cardImg'/>
                                <Card.Body>                  
                                    <Card.Title>{show.name}</Card.Title>
                                        {show.summary ? 
                                            <Card.Text className='cardText'>
                                                {show.summary.length > 200 ?
                                                    stripHtml(show.summary).slice(0,200) + '...'
                                                    : stripHtml(show.summary)
                                                }
                                            </Card.Text>
                                            : <p>No Summary</p>
                                        }                    
                                    <Link to={`/results/${show.id}/details`} className='cardLink'>Details</Link>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
            }
            {loading && <Container className='contentWrapper'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='contentWrapper'><h1>No Results</h1></Container>}
            {error && <Container className='contentWrapper'><h1>{error}</h1></Container>}
        </Container>
    );
};

export default Home;