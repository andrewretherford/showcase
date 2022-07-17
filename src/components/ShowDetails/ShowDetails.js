import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Card, Image } from 'react-bootstrap';
import showDetails from '../../show-details.json'
import { FunctionContext } from '../../App';

const ShowDetails = () => {
    const { showID } = useParams()
    const stripHtml = useContext(FunctionContext)

    return (
        <Container className='mt-5 mb-5'>
            <Card>
                <Card.Img variant='top' src={showDetails.image.medium} style={{ height: '40vh', width: '40vw' }}/>
                <Card.Body>
                    <Card.Title>{showDetails.name}</Card.Title>
                    <Card.Text>{stripHtml(showDetails.summary)}</Card.Text>
                </Card.Body>
            </Card>
                <Link to="/episodes">Episodes</Link>
                <Link to="/cast">Cast</Link>
        </Container>
    );
};

export default ShowDetails;