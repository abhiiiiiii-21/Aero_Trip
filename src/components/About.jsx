import React, { useEffect } from 'react'
import ContactButton from '../miniComponents/contactButton'


const About = ({ setTab }) => {
  useEffect(() => {
    setTab("about")
  }, [])

  return (
    <div>
      <div className=" bg-[#f5fbff] py-40 flex flex-col items-center text-center">
        <h2 className="text-6xl font-bold text-[#1da1f2] mb-6">About AeroTrip</h2>
        <p className="max-w-2xl text-gray-700 text-lg">
          AeroTrip was founded with a simple mission: to provide accurate, real-time flight
          information to travelers worldwide. Our platform helps thousands of people each day stay
          informed about their flights and make better travel decisions.
        </p>
      </div>


      <div className='flex justify-evenly mt-16 mb-16'> 
        <div>
          <p className='text-4xl font-bold'>Our Mission</p>
          <div className='mt-8'>
            <p>At AeroTrip, we believe that accurate, timely information is essential for</p>
            <p>stress-free travel. Our mission is to empower travelers with the most reliable</p>
            <p>flight data possible, presented in a clear, intuitive interface.</p>
          </div>

          <div className='mt-8'>
            <p>We continuously innovate to provide the best flight tracking experience,</p>
            <p>partnering with airlines and airports around the world to ensure our data is</p>
            <p>always up-to-date and accurate.</p>
          </div>

          <div className='mt-10'>
            <ContactButton/>
          </div>
        </div>
        <div>
          <img src="./takeoff.png" alt=""  className='h-3xl w-2xl rounded-3xl'/>
        </div>
      </div>

      <div className=" bg-[#f5fbff] py-40 flex flex-col items-center text-center">
              
      </div>
    </div>
  )
}

export default About
