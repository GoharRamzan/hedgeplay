import React from 'react';
import video from '../assets/hero.mp4';
import image from '../assets/hedgemob.png'
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 opacity-90 left-0 w-full h-full object-cover"
      >
       <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0  md:top-24 flex   items-center justify-center">
        <div className="text-center text-white px-4 w-[100%] md:w-[60%] overflow-hidden flex flex-col">
          <h1 className="hidden sm:block text-5xl font-bold mb-4 leading-14 ">Smart&nbsp;<span className='bg-[#1A325E] rounded-xl  px-2'>Web</span>&nbsp;Based <br /> Hedging App</h1>
          {/* this is for mobile */}
          <h1 className="block sm:hidden text-4xl  font-bold mb-4  ">Smart&nbsp;<span className='bg-[#1A325E] rounded-xl  px-2'>Server</span>&nbsp;<br /> Based Hedging App</h1>
          {/* //// */}
          <p className="text-lg md:text-xl mb-6 ">Stay Ahead. Trade smarter. Hedge your way to success.</p>
        
        </div>
        <div className='hidden md:flex w-[50%] md:w-[40%]  justify-center items-center'>
            <img src={image} alt="" className='w-[100%] md:w-[70%]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
