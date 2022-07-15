import React from 'react';
import { Link } from 'react-router-dom';

const Show = () => {
    return (
        <div>
            <h2>Show</h2>
            <Link to="/show-details" >Details</Link>
        </div>
    );
};

export default Show;