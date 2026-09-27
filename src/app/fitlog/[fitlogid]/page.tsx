import Image from 'next/image';
import React from 'react';
import { Fitlogtype } from '@/Type';
import Planbutton from '@/app/Component/Planbutton';
import Savebutton from '@/app/Component/Savebutton';

interface paramsProps {
    params: Promise<{
        fitlogid: Fitlogtype
    }>
}
const page = async ({ params }: paramsProps) => {
    const { fitlogid } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/${fitlogid}`)
    const data = await res.json()

    return (
        <div className='lg:w-300 mx-auto my-10'>
            <div className='lg:grid grid-cols-2'>
                <div>
                    <Image className="rounded-xl" src={data.image} alt='data image' width={420} height={450}></Image>
                </div>
                <div>
                    <h2 className='text-2xl font-bold my-2'>{data.name}</h2>
                    <p className='text-sm text-mauve-500'>{data.description}</p>
                    <button className='btn bg-lime-400 border-none rounded-3xl my-4'>{data.muscleGroups}</button>
                    <div className='bg-mauve-900 border border-mauve-700 rounded-xl'>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Equipment</p>
                            <p>{data.equipment}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Difficulty</p>
                            <p>{data.difficulty}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Rets</p>
                            <p>{data.sets}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Reps</p>
                            <p>{data.reps}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Duration</p>
                            <p>{data.duration}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6 border-b border-mauve-700'>
                            <p className='text-mauve-500'>Calories</p>
                            <p>{data.caloriesBurned}</p>
                        </div>
                        <div className='flex items-center justify-between p-2 px-6'>
                            <p className='text-mauve-500'>Rating</p>
                            <p>{data.rating}</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <h3 className='text-2xl'>INSTRUCTIONS</h3>
                        <p className='text-mauve-400 mt-2'>{data.instructions}</p>
                    </div>
                    <div className='flex'>
                        <Planbutton data={data}></Planbutton>
                        <Savebutton data={data}></Savebutton> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;