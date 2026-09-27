
import { Fitlogcontext } from '@/app/context/fitlogContext';
import React, { useContext } from 'react';

const SavedataShow = () => {
    const {save}=useContext(Fitlogcontext)

    const minute=save.reduce((sum,value)=>sum+(value.duration),0)

    const calorie=save.reduce((sum,value)=> sum+(value.caloriesBurned),0)

    return (
        <div className='bg-mauve-900 border border-mauve-700 rounded-2xl flex justify-around items-center py-5 my-5'>
            <div>
                <p>Exercises</p>
                <p className='text-lime-400 text-3xl font-bold'>{save.length}</p>
            </div>
            <div>
                <p>Minutes</p>
                <p className='font-bold text-3xl'>{minute}</p>
            </div>
            <div>
                <p>Calories</p>
                <p className='font-bold text-3xl'>{calorie}</p>
            </div>
        </div>
    );
};

export default SavedataShow;