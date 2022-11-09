import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import Reviews from './Reviews/Reviews';

const ServiceDetails = () => {


    // User Data 
    const { user } = useContext(AuthContext)
   

    const userName = user?.displayName;
    const userImg = user?.photoURL;
    const userEmail = user?.email;

    // Loader Data
    const data = useLoaderData();
    const { _id, title, img, description, price } = data;

    // Reviews Data State 
    const [reviewData, setreviewData] = useState([])

    // Load Review Details
    useEffect(()=>{
        fetch(`http://localhost:5000/reviewdata?id=${_id}`)
         .then(res => res.json())
         .then(data => setreviewData(data))
    },[_id])


console.log(reviewData)
    // Handel Review Submit 
    const handelSubmitReview = (e) => {
        e.preventDefault();
        const message = e.target.reviewMessage.value;
        const rating = e.target.rating.value;

        const userReview = {
            serviceID:_id,
            userName, 
            userImg, 
            message,
            rating,
            userEmail,
            title,
            img
        }

        fetch(`http://localhost:5000/addreview`, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        console.log(userReview)
    }

    return (
        <div className='py-10 text-left'>
            <div className="heading">
                <h2 className='text-left font-bold text-5xl'>  Details  Page  </h2>
            </div>
            <div className="details bg-accent-focus text-white rounded-lg">
                <img src={img} className='h-96 my-10 w-full rounded-lg' alt="" />
                <div className="body shadow-xl p-5">
                    <div className="body-title shadow-lg py-10 flex justify-between">
                        <h2 className=' font-bold text-4xl text-orange-400' >{title}</h2>
                        <h2 className=' font-bold text-4xl text-orange-400' > ${price}</h2>
                    </div>
                    <p className='text-xl py-5'>{description.pra1}</p>
                    <p className='text-xl py-10'>{description.pra2}</p>
                </div>
            </div>
            <div className="review my-20">
                <h2 className='text-4xl font-bold my-10'>{reviewData?.length} Reviews</h2>
                {
                    reviewData.map(reviewDataMap => <Reviews key={reviewDataMap._id} data={reviewDataMap}></Reviews>)
                }
               
            </div>
            <div className="writeAreview">
                <h2 className='text-4xl font-bold my-10'>Write a review</h2>
                {
                    user?.uid ?
                        <div className="reviewWrite">
                            <form onSubmit={handelSubmitReview}>
                                <label className="label">
                                    <span className="label-text">Write your Review</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full" name='reviewMessage' placeholder="Write a review"></textarea>
                                <label className="label">
                                    <span className="label-text">Select rating</span>
                                </label>
                                <select name='rating' className="select select-bordered w-full max-w-xs">
                                    <option value='1' >1</option>
                                    <option value='2' >2</option>
                                    <option value='3' >3</option>
                                    <option value='4' >4</option>
                                    <option value='5' selected>5</option>
                                </select>
                                <br />
                                <button type='submit' className="btn btn-success my-3">Submit</button>
                            </form>
                        </div>
                        :

                        <h2 className='text-lg p-5 my-5 bg-error text-white'>Your Have to log in for Write a Review <Link to='/login' className='font-bold'>Log in</Link></h2>
                }

            </div>
        </div>
    );
};

export default ServiceDetails;