import { Fitlogcontext } from '@/app/context/fitlogContext';
import { Fitlogtype } from '@/Type';
import React, { useContext } from 'react';
import { GoX } from "react-icons/go";
import { toast } from 'react-toastify';

const Savedatadelet = ({data}:{data:Fitlogtype}) => {
    const {save,setSave}=useContext(Fitlogcontext)
    const handledelet=()=>{
        const delet=save.filter(value=>value.name!==data.name)
        setSave(delet)
        toast.success('Your data delete successfully')
    }

    return (
        <div onClick={()=>handledelet()} className='text-2xl'>
            <GoX />
        </div>
    );
};

export default Savedatadelet;