import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

const Navbar = ({ tab }) => {
  return (
    <div className='fixed top-0 left-0 w-full z-20'>
      <div className="flex justify-between mt-4 lg:w-3/4 mx-auto items-center shadow-xl rounded-4xl bg-[#dfdfdf] h-16 px-10">
        <div className="flex items-center space-x-2">
          <Plane className="text-sky-500 w-7 h-7" />
          <p className="text-xl font-semibold text-gray-800">AeroTrip</p>
        </div>

        <div className="flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className={`hover:text-gray-500 ${tab === "home" ? "text-sky-500" : ""}`}>Home</Link>
          <Link to="/search" className={`hover:text-gray-500 ${tab === "search" ? "text-sky-500" : ""}`}>Track Flight</Link>
          <Link to="/about" className={`hover:text-gray-500 ${tab === "about" ? "text-sky-500" : ""}`}>About</Link>
          <Link to="/contact" className={`hover:text-gray-500 ${tab === "contact" ? "text-sky-500" : ""}`}>Contact</Link>
        </div>

        <div className='space-x-4 cursor-pointer '>
          <SignedOut >
            <SignInButton className="cursor-pointer" />
            <SignUpButton className="cursor-pointer" />
          </SignedOut>
          <SignedIn>
            <UserButton className="cursor-pointer"/>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
