import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const ServiceDetails = () => {


    // User Data 
    const { user } = useContext(AuthContext)
    console.log(user)

    const userName = user?.displayName;
    const userImg = user?.photoURL;

    // Loader Data
    const data = useLoaderData();
    const { _id, title, img, description, price } = data;



    // Handel Review Submit 
    const handelSubmitReview = (e) => {
        e.preventDefault();
        const message = e.target.reviewMessage.value;
        const rating = e.target.rating.value;


        console.log(_id, userName, userImg, message, rating)
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
                <h2 className='text-4xl font-bold my-10'>10 Reviews</h2>
                <div className="reviews">
                    <div className="SingelReviews flex items-center shadow-xl my-10 py-5">
                        <img src="http://cdn.onlinewebfonts.com/svg/img_312847.png" className='h-12 px-10' alt="" />
                        <div className="reviewInfo">
                            <h2 className='font-bold py-2'>Mahmud</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos nobis in corrupti adipisci dolorem provident minima eum et id quos, deserunt fugiat voluptate reprehenderit officia, repellat mollitia inventore qui? Fugit dicta veritatis odit accusantium atque libero est distinctio, culpa assumenda eos quaerat reiciendis voluptate harum quod doloremque. Alias, tempora!</p>
                            <p className='text-orange-600'>Rating: 4.7</p>
                        </div>
                    </div>
                </div>
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