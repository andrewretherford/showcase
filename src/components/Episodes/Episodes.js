import Episode from '../Episode/Episode';
import { useState, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { getData } from '../../functions/getData';
import { apiResultReducer } from '../../functions/apiResultReducer';

const Episodes = () => {
    const initialState = {
        loading: false,
        result: null,
        error: ''
    }

    const [apiState, dispatch] = useReducer(apiResultReducer, initialState)
    const [numSeasons, setNumSeasons] = useState(null)
    const { showId } = useParams()
    const { result, loading, error } = apiState

    
    useEffect(() => {
        getData(dispatch, `shows/${showId}/episodes`, `Oops, couldn't find any episodes for this show!`)
    },[showId])

    useEffect(() => {
        
        apiState.result && setNumSeasons(getSeasons(apiState.result))

        function getSeasons(arr) {
            if(!arr) return
    
            const seasons = {}
            for(let i=0; i < arr.length; i++) {
                !seasons[arr[i].season] && (seasons[arr[i].season] = true)
            }
            return Object.keys(seasons)
        }

    },[apiState])
     
    return (
        <Container>
            {result && numSeasons &&
                numSeasons.map((season, index) => {
                    return(
                        <div key={index}>
                            <Row className='mt-4 mb-2' style={{background: 'rgb(190,150,0)'}}>
                                <h2>Season {season}</h2>
                            </Row>
                            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                                {result.filter(episode => episode.season === parseInt(season)).map(episode => <Episode key={episode.id} episode={episode} />)}
                            </Row>
                        </div>
                    )
                })
            }
            {loading && <Container className='d-flex justify-content-center'><h1>Loading...</h1></Container>}
            {result && result.length < 1 && <Container className='d-flex justify-content-center'><h1>No Results</h1></Container>}
            {error && <Container className='d-flex justify-content-center'><h1>{error}</h1></Container>}
        </Container>
    )
};

export default Episodes;