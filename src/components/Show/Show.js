import './Show.css'
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FunctionContext } from '../../App';

const Show = ({ showInfo }) => {
    const { show } = showInfo
    const stripHtml = useContext(FunctionContext)
    return (
        <Card className='showCard'>
            <Card.Img variant='top' src={show.image.medium} className='cardImg'/>
            <Card.Body>                  
                    <Card.Title>{show.name}</Card.Title>
                    {show.summary.length > 200 ? 
                        <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(show.summary.slice(0,200)) + '...'}</Card.Text>
                        : <Card.Text style={{ textAlign: 'justify' }}>{stripHtml(show.summary)}</Card.Text>
                    }                   
                    <Link 
                        to={`/show-details/${show.id}`}
                        style={{ textDecoration: 'none' }}
                    >Details</Link>
            </Card.Body>
        </Card>
    );
};

export default Show;