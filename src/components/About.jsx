import { useEffect } from 'react';
import { Globe, Target, Shield, TrendingUp } from 'lucide-react';
import ContactButton from '../miniComponents/contactButton'
import { AnimatedTestimonialsDemo } from './Animatedtesti';
import Footer from './Footer';


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
      <div className="bg-[#DFF1FE] py-40 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1da1f2] mb-6">About AeroTrip</h2>
        <p className="max-w-2xl text-gray-700 text-base sm:text-lg px-2">
          AeroTrip was founded with a simple mission: to provide accurate, real-time flight
          information to travelers worldwide. Our platform helps thousands of people each day stay
          informed about their flights and make better travel decisions.
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-evenly items-center pt-12 pb-12 gap-8 bg-[#faf9f9] px-4'>
        <div className='max-w-md w-full'>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left'>Our Mission</p>
          <div className='mt-6 sm:mt-8 space-y-4 text-base sm:text-lg text-center md:text-left'>
            <p>At AeroTrip, we believe that accurate, timely information is essential for stress-free travel. Our mission is to empower travelers with the most reliable flight data possible, presented in a clear, intuitive interface.</p>
            <p>We continuously innovate to provide the best flight tracking experience, partnering with airlines and airports around the world to ensure our data is always up-to-date and accurate.</p>
          </div>

          <div className='mt-8 sm:mt-10 flex justify-center md:justify-start'>
            <ContactButton />
          </div>
        </div>

        <div className="w-[350px] h-[250px] sm:w-[500px] sm:h-[350px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg bg-transparent flex-shrink-0 flex items-center justify-center">
          <img
            src="./takeoff.png"
            alt="Airplane"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="bg-[#f5fbff] py-14 sm:py-20 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-blue-400 hover:scale-[1.02] flex flex-col items-center text-center cursor-pointer"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1DA1F1] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='pt-10 sm:pt-16 pb-10 sm:pb-16 bg-[#faf9f9] px-2'>
        <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4'>Meet Our Team</p>
        <p className='font-medium text-center text-sm sm:text-base'>The passionate aviation enthusiasts and tech experts behind AeroTrip, dedicated to </p>
        <p className='font-medium text-center mb-4 sm:mb-5 text-sm sm:text-base'>providing you with the best flight tracking experience.</p>
        <div className='mt-3 sm:mt-5'>
          <AnimatedTestimonialsDemo />
        </div>
      </div>

      <div className="bg-[#f5fbff] py-12 sm:py-20 px-2 sm:px-4 text-center">
        <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4'>Our Vision for the Future</p>

        <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-center max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500'>
          <p>
            We envision a future where travel is smoother, more predictable, and less stressful.
            AeroTrip is working towards connecting all aspects of the travel experience, from flight tracking to airport navigation,
            giving travelers complete visibility and control over their journey.
          </p>
          <p>
            As we grow, we remain committed to our core mission: providing accurate, real-time flight information to help people travel with confidence.
          </p>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;