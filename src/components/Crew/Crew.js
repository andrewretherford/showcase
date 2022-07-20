import CrewMember from '../CrewMember/CrewMember';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap'
import { removeDuplicates } from '../../functions/removeDuplicates';

const Crew = () => {
    const [crew, setCrew] = useState(null)
    const { showId } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}/crew`)
            .then(res => res.json())
            .then(data => {
                setCrew(removeDuplicates(data))
            })
    },[showId])

    if(!crew) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>Loading...</h1>
            </Container>
        )
    } else if(crew.length < 1) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>No Results</h1>
            </Container>
        )
    } else {
        return (
            <Container className='mt-4 mb-4'>
                <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                    {crew ?
                        crew.map((crewMember, index) => <CrewMember key={index} crewMemberInfo={crewMember}/>)
                        : <p>Loading...</p>
                    }    
                </Row>
            </Container>
        );
    }
};

export default Crew;