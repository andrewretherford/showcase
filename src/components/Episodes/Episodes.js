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
            {numSeasons.forEach((season, index) => {
                return(
                    <Row key={index} xs={1} md={2} lg={3} xl={4} className='g-4'>
                        <h2>Season {index + 1}</h2>
                        {episodeDetails.map(episode => {
                            if(episode.season === index + 1) {
                                console.log(episode.season)
                                return(
                                    <Episode key={episode.id} episode={episode} />
                                )
                            }
                        })}
                    </Row>
                )
            })}
        </Container>
    );
};

export default Episodes;