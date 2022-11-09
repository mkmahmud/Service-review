import React, { useEffect, useState } from 'react';
import useTitle from '../../Hoocks/useTitle';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    useTitle('Services')

    const [services, setServices] = useState([])

    const [dataLOading, setDataloading] = useState(true)

    // Get data from server 
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setDataloading(false)
            })
    }, [])



    return (
        <div className='py-20'>
            <h2 className='text-5xl font-bold py-20'>Services</h2>
            {
                dataLOading ? <progress className="progress w-56 my-5"></progress> : ''
            }
            <div className="services">
                {
                    services.map(service => <Service key={service._id} serviceData={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;