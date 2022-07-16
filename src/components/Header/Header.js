import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header className='d-flex align-items-center justify-content-between'
            style={{
                background: 'rgb(55,55,55)',
                minHeight: '100px',
            }}
        >
            <Link to="/"
                style={{
                    textDecoration: 'none',
                    color: 'gold',
                }}
                className='ms-5'
            >
                <h1>Showcase</h1>
            </Link>
            <Form>
                <Form.Group md={3} >
                    <Row>
                        <Col className='gx-2'>
                            <Form.Control 
                                type='text'
                                placeholder='Search for shows'
                                style={{height: '2.5em'}}
                            />
                        </Col>
                        <Col className='gx-2'>
                            <Button 
                                variant='light' 
                                type='submit'
                                style={{ height: '2.5em' }}
                                // className='ms-2 me-5'
                            >Submit</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </header>
    );
};

export default Header;