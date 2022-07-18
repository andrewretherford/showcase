import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import CastMember from '../CastMember/CastMember';
import data from '../../cast.json'
import { removeDuplicates } from './removeDuplicates';

const sortedCast = removeDuplicates(data)

const Cast = () => {

    return (
        <Container className='mt-4 mb-4'>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
                {sortedCast ?
                    sortedCast.map((castMember, index) => <CastMember key={index} castMemberInfo={castMember}/>)
                    : <p>Loading...</p>
                }    
            </Row>
        </Container>
    );
};

export default Cast;