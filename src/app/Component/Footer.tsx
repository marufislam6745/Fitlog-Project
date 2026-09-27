import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
        <div className="border-t border-mauve-800 mt-3">
            <div className='lg:w-300 mx-auto lg:flex items-center justify-between text-center py-10'>
                <div className='flex items-center justify-center gap-2'>
                    <Image src={logo} alt="footer photo" width={28} height={30}></Image>
                    <h2 className='font-bold text-2xl'>FITLOG</h2>
                </div>
                <p className='text-sm text-mauve-400'>© 2026 FitLog — Workout Library. Train hard ,log honest.</p>
            </div>
        </div>
    );
};

export default Footer;