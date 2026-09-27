import { Fitlogcontext } from '@/app/context/fitlogContext';
import { Fitlogtype } from '@/Type';
import React, { useContext } from 'react';
import { GoX } from "react-icons/go";
import { toast } from 'react-toastify';

const Todayplandelet = ({data}:{data:Fitlogtype}) => {
   const {plan,setPlan}=useContext(Fitlogcontext)
   const deletplan=()=>{
      const plandelet=plan.filter(value=>value.name!==data.name)
      setPlan(plandelet)
      toast.success('Your data delete successfully')
   }

    return (
        <div onClick={()=>deletplan()} className='text-2xl'>
            <GoX />
        </div>
    );
};

export default Todayplandelet;