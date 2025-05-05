import React, { useEffect } from 'react'
import Button from '../miniComponents/Button';

const Hero = ({ setTab }) => {
  useEffect(() => {
    setTab("home")
  }, [])
  return (
    <div className="relative w-full h-screen">
      <video src="./timelapse.mp4" autoPlay loop muted className="w-full h-full object-cover blur-md" />


      <div className='absolute p-20 w-full text-center   mx-auto h-full flex-col top-0 left-0 flex justify-center items-center'>
        <div className="text-9xl bg-gradient-to-r from-[#3cceff] to-[#343fe0] bg-clip-text text-transparent font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
          <p>Real-time Flight</p>
          <p>Tracking Made Simple</p>
        </div>

        <div className="mt-9 font-light text-2xl text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] tracking-widest mb-3.5">
          <p>Stay updated with instant flight status, delay notifications,</p>
          <p>gate changes, and more. Never miss important flight</p>
          <p>information again.</p>
        </div>
        <Button>Track Flight</Button>

      </div>

    </div>


  );
};

export default Hero;
