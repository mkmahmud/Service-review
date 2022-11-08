import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceHomepage from './ServiceHomePage/ServiceHomepage'
import './ServicesHomePage.css'

const ServicesHomePage = () => {

    const [services, setServices] = useState([])

    // Get data from server 
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='py-20'>
        <h2 className='text-5xl font-bold py-20'>Services</h2>
        <div className="services">
            {
                services.map(service => <ServiceHomepage key={service._id} serviceData={service}></ServiceHomepage>)
            }
        </div>
        <button className='btn btn-success my-20'><Link to='/services'>See All</Link></button>
    </div>
    );
};

export default ServicesHomePage;