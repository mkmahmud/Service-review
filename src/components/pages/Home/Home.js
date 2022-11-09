import React from 'react';
import ServicesHomePage from './ServicesHomePage/ServicesHomePage';
import Hero from './Hero/Hero';
import useTitle from '../../Hoocks/useTitle';
import About from './About/About';
import DownloadApp from './DownloadApp/DownloadApp';
import GetInTouch from './GetInTouch/GetInTouch';

const Home = () => {
  useTitle('MK ')
    return (
        <div>
          <Hero></Hero>
          <ServicesHomePage></ServicesHomePage>
          <About></About>
          <DownloadApp></DownloadApp>
          <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;