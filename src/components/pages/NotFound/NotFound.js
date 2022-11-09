import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <div className='notFoundDiv' title="404">404</div>
            <Link to='/' className='text-green-500'> Go Home</Link>
        </div>
    );
};

export default NotFound;