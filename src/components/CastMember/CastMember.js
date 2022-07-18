import { Link } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap';
import noImage from '../../images/no-image.png'

const CastMember = ({ castMemberInfo }) => {


    return (
        <Container className='displayCard border border-dark'>
            <Row>
                <Col xs='12' className='d-flex align-items-center justify-content-center'>
                    {castMemberInfo.person.image ? 
                        <Image 
                            variant='thumb' 
                            src={castMemberInfo.person.image.medium} 
                            alt={castMemberInfo.person.name}
                            className='mt-2'
                        />
                        : <Image 
                            variant='thumb' 
                            src={noImage} 
                            alt='No image' 
                            style={{height: '295px', width: '210px'}}
                            className='mt-2'
                        />
                    }
                </Col>
                <Col>
                    <hr/>
                    <div className='d-flex flex-column align-items-center'>
                        <h3>{castMemberInfo.person.name}</h3>
                        <p>{castMemberInfo.type}</p>
                        {castMemberInfo.person.country ? 
                            <p>{castMemberInfo.person.country.name}</p>
                            : <p>No country listed</p>
                        }
                        <a href=""></a>
                        <a 
                            href={castMemberInfo.person.url}
                            style={{ textDecoration: 'none' }}
                            className='mb-2'
                        >tvmaze profile</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CastMember;