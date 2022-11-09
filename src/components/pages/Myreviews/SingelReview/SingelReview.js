import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hoocks/useTitle';

const SingelReview = ({ data, deleteHandeler }) => {
    useTitle('Reviews')
    const { _id, message, serviceID, title, img } = data;

    const [update, setUpdate] = useState(false);

    const updateHandeler = (id) => {
        setUpdate(!update)

    }
// Handel update 
    const handelUpdate = (e) => {
        e.preventDefault()
        const updateMessage = e.target.updateMessage.value;
        fetch(`https://mk-server-mkmahmud.vercel.app/myreview/${_id}`, {
            method:'PATCH',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({updateReview:updateMessage })

        })
        .then(res => res.json())
        .then((data => console.log(data)))
    }

    return (
        <div className="singelReview flex justify-between p-5 w-full bg-green-300 my-10">
            <img src={img} className='h-32' alt="" />
            <div className="details p-3">
                <div className="serviceTitle"><Link to={`/services/${serviceID}`} className='text-2xl font-bold'>{title}</Link></div>
                <div className="reviews py-5">{message}</div>
                {
                    update ?
                        <form onSubmit={handelUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update your review</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-24 w-96" name='updateMessage' defaultValue={message}></textarea>
                                <button className='btn btn-success text-black font-bold' type='submit'>Update</button>
                            </div>
                        </form>
                        :
                        ''
                }

            </div>
            <div className="actions flex items-center">
                <label className="btn btn-warning" onClick={() => updateHandeler(_id)}>Update</label>
                <button className='btn btn-danger mx-4' onClick={() => deleteHandeler(_id)} >Delete</button>
            </div>



        </div>
    );
};

export default SingelReview;