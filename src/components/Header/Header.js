import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Header = () => {
    const [searchString, setSearchString] = useState('')
    const navigate = useNavigate()

    function changeHandler(e) {
        setSearchString(e.target.value)
    }

    function submitHandler(e) {
        e.preventDefault()
        navigate(`/results/${searchString}`)
        setSearchString('')
    }

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
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='searchInput' >
                    <Row>
                        <Col className='gx-2'>
                            <Form.Control 
                                type='text'
                                placeholder='Search for shows'
                                style={{height: '2.5em'}}
                                onChange={changeHandler}
                                value={searchString}
                            />
                        </Col>
                        <Col className='gx-2'>
                            <Button 
                                variant='light' 
                                type='submit'
                                style={{ height: '2.5em' }}
                            >Submit</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </header>
    );
};

export default Header;