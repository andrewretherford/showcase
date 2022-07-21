import CastMember from '../CastMember/CastMember';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import { getData } from '../../functions/getData';
import { apiResultReducer } from '../../functions/apiResultReducer';

const Cast = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const { showId } = useParams()
    const { result, loading, error } = apiState

    useEffect(() => {
        getData(dispatch, `shows/${showId}/cast`, `Oops, couldn't find any cast for this show!`)
    },[showId])

    return (
        <Container className='mt-4 mb-4'>
            {result &&
                <Row xs={1} md={2} lg={3} xl={4} className='g-4 contentWrapper'>
                    {result.map((castMember, index) => <CastMember key={index} castMemberInfo={castMember}/>)}
                </Row>
            }
            {loading && <Container className='infoText'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='infoText'><h1>No Results</h1></Container>}
            {error && <Container className='infoText'><h1>{error}</h1></Container>}
        </Container>
    )
};

export default Cast;