import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../../../assets/Images/about.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-neutral-content" id='about'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={aboutImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="py-6">Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences. The ability to learn is possessed by humans, animals, and some machines; there is also evidence for some kind of learning in certain plants.</p>
                    <button className="btn btn-primary"><Link to='/services'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;