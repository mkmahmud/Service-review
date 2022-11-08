import React from 'react';

const Reviews = ({data}) => {

    const { userName, userImg, message, rating} = data;

    return (
        <div className="reviews">
        <div className="SingelReviews flex items-center shadow-xl my-10 py-5">
            <img src={userImg} className='h-12 px-10' alt="" />
            <div className="reviewInfo">
                <h2 className='font-bold py-2'>{userName}</h2>
                <p>{message}</p>
                <p className='text-orange-600'>Rating: {rating}</p>
            </div>
        </div>
    </div>
    );
};

export default Reviews;