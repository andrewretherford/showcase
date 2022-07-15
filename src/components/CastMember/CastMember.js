import React from 'react';
import { Link } from 'react-router-dom';

const CastMember = () => {
    return (
        <div>
            <h2>CastMember</h2>
            <Link to="/cast-member-details">Details</Link>
        </div>
    );
};

export default CastMember;