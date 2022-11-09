import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import useTitle from '../../Hoocks/useTitle';
import './Myreviews.css'
import SingelReview from './SingelReview/SingelReview';

const Myreviews = () => {
    useTitle('My Reviews')

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    const userEmail = user?.email;

    // Load My Reviews 
    useEffect(() => {
        fetch(`https://mk-server-mkmahmud.vercel.app/myreview?email=${userEmail}`, {
            headers:{
                authoraizetion: `Bearer ${localStorage.getItem('mk-tocken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [userEmail])



    // Delete handeler
    const deleteHandeler = id => {
        console.log(id)

        fetch(`https://mk-server-mkmahmud.vercel.app/myreview/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('Data delete success fully')
                    const remainingReviews = myReviews.filter(review => review._id !== id);
                    setMyReviews(remainingReviews)
                }
            })

    }





    return (
        <div>
            <div class="main py-10">
                <h1 className='text-2xl font-bold '>My reviews</h1>
                <h2 class="sub-heading">Your All reviews</h2>

                <section className='my-10' >
                  
                    {
                        myReviews.length !== 0 ? 
                        myReviews.map(myreview => <SingelReview key={myreview._id} data={myreview} deleteHandeler={deleteHandeler}></SingelReview>)

                        :
                         'No reviews were added'
                        
                    }

                </section>
            </div>
        </div>
    );
};

export default Myreviews;