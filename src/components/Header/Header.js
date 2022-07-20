import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col, Navbar, Image } from 'react-bootstrap';
import home from '../../images/home.ico'
import './Header.css'

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
        <Navbar fixed='top' className='navbar'>
            <Row xs='2' md='1' className='navRow'>
                <Col xs={{ span: 2, order: 1 }} md={{ span: 2 }} lg={{ span: 4, order: 0}}>
                    <Link to="/">
                        <Image src={home} alt='home icon' className='ms-5 homeImg'/>
                    </Link>
                </Col>
                <Col xs={{ span: 12, order: 0 }} md={{ span: 12 }} lg={{ span: 4, order: 1 }}>
                        <h1 className='title'>Showcase</h1>
                </Col>
                <Col xs={{ span: 10, order: 2 }} md={{ span: 10, order: 2 }} lg={{ span: 4 }}>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='searchInput'>
                            <Row className='d-flex justify-content-end'>
                                <Col className='gx-1' xs='auto'>
                                    <Form.Control 
                                        type='text'
                                        placeholder='Search for shows'
                                        className='formInput'
                                        onChange={changeHandler}
                                        value={searchString}
                                    />
                                </Col>
                                <Col xs='auto' className=''>
                                    <Button 
                                        variant='light' 
                                        type='submit'
                                        className='submitBtn'
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