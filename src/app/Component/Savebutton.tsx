'use client'
import { Fitlogtype } from '@/Type';
import React, { useContext } from 'react';
import { Fitlogcontext } from '../context/fitlogContext';
import { CiBookmarkCheck } from "react-icons/ci";
import { toast } from 'react-toastify';

const Savebutton = ({ data }: { data: Fitlogtype }) => {
    const { save, setSave } = useContext(Fitlogcontext)

    const handlesaveButton = () => {
        const saveValue = save.some(value => value.id === data.id)
        if (!saveValue) {
            setSave([...save, data])
            toast.success('Data save successfull')
        }else{
            toast.error('Data all ready saved')
        }
    }
    return (

        <button onClick={() => handlesaveButton()} className='btn bg-mauve-800 border-none rounded-xl text-white'>
            <CiBookmarkCheck /> Save for later
        </button>

    );
};

export default Savebutton;