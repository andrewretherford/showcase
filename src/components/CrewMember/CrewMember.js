import { Image, Card } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CrewMember = ({ crewMemberInfo }) => {

    return (
        <Card className='displayCard'>
            <Image 
                src={crewMemberInfo.person.image ? crewMemberInfo.person.image.medium : noImage} 
                alt={crewMemberInfo.person.name}
                className={crewMemberInfo.person.image ? 'mt-3 cardImg' : 'mt-3 noImg'}
            />
            <hr/>
            <Card.Body className='cardBody'>     
                <div className='d-flex flex-column align-items-center'>            
                    <h3>{crewMemberInfo.person.name}</h3>
                    <h5 className='center'><span>Title: </span>{crewMemberInfo.type ? crewMemberInfo.type : '-'}</h5>
                    <p>{crewMemberInfo.person.country ? crewMemberInfo.person.country.name : 'No country listed'}</p>
                </div>   
                <div className='mt-2'>
                    {crewMemberInfo.person.url && 
                        <a href={crewMemberInfo.person.url} className='cardLink'>tvmaze profile</a>
                    }
                </div>               
            </Card.Body>
        </Card>
    );
};

export default CrewMember;