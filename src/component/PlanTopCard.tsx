'use client'

import { MainDatacontext } from '@/context/ContextProvider';
import React from 'react';


import  { useContext } from 'react';

const PlanTopCard = () => {
    const  { planlist,savelist }=useContext(MainDatacontext)
    return (
        <div>
            <h1>MY PLAN</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>

            <div>
                <div>
                    <p>Exercises</p>
                    <h1>{planlist.length}</h1>
                </div>
                <div>
                    <p>Minutes</p>
                    <h1>{planlist.reduce((a,v)=>{return (a+v.duration)},0)}</h1>
                </div>
                <div>
                    <p>Calories</p>
                    <h1>{planlist.reduce((a,v)=>{return (a+v.caloriesBurned)},0)}</h1>
                </div>
            </div>
        </div>
    );
};

export default PlanTopCard;