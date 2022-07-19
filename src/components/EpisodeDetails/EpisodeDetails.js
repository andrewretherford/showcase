import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FunctionContext } from '../../App';
import noImage from '../../images/no-image.png'

const EpisodeDetails = () => {
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const stripHtml = useContext(FunctionContext)
    const { episodeId } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/episodes/${episodeId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEpisodeDetails(data)
            })
            .catch(console.error)
    },[episodeId])

    if(!episodeDetails) {
        return <Container>Loading...</Container>
    } else {
        return (
            <Container className='mt-5 mb-5' style={{background: 'rgb(230,230,230', padding: '30px', border: '2px solid rgb(80,80,80)'}}>
                <Row className='mb-4 gap-3'>
                    <Col md='auto'>
                        {episodeDetails.image ?
                            <Image src={episodeDetails.image.medium}/>
                            : <Image style={{width: '250px'}} src={noImage}/>
                        }
                    </Col>
                    <Col md className='d-flex align-items-center'>
                        <div>
                            <h2>{episodeDetails.name}</h2>
                            <h5><span>Air Date:</span> {episodeDetails.airdate ? episodeDetails.airdate : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Runtime:</span> {episodeDetails.airtime ? episodeDetails.airtime : '-'}</h5>
                            <h5><span>Season:</span> {episodeDetails.season ? episodeDetails.season : '-'} &nbsp;&nbsp; | &nbsp;&nbsp; <span>Episode:</span> {episodeDetails.number ? episodeDetails.number : '-'}</h5>
                                <h5><span>Rating: </span> {episodeDetails.rating.average ? episodeDetails.rating.average : '-'}</h5>
                            <h5><span></span></h5>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <h3>Summary</h3>
                    <p>{episodeDetails.summary ? stripHtml(episodeDetails.summary) : 'No summary on file'}</p>
                </Row>
            </Container>
        );
    }
};

export default EpisodeDetails;