import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceHomepage = ({ serviceData }) => {

    // Data
    const { title, img, description } = serviceData;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl shadow-2xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className='h-52 w-full' alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.pra1}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHomepage;