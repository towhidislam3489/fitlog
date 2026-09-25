'use client'

import { MainDatacontext } from '@/context/ContextProvider';
import { Clock, Divide, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import React, { useContext } from 'react';

const PlanCard = () => {
    const { planlist } = useContext(MainDatacontext)
    return (
        <div>
            {planlist.map(v => (<div key={v.id}>
                <div className="flex gap-4 mb-8  border-2 border-gray-600 p-4 rounded-2xl">
                    <div className="">
                        <Image src={v.image} alt='image' height={200} width={400} className="rounded-2xl h-[120] w-[200]" ></Image>
                    </div>
                    <div className=" flex flex-col justify-center space-y-3">
                        <h1 className="uppercase font-semibold text-[20px]">{v.name}</h1>
                        <h1 className="text-[15px]">{v.equipment}</h1>
                        <div className="flex gap-4 ">
                            <div className="flex gap-2 text-[15px] items-center text-center"><span ><Clock size={15} className="text-[#C2F800]" /></span> <span>{v.duration} min</span></div>
                            <div className="flex gap-2 text-[15px] items-center text-center"><span ><Flame size={15} className="text-[#C2F800]"/></span> <span>{v.caloriesBurned} min</span></div>
                            <div className="flex gap-2 text-[15px] items-center text-center"><span ><Star size={15} className="text-[#C2F800]"/></span> <span>{v.rating} min</span></div>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    );
};

export default PlanCard;