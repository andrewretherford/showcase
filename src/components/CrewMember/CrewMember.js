import { Container, Image, Row, Col } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CrewMember = ({ crewMemberInfo }) => {

    return (
        <Container className='displayCard border border-dark'>
            <Row>
                <Col xs='12' className='d-flex align-items-center justify-content-center' style={{height: '303px'}}>
                    {crewMemberInfo.person.image ? 
                        <Image 
                            variant='thumb' 
                            src={crewMemberInfo.person.image.medium} 
                            alt={crewMemberInfo.person.name}
                            className='mt-3'
                        />
                        : <Image 
                            variant='thumb' 
                            src={noImage} 
                            alt='No image' 
                            style={{width: '210px'}}
                            className='mt-2'
                        />
                    }
                </Col>
                <Col>
                    <hr/>
                    <div className='d-flex flex-column align-items-center'>
                        <h3>{crewMemberInfo.person.name}</h3>
                        <h5 style={{textAlign: 'center'}}><span>Title: </span>{crewMemberInfo.type ? crewMemberInfo.type : '-'}</h5>
                        {crewMemberInfo.person.country ? 
                            <p>{crewMemberInfo.person.country.name}</p>
                            : <p>No country listed</p>
                        }
                        <a 
                            href={crewMemberInfo.person.url}
                            style={{ textDecoration: 'none' }}
                            className='mb-2'
                        >tvmaze profile</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CrewMember;