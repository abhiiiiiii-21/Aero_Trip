import React, { useEffect } from 'react';
import { Globe, Target, Shield, TrendingUp } from 'lucide-react';
import ContactButton from '../miniComponents/contactButton'


const coreValues = [
  {
    icon: <Globe className="h-12 w-12 text-[#1da1f2] mb-4" />, 
    title: "Global Perspective", 
    description: "We provide comprehensive flight coverage around the world, connecting travelers across borders."
  },
  {
    icon: <Target className="h-12 w-12 text-[#1da1f2] mb-4" />, 
    title: "Accuracy & Reliability", 
    description: "We're committed to delivering the most accurate flight information available, updating in real-time."
  },
  {
    icon: <Shield className="h-12 w-12 text-[#1da1f2] mb-4" />, 
    title: "User Privacy", 
    description: "We respect your privacy and handle your data with the utmost care and security."
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-[#1da1f2] mb-4" />, 
    title: "Continuous Innovation", 
    description: "We constantly improve our platform to provide the best flight tracking experience possible."
  }
];

const About = ({ setTab }) => {
  useEffect(() => {
    setTab("about");
  }, []);

  return (
    <div>
      <div className="bg-[#f5fbff] py-40 flex flex-col items-center text-center">
        <h2 className="text-6xl font-bold text-[#1da1f2] mb-6">About AeroTrip</h2>
        <p className="max-w-2xl text-gray-700 text-lg">
          AeroTrip was founded with a simple mission: to provide accurate, real-time flight
          information to travelers worldwide. Our platform helps thousands of people each day stay
          informed about their flights and make better travel decisions.
        </p>
      </div>

      <div className='flex justify-evenly mt-16 mb-16 flex-wrap gap-8'>
        <div className='max-w-md'>
          <p className='text-4xl font-bold'>Our Mission</p>
          <div className='mt-8 space-y-4'>
            <p>At AeroTrip, we believe that accurate, timely information is essential for stress-free travel. Our mission is to empower travelers with the most reliable flight data possible, presented in a clear, intuitive interface.</p>
            <p>We continuously innovate to provide the best flight tracking experience, partnering with airlines and airports around the world to ensure our data is always up-to-date and accurate.</p>
          </div>
          <div className='mt-10'>
          <ContactButton/>
        </div>
        </div>
        <div>
          <img src="./takeoff.png" alt="Airplane taking off" className='h-3xl w-3xl rounded-3xl' />
        </div>

        
      </div>

      <div className="bg-[#f5fbff] py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {coreValues.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-16 mb-16'>
        <p className='text-4xl font-bold text-center mb-4'>Meet Our Team</p>
        <p className='font-medium text-center'>The passionate aviation enthusiasts and tech experts behind AeroTrip, dedicated to </p>
        <p className='font-medium text-center mb-5'>providing you with the best flight tracking experience.</p>
      </div>
    </div>
  );
};

export default About;