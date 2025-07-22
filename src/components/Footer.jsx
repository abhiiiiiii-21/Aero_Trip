import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#1DA1F1] text-white pt-10 px-4 sm:px-6'>

            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-x-40 gap-y-8 items-start'>

                <div className='w-full lg:max-w-xs space-y-2'>
                    <div className='flex items-center gap-2'>
                        <Plane />
                        <h2 className='text-xl font-semibold'>AeroTrip</h2>
                    </div>
                    <p className='text-sm leading-relaxed'>
                        Real-time flight tracking and status updates to keep you informed about your journey.
                    </p>
                    <div className='flex gap-3 pt-2'>
                        <Facebook size={18} className='cursor-pointer hover:opacity-80' />
                        <Twitter size={18} className='cursor-pointer hover:opacity-80' />
                        <Instagram size={18} className='cursor-pointer hover:opacity-80' />
                        <Linkedin size={18} className='cursor-pointer hover:opacity-80' />
                    </div>
                </div>


                <div className='w-full sm:w-auto lg:w-auto space-y-1 text-sm'>
                    <h2 className='text-xl font-semibold mb-2.5'>Quick Links</h2>
                    <Link to='/' className='cursor-pointer hover:opacity-80 block'>Home</Link>
                    <Link to='/search' className='cursor-pointer hover:opacity-80 block'>Track Flight</Link>
                    <Link to='/about' className='cursor-pointer hover:opacity-80 block'>About Us</Link>
                    <Link to='/contact' className='cursor-pointer hover:opacity-80 block'>Contact</Link>
                </div>

                <div className='w-full sm:w-auto lg:w-auto space-y-1 text-sm'>
                    <h2 className='text-xl font-semibold mb-2.5'>Our Services</h2>
                    <p className='cursor-pointer hover:opacity-80'>Flight Tracking</p>
                    <p className='cursor-pointer hover:opacity-80'>Flight Radar</p>
                    <p className='cursor-pointer hover:opacity-80'>Delay Notifications</p>
                    <p className='cursor-pointer hover:opacity-80'>Travel Updates</p>
                </div>

                <div className='w-full sm:w-auto lg:w-auto space-y-1 text-sm'>
                    <h2 className='text-xl font-semibold mb-2.5'>Contact Us</h2>

                    <div className='flex items-start gap-2'>
                        <MapPin size={16} />
                        <p>123 Aviation Way, Delhi, 131001</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Phone size={16} />
                        <p>+91 9171983620</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <Mail size={16} />
                        <p>support@aerotrip.com</p>
                    </div>
                </div>
            </div>

            <div className='w-full h-px bg-gray-700 mt-10'></div>

            <div className='text-center mt-6 pb-6 text-xs sm:text-sm'>
                <p>© 2025 SkyTrack. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
