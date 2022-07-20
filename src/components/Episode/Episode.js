import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FunctionContext } from '../../App'
import noImage from '../../images/no-image.png'

const Episode = ({ episode }) => {
    const stripHtml = useContext(FunctionContext)

    return (
        <Card className='displayCard'>
            <Card.Img variant='top' src={episode.image ? episode.image.medium : noImage} alt='episode cover image' className='cardImg'/>
            <Card.Body>                  
                    <Card.Title>{episode.name}</Card.Title>
                    {episode.summary ? 
                        <Card.Text className='cardText'>
                            {episode.summary.length > 200 ?
                                stripHtml(episode.summary).slice(0,200) + '...'
                                : stripHtml(episode.summary)
                            }
                        </Card.Text>
                        : <p>No Summary</p>
                    }               
                    <Link to={`${episode.id}`} className='cardLink'>Details</Link>
            </Card.Body>
        </Card>
    );
};

export default Episode;