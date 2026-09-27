'use client'

import { useContext, useState } from "react";
import { Fitlogcontext } from "../context/fitlogContext";
import Todayplan from "../Component/Datashow/Todayplan";
import Saveddata from "../Component/Datashow/Saveddata";
import Blankdata from "../Component/Datashow/Blankdata";
import { Fitlogtype } from "@/Type";

//import { useState } from 'react';

const Page = () => {
    const [button, setButton] = useState("Today plan")

    const { plan, save } = useContext(Fitlogcontext)
    const [sortby, setSortby] = useState('')

    const sortData = (data: Fitlogtype[]) => {
        const sortedData = [...data]

        if (sortby === "rating") {
            sortedData.sort((a, b) => b.rating - a.rating)
        }
        else if (sortby === "duration") {
            sortedData.sort((a, b) => a.duration - b.duration)
        }
        else if (sortby === "calories") {
            sortedData.sort((a, b) => b.caloriesBurned - a.caloriesBurned)
        }
        return sortedData
    }
    const plandata = sortData(plan)
    const savedata = sortData(save)


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

            {/* name of each tab group should be unique 
            <div className="tabs tabs-lift ">
                <input type="radio" name="my_tabs_3" className="tab text-white checked:bg-mauve-900 checked:border-mauve-700" aria-label="Today's plan" />
                <div className="tab-content bg-mauve-900 border-mauve-700 p-6 text-white">
                    {plandata.length > 0 ?
                        plandata.map((data) => <Todayplan key={data.id} data={data}></Todayplan>) :
                        <Blankdata></Blankdata>}
                </div>

                <input type="radio" name="my_tabs_3" className="tab text-white checked:bg-mauve-900 checked:border-mauve-700" aria-label="Saved" defaultChecked />
                <div className="tab-content bg-mauve-900 border-mauve-700 p-6 text-white">
                    {savedata.length > 0 ?
                        savedata.map((data) => <Saveddata key={data.id} data={data}></Saveddata>) :
                        <Blankdata></Blankdata>}
                </div>
            </div>*/}
            <div>
                <div className="flex items-center justify-between my-10">
                    <div>
                        <button onClick={() => setButton("Today plan")} className={`${button === "Today plan" ? 'bg-lime-400 text-black' : ''} px-3 py-1.5 border border-lime-400 rounded-l-lg text-sm `}>Today plan</button>
                        <button onClick={() => setButton("Saved")} className={`${button === "Saved" ? 'bg-lime-400 text-black' : ''} px-3 py-1.5 border border-lime-400 rounded-r-lg text-sm `}>Saved</button>
                    </div>
                
                        <div className="flex items-center justify-end gap-2">
                            <p className="bg-mauve-900 py-1.5 px-4 rounded-2xl">Sort By</p>
                            <select
                                value={sortby}
                                onChange={(e) => setSortby(e.target.value)}
                                defaultValue="Pick a Runtime"
                                className="bg-mauve-900 p-2 rounded-xl"
                            >
                                <option value="rating">Rating</option>
                                <option value="duration">Duration</option>
                                <option value="calories">Calories</option>
                            </select>
                        </div>
                    
                </div>
                <div>
                    {button === "Today plan" ?
                        (<div className=" bg-mauve-900 border-mauve-700 p-6 text-white rounded-2xl">
                            {plandata.length > 0 ?
                                plandata.map((data) => <Todayplan key={data.id} data={data}></Todayplan>) :
                                <Blankdata></Blankdata>}
                        </div>) :
                        (<div className="bg-mauve-900 border-mauve-700 p-6 text-white rounded-2xl">
                            {savedata.length > 0 ?
                                savedata.map((data) => <Saveddata key={data.id} data={data}></Saveddata>) :
                                <Blankdata></Blankdata>}
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Page;