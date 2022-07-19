import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Episode from '../Episode/Episode';

const Episodes = () => {
    const [episodeDetails, setEpisodeDetails] = useState(null)
    const [numSeasons, setNumSeasons] = useState(null)
    const { showId } = useParams()

    
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)
        .then(res => res.json())
        .then(data => {
            setEpisodeDetails(data)
            setNumSeasons(getSeasons(data))
            console.log(data)
        })
        .catch(console.error)

        function getSeasons(arr) {
            if(!arr) return
    
            const seasons = {}
            for(let i=0; i < arr.length; i++) {
                !seasons[arr[i].season] && (seasons[arr[i].season] = true)
            }
            return Object.keys(seasons)
        }

    },[showId])
     
    if(!episodeDetails && !numSeasons) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>Loading...</h1>
            </Container>
        )
    } else if(episodeDetails.length < 1) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>No Results</h1>
            </Container>
        )
    } else {
        return (
            <Container>
                {numSeasons.map((season, index) => {
                    return(
                        <div key={index}>
                            <Row className='mt-4 mb-2' style={{background: 'rgb(190,150,0)'}}>
                                <h2>Season {season}</h2>
                            </Row>
                            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                                {episodeDetails.filter(episode => episode.season === parseInt(season)).map(episode => <Episode key={episode.id} episode={episode} />)}
                            </Row>
                        </div>
                    )
                })}
            </Container>
        );
    }
};

export default Episodes;