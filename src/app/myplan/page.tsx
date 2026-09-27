'use client'

import { useContext } from "react";
import { Fitlogcontext } from "../context/fitlogContext";
import Todayplan from "../Component/Datashow/Todayplan";
import Saveddata from "../Component/Datashow/Saveddata";

//import { useState } from 'react';

const Page = () => {
    const { plan, save } = useContext(Fitlogcontext)

    return (
        <div className='lg:w-300 mx-auto'>
            <h2 className='text-3xl font-bold mt-10'>MY PLAN</h2>
            <p className='text-mauve-400'>Cap of five lifts for today.Finish them, then load more.</p>
            <div className='bg-mauve-900 border border-mauve-700 rounded-2xl flex justify-around items-center py-5 my-5'>
                <div>
                    <p>Exercises</p>
                    <p></p>
                </div>
                <div>
                    <p>Minutes</p>
                    <p></p>
                </div>
                <div>
                    <p>Calories</p>
                    <p></p>
                </div>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift ">
                <input type="radio" name="my_tabs_3" className="tab text-white checked:bg-mauve-900 checked:border-mauve-700" aria-label="Today's plan" />
                <div className="tab-content bg-mauve-900 border-mauve-700 p-6 text-white">
                    {
                        plan.map((data) => <Todayplan key={data.id} data={data}></Todayplan>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab text-white checked:bg-mauve-900 checked:border-mauve-700" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-mauve-900 border-mauve-700 p-6 text-white">
                    {
                        save.map((data) => <Saveddata key={data.id} data={data}></Saveddata>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Page;