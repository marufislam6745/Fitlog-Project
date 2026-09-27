import Link from 'next/link';
import React from 'react';

const Blankdata = () => {
    return (
        <div className='text-center py-5'>
            <h3 className='text-2xl font-bold'>NOTHING HERE YET</h3>
            <p className='text-sm text-mauve-400'>Browser the library add a lift to get today moving</p>
            <Link href="../../fitlog">
                <button className='btn my-5 bg-lime-400 rounded-3xl border-none'>Go to workouts</button>
            </Link>
        </div>
    );
};

export default Blankdata;