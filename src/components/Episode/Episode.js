import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FunctionContext } from '../../App'
import noImage from '../../images/no-image.png'

const Episode = ({ episode }) => {
    const stripHtml = useContext(FunctionContext)

    return (
        <Card className='displayCard'>
            {episode.image ?
                <Card.Img variant='top' src={episode.image.medium} className='cardImg'/>
                : <Card.Img variant='top' src={noImage} className='cardImg'/>
            }
            <Card.Body>                  
                    <Card.Title>{episode.name}</Card.Title>
                    {episode.summary ? (episode.summary.length > 200 ? 
                        <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(episode.summary.slice(0,200)) + '...'}</Card.Text>
                        : <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(episode.summary)}</Card.Text>)
                        : <p>No Summary</p>
                    }               
                    <Link 
                        to={`/episode-details/${episode.id}`}
                        style={{ textDecoration: 'none' }}
                    >Details</Link>
            </Card.Body>
        </Card>
    );
};

export default Episode;