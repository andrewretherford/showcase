import { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FunctionContext } from '../../App';
import noImage from '../../images/no-image.png'

const ShowDetails = () => {
    const [showDetails, setShowDetails] = useState(null)
    const { showId } = useParams()
    const stripHtml = useContext(FunctionContext)

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}`)
            .then(res => res.json())
            .then(data => {
                setShowDetails(data)
            })
            .catch(console.error)
    },[])

    if(!showDetails) {
        return <p>Loading...</p>
    } else {
        return (
            <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
                <Row className='mb-4 gap-3'>
                    <Col md='auto'>
                        {showDetails.image ?
                            <Image variant='thumb' src={showDetails.image.medium}/>
                            : <Image variant='thumb' src={noImage}/>
                        }
                    </Col>
                    <Col md className='d-flex align-items-center'>
                        <div>
                            <h2>{showDetails.name}</h2>
                            <h5><span>Genre:</span> {showDetails.genres.length > 0 ? showDetails.genres.join(', ') : '-'}</h5>
                            <h5><span>Type:</span> {showDetails.type ? showDetails.type : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Language:</span> {showDetails.language ? showDetails.language : '-'}</h5>
                            <h5><span>Status:</span> {showDetails.status ? showDetails.status : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {showDetails.runtime ? showDetails.runtime : '-'}</h5>
                            <h5><span>Premiered:</span> {showDetails.premiered ? showDetails.premiered : '-'}</h5>
                            {showDetails.schedule.time ? 
                                <h5><span>Schedule:</span> {showDetails.schedule.days.join(', ')}s at {showDetails.schedule.time}</h5>
                                : <h5><span>Schedule:</span> - </h5>
                            }
                            <h5><span>Network:</span> {showDetails.network ? showDetails.network.name : '-'}</h5>
                            <h5><span>Rating: </span> {showDetails.rating.average ? showDetails.rating.average : '-'}</h5>
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
                                <Link to={`/results/${showDetails.name}/${showDetails.id}/episodes`}>Episodes</Link>
                            </Col>
                            <Col xs='auto'>
                                <Link to="/cast">Cast</Link>
                            </Col>
                            {showDetails.officialSite && 
                                <Col xs='auto'>
                                    <a href={showDetails.officialSite}>Official Site</a>
                                </Col>
                            }

                        </Row>
                    </Container>
            </Container>
        )
    }
};

export default ShowDetails;