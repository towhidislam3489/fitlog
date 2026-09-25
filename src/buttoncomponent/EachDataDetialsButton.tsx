'use client'

import { MainDatacontext } from '@/context/ContextProvider';
import { Idatatye } from '@/type/MainData';
import { Calendar, Save } from 'lucide-react';
import Link from 'next/link';
import React, { useContext } from 'react';

const EachDataDetialsButton = ({ eachData }: { eachData: Idatatye }) => {
    const { planlist, setPlanlist, savelist, setSavelist } = useContext(MainDatacontext)

    const HandelerPlan = () => {
        setPlanlist([...planlist, eachData])
    }
    const HandelerSave= ()=>{
        setSavelist([...savelist,eachData])
    }
    return (
        <div className="flex gap-5">
            <button onClick={() => HandelerPlan()}
                className=" bg-[#C2F800] text-black font-semibold px-5 py-1.5 rounded-[10px] hover:scale-105 transition-transform duration-300 flex gap-2 items-center">
                <Calendar size={20}></Calendar> <h1>Add to today's plan</h1>
            </button >
                <button onClick={()=>HandelerSave()}  className=" font-semibold px-5 py-1.5 rounded-[10px] hover:scale-105 transition-transform duration-300 border border-gray-600 flex gap-2 items-center">
                        <Save></Save> <h1>Save for later</h1>
                   </button>
        </div>
    );
};

export default EachDataDetialsButton;