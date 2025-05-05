import React from 'react'
import { Plane } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


const Navbar = ({ tab }) => {
    return (
        <div className="flex justify-between items-center bg-[#F9FAFC] h-16 px-10 shadow-md">

            <div className="flex items-center space-x-2">
                <Plane className="text-sky-500 w-7 h-7" />
                <p className="text-xl font-semibold text-gray-800">AeroTrip</p>
            </div>


            <div className="flex space-x-8 text-gray-700 font-medium">
                <p className="hover:text-gray-500 cursor-pointer">
                    <a className={tab == "home" && "text-sky-500"} href="/">Home</a></p>
                <p className="hover:text-gray-500 cursor-pointer"><a className={tab == "search" && "text-sky-500"} href="/search">Search Flight</a></p>
                <p className="hover:text-gray-500 cursor-pointer"><a className={tab == "about" && "text-sky-500"} href="/about">About</a></p>
                <p className="hover:text-gray-500 cursor-pointer"><a className={tab == "contact" && "text-sky-500"} href="/contact">Contact</a></p>
            </div>

            <div>
                <SignedOut className="space-x-2" >
                    <SignInButton >

                    </SignInButton>
                    <SignUpButton />

                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>

    )
}

export default Navbar
