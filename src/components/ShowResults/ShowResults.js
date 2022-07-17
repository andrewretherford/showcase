import { Container, Row, Col } from 'react-bootstrap';
import Show from '../Show/Show';
import searchResults from '../../show-search.json'

const ShowResults = () => {
    return (
        <Container className='mt-4 mb-4'>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {searchResults.map(show => <Show key={show.id} showInfo={show}/>)}    
            </Row>
        </Container>
    );
};

export default ShowResults;