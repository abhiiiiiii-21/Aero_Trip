import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';
import SignInButton from '../ui/SignInButton'; // Adjust path if needed

const Navbar = ({ tab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full z-50'>
      <div className="relative flex justify-between items-center 
        backdrop-blur-lg bg-white/30 border border-white/20 
        shadow-md rounded-3xl h-16 px-4 sm:px-6 md:px-10 
        mt-2 md:mt-4 max-w-full md:lg:w-3/4 mx-auto text-black transition-all duration-300">

        {/* Logo */}
        <div className="flex items-center space-x-2 z-10">
          <Plane className="text-sky-600 w-7 h-7" />
          <p className="text-lg sm:text-xl font-semibold text-black">AeroTrip</p>
        </div>

        {/* Centered Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 lg:space-x-8 font-medium">
          <Link to="/" className={`hover:text-sky-600 ${tab === "home" ? "text-sky-600 font-semibold" : "text-black"}`}>Home</Link>
          <Link to="/search" className={`hover:text-sky-600 ${tab === "search" ? "text-sky-600 font-semibold" : "text-black"}`}>Track Flight</Link>
          <Link to="/about" className={`hover:text-sky-600 ${tab === "about" ? "text-sky-600 font-semibold" : "text-black"}`}>About</Link>
          <Link to="/contact" className={`hover:text-sky-600 ${tab === "contact" ? "text-sky-600 font-semibold" : "text-black"}`}>Contact</Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className='hidden md:flex space-x-4 items-center z-10'>
          <SignedOut>
            <SignInButton />
            <SignUpButton className="px-4 py-2 border border-sky-600 rounded text-sky-600 hover:bg-sky-600 hover:text-white transition" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full backdrop-blur-lg bg-white/30 border-t border-white/20 shadow-xl rounded-b-2xl flex flex-col items-center py-4 z-40 md:hidden animate-fade-in text-black">
            <Link to="/" className={`py-2 w-full text-center hover:text-sky-600 ${tab === "home" ? "text-sky-600 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/search" className={`py-2 w-full text-center hover:text-sky-600 ${tab === "search" ? "text-sky-600 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Track Flight</Link>
            <Link to="/about" className={`py-2 w-full text-center hover:text-sky-600 ${tab === "about" ? "text-sky-600 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className={`py-2 w-full text-center hover:text-sky-600 ${tab === "contact" ? "text-sky-600 font-semibold" : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
            <div className='flex flex-col items-center space-y-2 mt-2 w-full'>
              <SignedOut>
                <SignInButton />
                <SignUpButton className="w-full px-4 py-2 border border-sky-600 rounded text-sky-600 hover:bg-sky-600 hover:text-white transition" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
