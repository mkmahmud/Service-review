import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    // Get data from server 
    useEffect(() => {
        fetch(`https://mk-server-mkmahmud.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className='py-20'>
            <h2 className='text-5xl font-bold py-20'>Services</h2>
            <div className="services">
                {
                    services.map(service => <Service key={service._id} serviceData={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;