import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FunctionContext } from '../../App';
import noImage from '../../images/no-image.png'

const Show = ({ showInfo }) => {
    const { show } = showInfo
    const stripHtml = useContext(FunctionContext)
    return (
        <Card className='displayCard'>
            <Card.Img variant='top' src={show.image.medium ? show.image.medium : noImage} alt='show cover image' className='cardImg'/>
            <Card.Body className='cardBody'>     
                <div>             
                    <Card.Title>{show.name}</Card.Title>
                    {show.summary ? 
                        <Card.Text className='cardText'>
                            {show.summary.length > 200 ?
                                stripHtml(show.summary).slice(0,200) + '...'
                                : stripHtml(show.summary)
                            }
                        </Card.Text>
                        : <p>No Summary</p>
                    }
                </div>   
                <div className='mt-2'>
                    <Link to={`/results/${show.id}/details`} className='cardLink'>Details</Link>
                </div>               
            </Card.Body>
        </Card>
    );
};

export default Show;