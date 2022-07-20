import CrewMember from '../CrewMember/CrewMember';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import { getData } from '../../functions/getData';
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
        getData(dispatch, `shows/${showId}/crew`, `Oops, couldn't find any crew for this show!`)
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