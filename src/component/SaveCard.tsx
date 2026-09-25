'use client'


import { MainDatacontext } from '@/context/ContextProvider';
import { Idatatye } from '@/type/MainData';
import { Clock, Flame, Star, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

const SaveCard = () => {
    const { savelist,setSavelist } = useContext(MainDatacontext)
    const HandellerRemove=(Data:Idatatye)=>
    {
        const newplanlist=savelist.filter(v => Data.id!==v.id);
        setSavelist(newplanlist);
    }
    return (
        <div>
            {savelist.length === 0 ?
                <div className="py-16 text-center">
                    <h2 className="text-2xl font-bold">NOTHING HERE YET</h2>

                    <p className="mt-3 text-gray-400">
                        Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                        href="/"
                        className="mt-6 inline-block rounded-lg bg-[#C2F800] px-6 py-3 font-semibold text-black"
                    >
                        Go to workouts
                    </Link>
                </div>
                :
                savelist.map(v => (
                    <div key={v.id} className="mb-8  border-2 border-gray-600 p-4 rounded-2xl flex justify-between items-center">
                        <div className="flex gap-4 ">
                            <div className="">
                                <Image src={v.image} alt='image' height={200} width={400} className="rounded-2xl h-[120] w-[200]" ></Image>
                            </div>
                            <div className=" flex flex-col justify-center space-y-3">
                                <h1 className="uppercase font-semibold text-[20px]">{v.name}</h1>
                                <h1 className="text-[15px]">{v.equipment}</h1>
                                <div className="flex gap-4 ">
                                    <div className="flex gap-2 text-[15px] items-center text-center"><span ><Clock size={15} className="text-[#C2F800]" /></span> <span>{v.duration} min</span></div>
                                    <div className="flex gap-2 text-[15px] items-center text-center"><span ><Flame size={15} className="text-[#C2F800]" /></span> <span>{v.caloriesBurned} min</span></div>
                                    <div className="flex gap-2 text-[15px] items-center text-center"><span ><Star size={15} className="text-[#C2F800]" /></span> <span>{v.rating} min</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link
                                href={`/${v.id}`}
                                className="mt-6 grid justify-center rounded-lg text-white h-10 items-center px-5 font-semibold border-2 border-gray-600 bg-black "
                            >
                                View Details
                            </Link>
                            <button className="mt-6 grid justify-center items-center rounded-lg h-10  font-semibold" onClick={()=> HandellerRemove(v)}>
                                    <X></X>
                            </button>
                        </div>
                    </div>))
            }
        </div>
    );
};

export default SaveCard;