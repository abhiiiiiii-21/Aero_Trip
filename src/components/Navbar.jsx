import React from 'react'
import { Plane } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#F9FAFC] h-15 items-center pl-10 pr-10 '>
      <div className='flex'>
        <Plane className='text-sky-400'/>
        <p class>AeroTrip</p>
      </div>
      <div className='flex'>
            <p>Home</p>
            <p>Search Flight</p>
            <p>About</p>
            <p>Contact</p>
            <button></button>
      </div>
    </div>
  )
}

export default Navbar
