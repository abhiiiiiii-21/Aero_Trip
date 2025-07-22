import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../miniComponents/Button';

const Hero = ({ setTab }) => {

  const navigate = useNavigate();

  useEffect(() => {
    setTab("home");
  }, [setTab]);

  const handleTrackFlight = () => {
    navigate('/search');
  };

  return (
    <div className="relative w-full h-screen min-h-[600px]">
      <video src="./timelapse.mp4" autoPlay loop muted className="w-full h-full object-cover blur-md" />

      <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-20 text-center mx-auto">
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#343fe0] to-[#3cceff] bg-clip-text text-transparent font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">

          <p>Real-time Flight</p>
          <p>Tracking Made Simple</p>

        </div>

        <div className="mt-6 sm:mt-8 md:mt-9 font-light text-base sm:text-lg md:text-2xl text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.5)] tracking-widest mb-3.5">

          <p>Stay updated with instant flight status, delay notifications,</p>

          <p>gate changes, and more. Never miss important flight</p>

          <p>information again.</p>
        </div>

        <div className="mt-6 sm:mt-8">

          <Button onClick={handleTrackFlight}>Track Flight</Button>

        </div>
      </div>
    </div>
  );
};

export default Hero;
