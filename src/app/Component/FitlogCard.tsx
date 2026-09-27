import { Fitlogtype } from '@/Type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaFire } from "react-icons/fa";


interface fitlogProps {
    fitlog: Fitlogtype
}

const FitlogCard = ({ fitlog }: fitlogProps) => {
    return (
        <Link href={`/fitlog/${fitlog.id}`}>
            <div className="card bg-mauve-900 shadow-sm border border-mauve-700 my-4">
                <figure>
                    <Image className='object-cover' src={fitlog.image} alt='fitlog photo' width={390} height={350}></Image>
                </figure>
                <div className='p-5'>
                    <p className='py-1 px-2 bg-lime-400 inline-block rounded-2xl text-sm font-bold text-black'>{fitlog.muscleGroups}</p>
                    <h2 className="card-title mt-4">{fitlog.name}</h2>
                    <p className='text-sm text-mauve-400'>{fitlog.equipment}</p>
                    <div className='flex justify-start items-center gap-4 mt-4 pt-3 border-t border-mauve-500'>
                        <p className='flex items-center text-sm text-mauve-400'><CiClock2 /> {fitlog.duration} min</p>
                        <p className='flex items-center text-sm text-mauve-400'><FaFire /> {fitlog.caloriesBurned} kcal</p>
                        <p className='flex items-center text-sm text-mauve-400'><CiStar /> {fitlog.rating}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FitlogCard;