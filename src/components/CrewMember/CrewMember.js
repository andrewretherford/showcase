import { Container, Image, Row, Col } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CrewMember = ({ crewMemberInfo }) => {

    return (
        <Container className='displayCard border border-dark'>
            <Row>
                <Col xs='12' className='imgContainer'>
                        <Image 
                            variant='thumb' 
                            src={crewMemberInfo.person.image ? crewMemberInfo.person.image.medium : noImage} 
                            alt={crewMemberInfo.person.name}
                            className='mt-3 image'
                        />
                </Col>
                <Col>
                    <hr/>
                    <div className='d-flex flex-column align-items-center'>
                        <h3>{crewMemberInfo.person.name}</h3>
                        <h5 className='crewTitle'><span>Title: </span>{crewMemberInfo.type ? crewMemberInfo.type : '-'}</h5>
                        <p>{crewMemberInfo.person.country ? crewMemberInfo.person.country.name : 'No country listed'}</p>
                        {crewMemberInfo.person.url && 
                            <a href={crewMemberInfo.person.url} className='mb-2'>tvmaze profile</a> 
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CrewMember;