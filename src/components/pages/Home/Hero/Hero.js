import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/Images/hero1.png'

const Hero = () => {
    return (
        <div className="hero h-[700px]" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        <span>Take Your Skills</span>
                        <span>​To The Next Level</span>
                    </h1>
                    <p className="mb-5">PREMIUM ONLINE & INDIVIDUAL PERSONAL TRAINING IN FAREHAM WITH ROBERT COTTERILL</p>
                    <button className="btn btn-accent"><Link to='/services'>Get Started </Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;