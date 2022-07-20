import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Navbar, Image } from 'react-bootstrap';
import home from '../../images/home.ico'

const Header = () => {
    const [searchString, setSearchString] = useState('')
    const navigate = useNavigate()

    function changeHandler(e) {
        setSearchString(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        searchString && navigate(`/results/${searchString}`)
        setSearchString('')
    }

    return (
        <Navbar fixed='top'
            style={{
                background: 'rgb(35,35,35)',
                minHeight: '100px',
            }}
        >
            <Row xs='2' md='1'
                className='d-flex align-items-center'
                style={{width: '100%'}}
            >
                <Col xs={{ span: 2, order: 1 }} md={{ span: 2 }} lg={{ span: 4, order: 0}}>
                    <Link to="/">
                        <Image src={home} alt='home icon' className='ms-5' style={{height: '40px'}} />
                    </Link>
                </Col>
                <Col xs={{ span: 12, order: 0 }} md={{ span: 12 }} lg={{ span: 4, order: 1 }}>
                        <h1 style={{color: 'rgb(200,160,0)', textAlign: 'center'}}>Showcase</h1>
                </Col>
                <Col xs={{ span: 10, order: 2 }} md={{ span: 10, order: 2 }} lg={{ span: 4 }}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='searchInput'>
                            <Row className='d-flex justify-content-end'>
                                <Col className='gx-1' xs='auto'>
                                    <Form.Control 
                                        type='text'
                                        placeholder='Search for shows'
                                        style={{height: '2.5em', maxWidth: '232px', background: 'rgb(230, 230, 230)'}}
                                        onChange={changeHandler}
                                        value={searchString}
                                    />
                                </Col>
                                <Col xs='auto' className=''>
                                    <Button 
                                        variant='light' 
                                        type='submit'
                                        style={{ height: '2.5em', background: 'rgb(55,55,55)', color: 'rgb(200,160,0)', border: 'black' }}
                                    >Submit</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Navbar>
    );
};

export default Header;