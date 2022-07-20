import Show from '../Show/Show';
import { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const ShowResults = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [searchResults, setSearchResults] = useState(null)
    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const { query } = useParams()
    const { result, loading, error } = apiState

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => {
                if(res.status === 404) {
                    return dispatch({
                        type: 'error',
                        error: `No result found for ${query}. Please try another search.`
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
                    error: 'Oops, something went wrong! Please try again later'
                })
                console.log(err)
            })
    },[query])

    function apiResultReducer(state, action) {
        switch(action.type) {
            case 'loading': 
                return {...state, loading: true}

            case 'success':
                return {...state, loading: false, result: action.data}
            
            case 'error':
                return {...state, loading: false, error: action.error}

            default:
                return state
        }
    }

        return (
            <Container className='mt-4 mb-4'>
                {result && 
                    <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                        {result.map((show, index) => <Show key={index} showInfo={show}/>)}    
                    </Row>
                }
                {loading && <Container className='d-flex justify-content-center'><h1>Loading...</h1></Container>}
                {result && result.length < 1 && <Container className='d-flex justify-content-center'><h1>No Results</h1></Container>}
                {error && <Container className='d-flex justify-content-center'><h1>{error}</h1></Container>}
            </Container>
        );
    // }
};

export default ShowResults;