import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Episode from '../Episode/Episode';
import data from '../../episodes.json'

const Episodes = () => {
    const [episodeDetails, setEpisodeDetails] = useState(data)
    const showID = useParams()
    const numSeasons = getSeasons(episodeDetails)

    
    
    function getSeasons(arr) {
        const seasons = {}
        for(let i=0; i < arr.length; i++) {
            !seasons[arr[i].season] && (seasons[arr[i].season] = true)
        }
        return Object.keys(seasons)
    } 

    return (
        // <Container>

        //     {episodeDetails.map((episode) => <Episode key={episode.id} episode={episode}/>)}
        // </Container>

        <Container>
            {numSeasons.map((season, index) => {
                return(
                    <>
                        <Row className='mt-4 mb-2' style={{background: 'rgb(190,150,0)'}}>
                            <h2>Season {index + 1}</h2>
                        </Row>
                        <Row key={index} xs={1} md={2} lg={3} xl={4} className='g-4'>
                            
                            {episodeDetails.filter(episode => episode.season === index + 1).map(episode => <Episode key={episode.id} episode={episode} />)}
                        </Row>
                    </>
                )
            })}
        </Container>
    );
};

export default Episodes;