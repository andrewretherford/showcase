import Show from '../Show/Show';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const ShowResults = () => {
    const [searchResults, setSearchResults] = useState(null)
    const { query } = useParams()

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data)
            })
            .catch(console.error)
    },[query])

    if(!searchResults) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>Loading...</h1>
            </Container>
        )
    } else if(searchResults.length < 1) {
        return (
            <Container className='d-flex justify-content-center'>
                <h1>No Results</h1>
            </Container>
        )
    } else {
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
    }
};

export default ShowResults;