import React from 'react';
import { Link } from 'react-router-dom';

const Episode = () => {
    return (
        <div>
            <h2>Episode</h2>
            <Link to="/episode-details">Details</Link>
        </div>
    );
};

export default Episode;