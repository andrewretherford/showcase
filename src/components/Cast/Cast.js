import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import CastMember from '../CastMember/CastMember';
import { removeDuplicates } from './removeDuplicates';

const Cast = () => {
    const [cast, setCast] = useState(null)
    const { showId } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}/cast`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCast(data)
            })
    },[showId])

    if(!cast) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>Loading...</h1>
            </Container>
        )
    } else if(cast.length < 1) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>No Results</h1>
            </Container>
        )
    } else {
        return (
            <Container className='mt-4 mb-4'>
                <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                    {cast ?
                        cast.map((castMember, index) => <CastMember key={index} castMemberInfo={castMember}/>)
                        : <p>Loading...</p>
                    }    
                </Row>
            </Container>
        );
    }
};

export default Cast;