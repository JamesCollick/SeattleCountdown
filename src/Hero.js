import React from 'react';
import Countdown from './Countdown';
import spaceneedle from './spaceneedle.png';

const Hero = () => {
  return (
      <div className="hero min-h-screen flex items-center justify-center shadow-lg">
      <div className="hero-overlay bg-opacity-10 absolute inset-0"></div>
      <div className="hero-content text-center text-neutral-content z-10 flex flex-col items-center justify-center shadow-lg">
        <div className='SpaceNeedle'><img src={spaceneedle}/></div>
        <div className='bg-transparent border-2 border-white p-5 rounded-3xl shadow-lg'>
          <h1 className="mb-5 text-5xl font-bold" style={{textShadow: '2px 2px #000'}}>Hello Babe,</h1>
          <p className="mb-5 text-2xl" style={{textShadow: '2px 2px #000'}}>
            This is how much time we have until our Seattle vacation!
          </p>
          <div className='flex justify-center shadow-lg'>
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;