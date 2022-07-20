import CrewMember from '../CrewMember/CrewMember';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import { removeDuplicates } from '../../functions/removeDuplicates';
import { apiResultReducer } from '../../functions/apiResultReducer';

const Crew = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const { showId } = useParams()
    const { result, loading, error } = apiState

    useEffect(() => {
        dispatch({ type: 'loading' })
        fetch(`https://api.tvmaze.com/shows/${showId}/crew`)
        .then(res => {
            if(res.status === 404) {
                return dispatch({
                    type: 'error',
                    error: `Oops, couldn't find any crew for this show!`
                })
            } else if(res.status === 200 || res.status === 304) {
                return res.json()
            }
        })
        .then(data => {
            dispatch({
                type: 'success',
                data: removeDuplicates(data)
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
        <Container className='mt-4 mb-4'>
            {result &&
                <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                    {result.map((crewMember, index) => <CrewMember key={index} crewMemberInfo={crewMember}/>)}    
                </Row>
            }
            {loading && <Container className='d-flex justify-content-center'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='d-flex justify-content-center'><h1>No Results</h1></Container>}
            {error && <Container className='d-flex justify-content-center'><h1>{error}</h1></Container>}
        </Container>
    );
};

export default Crew;