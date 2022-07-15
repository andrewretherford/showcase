import React from 'react';
import { Link } from 'react-router-dom';

const ShowDetails = () => {
    return (
        <div>
            <h2>ShowDetails</h2>
            <li>
                <Link to="/episodes">Episodes</Link>
            </li>
            <li>
                <Link to="/cast">Cast</Link>
            </li>
        </div>
    );
};

export default ShowDetails;