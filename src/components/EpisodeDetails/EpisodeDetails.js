import { useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import data from '../../episode-details.json'
import { FunctionContext } from '../../App';

const EpisodeDetails = () => {
    const episodeDetails = data
    const stripHtml = useContext(FunctionContext)

    return (
        <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
            <Row className='mb-4 gap-3'>
                <Col md='auto'>
                    {<Image variant='thumb' src={episodeDetails.image.medium}/>}
                </Col>
                <Col md className='d-flex align-items-center'>
                    <div>
                        <h2>{episodeDetails.name}</h2>
                        <h5><span>Air Date:</span> {episodeDetails.airdate} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {episodeDetails.airtime}</h5>
                        {episodeDetails.season && <h5><span>Season:</span> {episodeDetails.season} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Episode:</span> {episodeDetails.number}</h5>}
                        {episodeDetails.rating.average ? 
                            <h5><span>Rating: </span> {Object.values(episodeDetails.rating.average)}</h5>
                            : <p>No Rating</p>
                        }
                        <h5><span></span></h5>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row>
                <h3>Summary</h3>
                <p>{stripHtml(episodeDetails.summary)}</p>
            </Row>
        </Container>
    );
};

export default EpisodeDetails;