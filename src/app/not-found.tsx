import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className='text-center min-h-screen p-10'>
            <h1 className='text-5xl font-bold text-white'>404</h1>
            <h2 className='text-2xl font-semibold text-white'>Page Not Found</h2>
            <Link href="/" >
            <p className='bg-lime-400 py-2 px-4 rounded-2xl text-black my-6 inline-block'>go to home page</p>
            </Link>
        </div>
    );
};

export default Notfound;