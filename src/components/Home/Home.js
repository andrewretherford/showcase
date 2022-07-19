import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';
import noImage from '../../images/no-image.png'
import { FunctionContext } from '../../App';

const Home = () => {
    const [searchResults, setSearchResults] = useState(null)
    const stripHtml = useContext(FunctionContext)

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then(res => res.json())
            .then(data => {
                setSearchResults(data)
            })
            .catch(console.error)
    },[])

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
                    {searchResults.map((show, index) => {
                        return (
                            <Card key={index} className='displayCard'>
                                {show.image ?
                                    <Card.Img variant='top' src={show.image.medium ? show.image.medium : noImage} className='cardImg'/>
                                    : <Card.Img variant='top' src={noImage} className='cardImg'/>
                                }
                                <Card.Body>                  
                                        <Card.Title>{show.name}</Card.Title>
                                        {show.summary ? 
                                            (show.summary.length > 200 ? 
                                                <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(show.summary.slice(0,200)) + '...'}</Card.Text>
                                                : <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(show.summary)}</Card.Text>
                                            )
                                            : <p>No summary available</p>
                                        }                   
                                        <Link 
                                            to={`/results/${show.id}/details`}
                                            style={{ textDecoration: 'none' }}
                                        >Details</Link>
                                </Card.Body>
                            </Card>
                        )
                    })}
 
                </Row>
            </Container>
        );
    }
};

export default Home;