import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';
import SignedInButton from '../ui/SignedInButton';
import SignedUpButton from '../ui/SignedUpButton';

const Navbar = ({ tab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center relative backdrop-blur-lg bg-white/30 border border-white/20 shadow-md rounded-3xl h-16 px-4 sm:px-6 md:px-10 mt-2 md:mt-4 max-w-full md:lg:w-3/4 mx-auto text-black transition-all duration-300">

        <div className="flex items-center space-x-2">
          <Plane className="text-sky-600 w-7 h-7" />
          <p className="text-lg sm:text-xl font-semibold text-black">AeroTrip</p>
        </div>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-8 font-medium">

          {['home', 'search', 'about', 'contact'].map((item) => (
            <Link key={item} to={item === 'home' ? '/' : `/${item}`} className={`hover:text-sky-600 ${tab === item ? 'text-sky-600 font-semibold' : 'text-black' }`}>
              {item === 'search' ? 'Track Flight' : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

        </div>


        <div className="hidden md:flex items-center space-x-2">
          <SignedOut>
            <SignedInButton />
            <SignedUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{ elements: { userButtonAvatarBox: { width: '40px', height: '40px'}}}} />
          </SignedIn>

        </div>


        <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full z-40 backdrop-blur-lg bg-white/80 border-t border-white/30 shadow-lg rounded-b-2xl text-black animate-fade-in px-4 pb-4 pt-2 space-y-3">
          {['home', 'search', 'about', 'contact'].map((item) => (
            <Link key={item} to={item === 'home' ? '/' : `/${item}`} className={`block text-center text-lg py-1 rounded hover:text-sky-600 ${tab === item ? 'text-sky-600 font-semibold' : ''}`} onClick={() => setMenuOpen(false)} >
              {item === 'search' ? 'Track Flight' : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          <div className="flex flex-col items-center space-y-2 pt-2">
            <SignedOut>
              <SignedInButton />
              <SignedUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
