import Show from '../Show/Show';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { getData } from '../../functions/getData';
import { apiResultReducer } from '../../functions/apiResultReducer';

const ShowResults = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const { query } = useParams()
    const { result, loading, error } = apiState

    useEffect(() => {       
        getData(dispatch, `search/shows?q=${query}`, `No results found for ${query}. Please try another search.`)
    },[query])

        return (
            <Container className='mt-4 mb-4'>
                {result && 
                    <Row xs={1} md={2} lg={3} xl={4} className='g-4 contentWrapper'>
                        {result.map((show, index) => <Show key={index} showInfo={show}/>)}    
                    </Row>
                }
                {loading && <Container className='contentWrapper'><h1>Loading...</h1></Container>}
                {result && result.length < 1 && <Container className='contentWrapper'><h1>No Results</h1></Container>}
                {error && <Container className='contentWrapper'><h1>{error}</h1></Container>}
            </Container>
        );
    // }
};

export default ShowResults;