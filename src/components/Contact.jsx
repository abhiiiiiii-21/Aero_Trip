import { useEffect } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../miniComponents/ContactForm';
import Footer from './Footer';
import FAQs from '../miniComponents/FAQs';

const Contact = ({ setTab }) => {
  
  useEffect(() => {
    setTab("contact")
  }, [])

  return (
    <div>
      <div className='text-center pt-40 bg-[#DFF1FE] pb-40'>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#1da1f2] mb-6">Contact Us</h2>

        <p className='text-base sm:text-lg md:text-xl text-gray-500'>Have questions, feedback, or need assistance? Our team is here to help. Reach out to us using any of the methods below.</p>
      </div>

      <div className='bg-[#F5FBFF]'>
        <div className="max-w-6xl mx-auto pt-10 sm:pt-16 flex flex-col md:flex-row justify-center items-center gap-6 w-full px-2 sm:px-4">

          <div className="group bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full md:w-80 text-center transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
            <div className="flex justify-center mb-4">

              <div className="bg-blue-100 rounded-full p-3">
                <Mail className="text-[#1DA1F1]" size={28} />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-1 group-hover:text-[#1DA1F1] transition-colors duration-300">Email Us</h3>

            <p className="text-[#1DA1F1] font-medium mb-1 cursor-pointer">support@aerotrip.com</p>
            
            <p className="text-gray-500 text-sm">For general inquiries and support</p>
          </div>

          <div className="group bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full md:w-80 text-center transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
            <div className="flex justify-center mb-4">

              <div className="bg-blue-100 rounded-full p-3">
                <Phone className="text-[#1DA1F1]" size={28} />
              </div>

            </div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-[#1DA1F1] transition-colors duration-300">Call Us</h3>

            <p className="text-[#1DA1F1] font-medium mb-1 cursor-pointer">+91 9171983620</p>

            <p className="text-gray-500 text-sm">Available 24/7 for urgent matters</p>
          </div>

          <div className="group bg-white border border-gray-200 rounded-2xl shadow-md p-6 w-full md:w-80 text-center transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 cursor-pointer">
            <div className="flex justify-center mb-4">

              <div className="bg-blue-100 rounded-full p-3">
                <MapPin className="text-[#1DA1F1]" size={28} />
              </div>

            </div>

            <h3 className="text-lg font-semibold mb-1 group-hover:text-[#1DA1F1] transition-colors duration-300">Visit Us</h3>

            <p className="text-[#1DA1F1] font-medium mb-1 cursor-pointer">
              123 Aviation Way, Delhi, 131001
            </p>

            <p className="text-gray-500 text-sm">Mon-Fri: 9AM - 5PM</p>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center px-2 sm:px-4 py-10 w-full">
          <ContactForm />
          <FAQs />
        </div>

        <div className="mt-5 mb-32 flex flex-col items-center text-center px-2 sm:px-4">

          <h3 className="text-3xl font-bold text-black mb-2">📍 Find Us</h3>

          <p className="text-gray-600 max-w-xl mb-6">
            Visit our headquarters located in the heart of <span className="font-medium text-black">Delhi</span>.
          </p>

          <div className="overflow-hidden rounded-2xl shadow-lg border border-black/10 w-full max-w-[1580px] h-[700px]">
            <img src="./headquarter.png" alt="Headquarters" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </div>
        </div>

        <div >
          <Footer/>
        </div>

      </div>
    </div>

  )
}

export default Contact