'use client'

import { MainDatacontext } from '@/context/ContextProvider';
import React, { useState } from 'react';


import { useContext } from 'react';

import PlanCard from './PlanCard';
import SaveCard from './SaveCard';
import { Idatatye } from '@/type/MainData';

const PlanTopCard = () => {
    const { planlist,savelist } = useContext(MainDatacontext)
    const [sortby, setSortby] = useState<"duration" | "calories" | "rating">("duration")
    console.log(sortby)
    const sortedFun=(listData:Idatatye[])=>{
        if (sortby==='duration')
        {
           return listData.sort((a,b)=> b.duration-a.duration)
        }
        else if (sortby === 'calories')
        {
            return listData.sort((a,b) => b.caloriesBurned-a.caloriesBurned)
        }
        else 
        {
            return listData.sort((a,b)=> b.rating-a.rating)
        }
    }
    const sortedPlanlist=sortedFun(planlist);
    const sortedsavelist=sortedFun(savelist);
    return (
        <div className="max-w-[80%] mx-auto relative">
            <div className="mb-8 mt-16">
                <h1 className="text-4xl font-bold">MY PLAN</h1>
                <p className="font-semibold">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className="flex justify-between bg-[#13161D]  border-2 border-gray-700 py-20 px-5 rounded-[10px]">
                <div className="text-center">
                    <p >Exercises</p>
                    <h1 className="text-4xl text-[#C2F800] font-bold">{sortedPlanlist.length}</h1>
                </div>
                <div className="text-center">
                    <p >Minutes</p>
                    <h1 className="text-4xl font-bold">{sortedPlanlist.reduce((a, v) => { return (a + v.duration) }, 0)}</h1>
                </div>
                <div className="text-center">
                    <p >Calories</p>
                    <h1 className="text-4xl font-bold">{sortedPlanlist.reduce((a, v) => { return (a + v.caloriesBurned) }, 0)}</h1>
                </div>

            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs mt-11 ">
                <input type="radio" name="my_tabs_6" className="tab checked:bg-[#C2F800] checked:text-black rounded-2xl mr-3" aria-label="Today`s Plan" defaultChecked />
                <div className="tab-content  pt-6"> <PlanCard props={sortedPlanlist}></PlanCard> </div>

                <input type="radio" name="my_tabs_6" className="tab checked:bg-[#C2F800] checked:text-black rounded-2xl" aria-label="Saved" />
                <div className="tab-content  pt-6"><SaveCard props={sortedsavelist}></SaveCard></div>



                <div className="absolute right-0  flex gap-5 items-center">
                    <p className="sm:flex sm:gap-2 hidden sm:visible"><span>Sort</span> <span>by</span></p>
                    <select
                        value={sortby}
                        onChange={(e)=>setSortby( e.target.value as "duration" | "calories" | "rating" )}
                        className="select select-primary border-2 border-[#C2F800]">
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating </option>
                    </select>
                </div>

            </div>



        </div>
    );
};

export default PlanTopCard;