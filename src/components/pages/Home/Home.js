import React from 'react';
import ServicesHomePage from './ServicesHomePage/ServicesHomePage';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <ServicesHomePage></ServicesHomePage>
        </div>
    );
};

export default Home;