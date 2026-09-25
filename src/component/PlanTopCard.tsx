'use client'

import { MainDatacontext } from '@/context/ContextProvider';
import React from 'react';


import { useContext } from 'react';

import PlanCard from './PlanCard';
import SaveCard from './SaveCard';

const PlanTopCard = () => {
    const { planlist } = useContext(MainDatacontext)
    return (
        <div className="max-w-[80%] mx-auto">
            <div className="mb-8 mt-16">
                <h1 className="text-4xl font-bold">MY PLAN</h1>
                <p className="font-semibold">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className="flex justify-between bg-[#13161D]  border-2 border-gray-700 py-20 px-5 rounded-[10px]">
                <div className="text-center">
                    <p >Exercises</p>
                    <h1 className="text-4xl text-[#C2F800] font-bold">{planlist.length}</h1>
                </div>
                <div className="text-center">
                    <p >Minutes</p>
                    <h1 className="text-4xl font-bold">{planlist.reduce((a, v) => { return (a + v.duration) }, 0)}</h1>
                </div>
                <div className="text-center">
                    <p >Calories</p>
                    <h1 className="text-4xl font-bold">{planlist.reduce((a, v) => { return (a + v.caloriesBurned) }, 0)}</h1>
                </div>

            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs mt-11 ">
                <input type="radio" name="my_tabs_6" className="tab checked:bg-[#C2F800] checked:text-black rounded-2xl mr-3" aria-label="Today`s Plan" defaultChecked />
                <div className="tab-content  pt-6"> <PlanCard></PlanCard> </div>

                <input type="radio" name="my_tabs_6" className="tab checked:bg-[#C2F800] checked:text-black rounded-2xl" aria-label="Saved"  />
                <div className="tab-content  pt-6"><SaveCard></SaveCard></div>

            </div>
        </div>
    );
};

export default PlanTopCard;