import { Fitlogcontext } from '@/app/context/fitlogContext';
import React, { useContext } from 'react';

const PlanShow = () => {
    const {plan}=useContext(Fitlogcontext)
    
    const Minute=plan.reduce((sum,value)=>sum+(value.duration),0)

    const Calorie=plan.reduce((sum,value)=>sum+(value.caloriesBurned),0)

    return (
        <div className='bg-mauve-900 border border-mauve-700 rounded-2xl flex justify-around items-center py-5 my-5'>
            <div>
                <p>Exercises</p>
                <p className='text-lime-400 text-3xl font-bold'>{plan.length}</p>
            </div>
            <div>
                <p>Minutes</p>
                <p className='text-3xl font-bold'>{Minute}</p>
            </div>
            <div>
                <p>Calories</p>
                <p className='text-3xl font-bold'>{Calorie}</p>
            </div>
        </div>
    );
};

export default PlanShow;