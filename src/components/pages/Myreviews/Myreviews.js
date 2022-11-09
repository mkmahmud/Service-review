import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import './Myreviews.css'
import SingelReview from './SingelReview/SingelReview';

const Myreviews = () => {

    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const userEmail = user?.email;

        // Load My Reviews 
        useEffect(()=>{
            fetch(`http://localhost:5000/myreview?email=${userEmail}`)
             .then(res => res.json())
             .then(data => setMyReviews(data))
        },[userEmail])
    
    

    return (
        <div>
            <div class="main py-10">
                <h1 className='text-2xl font-bold '>My reviews</h1>
                <h2 class="sub-heading">Your All reviews</h2>
                <section className='my-10' >
                    {
                        myReviews.map(myreview => <SingelReview key={myreview._id} data={myreview}></SingelReview>)
                    }
                    
                </section>
            </div>
        </div>
    );
};

export default Myreviews;