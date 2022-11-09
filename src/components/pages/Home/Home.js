import React from 'react';
import ServicesHomePage from './ServicesHomePage/ServicesHomePage';
import Hero from './Hero/Hero';
import useTitle from '../../Hoocks/useTitle';

const Home = () => {
  useTitle('MK ')
    return (
        <div>
          <Hero></Hero>
          <ServicesHomePage></ServicesHomePage>
        </div>
    );
};

export default Home;