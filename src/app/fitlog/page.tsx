import React from 'react';
import FitlogCard from '../Component/FitlogCard';
import { Fitlogtype } from '@/Type';

const fitlogPromise = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`)
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }

        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

const page = async () => {
    const fitlogs = await fitlogPromise()
    return (
        <div className='lg:w-300 lg:mx-auto py-6'>
            <h2 className='text-3xl font-bold'>THE LIBRARY</h2>
            <p className='text-mauve-400 pb-4'>Twelve lifts covering every major muscle group.</p>
            <div className='lg:grid grid-cols-3 gap-4'>
                {
                    fitlogs.map((fitlog: Fitlogtype) => <FitlogCard key={fitlog.id} fitlog={fitlog}></FitlogCard>)
                }
            </div>
        </div>
    );
};

export default page;