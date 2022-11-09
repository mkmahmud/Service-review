import React from 'react';
import googleApp from '../../../../assets/Images/app/google.png'
import appleApp from '../../../../assets/Images/app/apple.png'
const imageStyle = {
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const DownloadApp = () => {
    return (
        <div className='downloadApp h-96 bg-green-400'>
            <h2 className='py-20 text-5xl font-bold'>Download Our App </h2>
            <img src={googleApp} style={imageStyle} className='h-20' alt="" />
            <img src={appleApp}  style={imageStyle} className='h-20' alt="" />
        </div>
    );
};

export default DownloadApp;