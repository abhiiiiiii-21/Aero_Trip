import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';

const Navbar = ({ tab }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className="flex justify-between items-center shadow-xl rounded-4xl bg-[#dfdfdf] h-16 px-4 sm:px-6 md:px-10 mt-2 md:mt-4 max-w-full md:lg:w-3/4 mx-auto">

        <div className="flex items-center space-x-2">
          <Plane className="text-sky-500 w-7 h-7" />
          <p className="text-lg sm:text-xl font-semibold text-gray-800">AeroTrip</p>
        </div>


        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>


        <div className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
          <Link to="/" className={`hover:text-gray-500 ${tab === "home" ? "text-sky-500" : ""}`}>Home</Link>
          <Link to="/search" className={`hover:text-gray-500 ${tab === "search" ? "text-sky-500" : ""}`}>Track Flight</Link>
          <Link to="/about" className={`hover:text-gray-500 ${tab === "about" ? "text-sky-500" : ""}`}>About</Link>
          <Link to="/contact" className={`hover:text-gray-500 ${tab === "contact" ? "text-sky-500" : ""}`}>Contact</Link>
        </div>

        <div className='hidden md:flex space-x-4 cursor-pointer'>
          <SignedOut >
            <SignInButton className="cursor-pointer" />
            <SignUpButton className="cursor-pointer" />
          </SignedOut>
          <SignedIn>
            <UserButton className="cursor-pointer"/>
          </SignedIn>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#dfdfdf] shadow-xl rounded-b-2xl flex flex-col items-center py-4 z-40 md:hidden animate-fade-in">
            <Link to="/" className={`py-2 w-full text-center hover:text-sky-500 ${tab === "home" ? "text-sky-500 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/search" className={`py-2 w-full text-center hover:text-sky-500 ${tab === "search" ? "text-sky-500 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Track Flight</Link>
            <Link to="/about" className={`py-2 w-full text-center hover:text-sky-500 ${tab === "about" ? "text-sky-500 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className={`py-2 w-full text-center hover:text-sky-500 ${tab === "contact" ? "text-sky-500 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className='flex flex-col items-center space-y-2 mt-2 w-full'>
              <SignedOut >
                <SignInButton className="cursor-pointer w-full" />
                <SignUpButton className="cursor-pointer w-full" />
              </SignedOut>
              <SignedIn>
                <UserButton className="cursor-pointer w-full"/>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
