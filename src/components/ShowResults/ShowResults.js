import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Show from '../Show/Show';

const ShowResults = () => {
    const [searchResults, setSearchResults] = useState(null)
    const { query } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data)
            })
    },[query])

    return (
        <Container className='mt-4 mb-4'>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {searchResults ? 
                    searchResults.map((show, index) => <Show key={index} showInfo={show}/>)
                    : <p>Loading...</p>
                }    
            </Row>
        </Container>
    );
};

export default ShowResults;