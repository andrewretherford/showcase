import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import data from '../../show-details.json'
import { FunctionContext } from '../../App';

const ShowDetails = () => {
    const [showDetails, setShowDetails] = useState(data)
    const { showID } = useParams()
    const stripHtml = useContext(FunctionContext)

    return (
        <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
            <Row className='mb-4 gap-3'>
                <Col md='auto'>
                    <Image variant='thumb' src={showDetails.image.medium}/>
                </Col>
                <Col md className='d-flex align-items-center'>
                    <div>
                        <h2>{showDetails.name}</h2>
                        <h5><span>Genre:</span> {showDetails.genres.join(', ')}</h5>
                        <h5><span>Type:</span> {showDetails.type} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Language:</span> {showDetails.language}</h5>
                        <h5><span>Status:</span> {showDetails.status} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {showDetails.runtime}</h5>
                        <h5><span>Premiered:</span> {showDetails.premiered}</h5>
                        <h5><span>Schedule:</span> {showDetails.schedule.time} {showDetails.network.country.timezone} time on {showDetails.schedule.days.join(', ')}s</h5>
                        <h5><span>Network:</span> {showDetails.network.name}</h5>
                        <h5><span>Rating: </span> {Object.values(showDetails.rating.average)}</h5>
                        <h5><span></span></h5>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <h3>Summary</h3>
                <p>{stripHtml(showDetails.summary)}</p>
            </Row>
                <Container>
                    <Row>
                        <Col xs='auto'>
                            <Link to="/episodes">Episodes</Link>
                        </Col>
                        <Col xs='auto'>
                            <Link to="/cast">Cast</Link>
                        </Col>
                        <Col xs='auto'>
                            <a href={showDetails.officialSite}>Official Site</a>
                        </Col>
                    </Row>
                </Container>
        </Container>
    );
};

export default ShowDetails;