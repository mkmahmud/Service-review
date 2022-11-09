import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../Hoocks/useTitle';

const AddService = () => {

    useTitle('Add Services')
    const navigate = useNavigate();

    // Handel handelAddService
    const handelAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const imageURL = form.imageURL.value;
        const price = form.price.value;

        const newService = {
            title,
            description:{
                pra1:shortDescription,
                pra2:longDescription
            },
            img:imageURL,
            price
        }

        fetch('https://mk-server-mkmahmud.vercel.app/addservices', {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newService)
        })
         .then(res => res.json())
         .then(data => {
            navigate('/services')
        })
 
         form.reset();
        console.log(newService)
    }


    return (
        <>
            <div className="heading py-20">
                <h2 className='text-center text-5xl font-bold '>Add you own services</h2>
            </div>
            <div className="hero">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handelAddService}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" placeholder="Type your title here " name='title' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <input type="text" placeholder="Short description (100ch)" name='shortDescription' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Long Description</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" name='longDescription' placeholder="Long Description"></textarea>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input type="text" placeholder="Image Url" name='imageURL' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price:</span>
                                    </label>
                                    <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Add Services</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddService;