import { Container, Image, Row, Col } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CastMember = ({ castMemberInfo }) => {

    return (
        <Container className='displayCard border border-dark'>
            <Row>
                <Col xs='12' className='imgContainer'>
                        <Image 
                            variant='thumb' 
                            src={castMemberInfo.person.image ? castMemberInfo.person.image.medium : noImage} 
                            alt={castMemberInfo.person.name}
                            className='mt-3 image'
                        />
                </Col>
                <Col>
                    <hr/>
                    <div className='d-flex flex-column align-items-center'>
                        <h3>{castMemberInfo.person.name}</h3>
                        <h5><span>Character: </span>{castMemberInfo.character.name ? castMemberInfo.character.name : '-'}</h5>
                        <p>{castMemberInfo.person.country ? castMemberInfo.person.country.name : 'No country listed'}</p>
                        {castMemberInfo.person.url && 
                            <a href={castMemberInfo.person.url} className='mb-2'>tvmaze profile</a>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CastMember;