import { Carousel } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FunctionContext } from '../../App'

const Episode = ({ episode }) => {
    const stripHtml = useContext(FunctionContext)
    const navigate = useNavigate()

    function clickHandler(e) {
        navigate(`/episode-details/${episode.id}`)
    }

    return (
        <Carousel.Item {...props}>
            {episode.image ? <img
                className="d-block w-100"
                src={episode.image.original}
                alt={episode.name}
            />
                : <p>No Image</p>
            }
            <Carousel.Caption>
                <h3>{episode.name}</h3>
                {episode.summary ? 
                    <p>{stripHtml(episode.summary)}</p>
                    : <p>No Summary</p>
                }
            </Carousel.Caption>
        </Carousel.Item>
    );
};

export default Episode;