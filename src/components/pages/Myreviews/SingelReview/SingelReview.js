import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingelReview = ({data}) => {
    const {message, serviceID, title, img} = data;

    
    
    return (
        <div className="singelReview flex justify-between p-5 w-full bg-green-300 my-10">
            <img src={img} className='h-32' alt="" />
            <div className="details p-3">
                <div className="serviceTitle"><Link to={`/services/${serviceID}`} className='text-2xl font-bold'>{title}</Link></div>
                <div className="reviews">{message}</div>
            </div>
            <div className="actions flex items-center">
                <button className='btn btn-warning' >Update</button>
                <button className='btn btn-danger mx-4' >Delete</button>
            </div>
        </div>
    );
};

export default SingelReview;