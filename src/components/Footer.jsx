import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-[#1DA1F1] text-white pt-10 px-6'>

            <div className='max-w-7xl mx-auto flex flex-wrap gap-x-42 gap-y-8'>

                <div className='max-w-xs space-y-2'>
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


                <div className='space-y-1 text-sm'>
                    <h2 className='text-xl font-semibold mb-2.5'>Quick Links</h2>
                    <p className='cursor-pointer hover:opacity-80'>Home</p>
                    <p className='cursor-pointer hover:opacity-80'>Track Flight</p>
                    <p className='cursor-pointer hover:opacity-80'>Flight Radar</p>
                    <p className='cursor-pointer hover:opacity-80'>About Us</p>
                    <p className='cursor-pointer hover:opacity-80'>Contact</p>
                </div>

                <div className='space-y-1 text-sm'>
                    <h2 className='text-xl font-semibold mb-2.5'>Our Services</h2>
                    <p className='cursor-pointer hover:opacity-80'>Flight Tracking</p>
                    <p className='cursor-pointer hover:opacity-80'>Flight Radar</p>
                    <p className='cursor-pointer hover:opacity-80'>Delay Notifications</p>
                    <p className='cursor-pointer hover:opacity-80'>Travel Updates</p>
                </div>

                <div className='space-y-1 text-sm'>
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

            <div className='text-center mt-6 pb-6'>
                <p>© 2025 SkyTrack. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
