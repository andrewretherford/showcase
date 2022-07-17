import React, { useState } from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Episode from '../Episode/Episode';
import data from '../../episodes.json'

const Episodes = () => {
    const [episodeDetails, setEpisodeDetails] = useState(data)
    const showID = useParams()
    const numSeasons = getSeasons(episodeDetails)
    const [index, setIndex] = useState(0)
    
    function getSeasons(arr) {
        const seasons = {}
        for(let i=0; i < arr.length; i++) {
            !seasons[arr[i].season] && (seasons[arr[i].season] = true)
        }
        return Object.keys(seasons)
    } 

    function handleSelect(selectedIndex, e) {
        setIndex(selectedIndex)
    } 

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {episodeDetails.map((episode) => <Episode key={episode.id} episode={episode}/>)}
        </Carousel>

        // <Container>
        //     {numSeasons.forEach((season, index) => {
        //         return(
        //             <Row>
        //                 <h2>Season {index + 1}</h2>
        //                 <Carousel>
        //                     {episodeDetails.map(episode => {
        //                         if(episode.season === index + 1) {
        //                             console.log(episode.season)
        //                             return(
        //                                 <Episode key={episode.id} episode={episode} />
        //                             )
        //                         }
        //                     })}
        //                 </Carousel>
        //             </Row>
        //         )
        //     })}
        // </Container>
    );
};

export default Episodes;