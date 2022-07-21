import { Image, Card } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CastMember = ({ castMemberInfo }) => {

    return (
        <Card className='displayCard'>
            <Image 
                src={castMemberInfo.person.image ? castMemberInfo.person.image.medium : noImage} 
                alt={castMemberInfo.person.name}
                className={castMemberInfo.person.image ? 'mt-3 cardImg' : 'mt-3 noImg'}
            />
            <hr/>
            <Card.Body className='cardBody'>     
                <div className='d-flex flex-column align-items-center'>            
                    <h3>{castMemberInfo.person.name}</h3>
                    <h5 className='center'><span>Character: </span>{castMemberInfo.character.name ? castMemberInfo.character.name : '-'}</h5>
                    <p>{castMemberInfo.person.country ? castMemberInfo.person.country.name : 'No country listed'}</p>
                </div>   
                <div className='mt-2'>
                    {castMemberInfo.person.url && 
                        <a href={castMemberInfo.person.url} className='cardLink'>tvmaze profile</a>
                    }
                </div>               
            </Card.Body>
        </Card>
    );
};

export default CastMember;