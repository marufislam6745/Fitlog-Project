import { Fitlogtype } from '@/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import Savedatadelet from './Savedatadelet';

const Saveddata = ({ data }: { data: Fitlogtype }) => {
    return (
        <div className='lg:flex items-center justify-between my-4 p-4 bg-black rounded-2xl border border-mauve-700'>
            <div className='flex items-center mb-5'>
                <div>
                    <Image className="rounded-2xl" src={data.image} alt='photo' width={100} height={150}></Image>
                </div>
                <div className='ml-5'>
                    <h2 className='font-bold'>{data.name}</h2>
                    <p className='text-sm mt-2'>{data.equipment}</p>
                    <div className='flex justify-start items-center gap-4 mt-4 pt-3 border-t border-mauve-500'>
                        <p className='flex items-center text-sm text-mauve-400'><CiClock2 /> {data.duration} min</p>
                        <p className='flex items-center text-sm text-mauve-400'><FaFire /> {data.caloriesBurned} kcal</p>
                        <p className='flex items-center text-sm text-mauve-400'><CiStar /> {data.rating}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Link href={`/fitlog/${data.id}`}>
                    <button className='btn bg-black rounded-2xl text-white'>View Delails</button>
                </Link>
                <p><Savedatadelet data={data}></Savedatadelet></p>
            </div>
        </div>
    );
};

export default Saveddata;