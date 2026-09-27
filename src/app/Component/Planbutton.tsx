'use client'
import React, { useContext } from 'react';
import { Fitlogcontext } from '../context/fitlogContext';
import { Fitlogtype } from '@/Type';
import { MdOutlineDateRange } from "react-icons/md";
import { toast } from 'react-toastify';

const Planbutton = ({ data }: { data: Fitlogtype }) => {
    const { plan, setPlan } = useContext(Fitlogcontext)

    const handleplanButton = () => {
        const plans = plan.some(value => value.id === data.id)
        if (!plans) {
            setPlan([...plan, data])
            toast.success('Today plan add successfull')
        } else {
            toast.error('Today plan all ready add')
        }
    }

    return (
        <button onClick={() => handleplanButton()} className='btn bg-lime-400 border-none rounded-xl mr-4'>
            <MdOutlineDateRange /> Add to todays plan
        </button>
    );
};

export default Planbutton;