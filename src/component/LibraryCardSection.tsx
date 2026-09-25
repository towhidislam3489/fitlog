import { Idatatye } from '@/type/MainData';
import { Clock, Flame,  Star } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICardDatatype {
    eachdata: Idatatye
}

const LibraryCardSection = ({ eachdata }: ICardDatatype) => {
    return (
        <div className="bg-[#15171D] rounded-2xl">
            <Link href={`/${eachdata.id}`} className="hover:scale-105 transition-transform duration-200">
                <div >
                    <Image src={eachdata.image} alt='image' height={200} width={400} className="rounded-2xl h-70 w-full" ></Image>
                </div>
                <div className="p-5 space-y-3">
                    <h1 className="flex gap-3"> {eachdata.muscleGroups.map((v, ind) => <span key={ind} className="bg-[#C2F800] text-black  py-1 px-2 rounded-[5px] text-[12px] font-semibold">{v}</span>)}</h1>
                    <h1 className="uppercase font-semibold ">{eachdata.name}</h1>
                    <h1 className="text-[12px]">{eachdata.equipment}</h1>
                    <hr className="border-gray-700 mt-5" />
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 text-[15px] items-center text-center"><span ><Clock size={15} /></span> <span>{eachdata.duration} min</span></div>
                        <div className="flex gap-2 text-[15px] items-center text-center"><span ><Flame size={15} /></span> <span>{eachdata.caloriesBurned} min</span></div>
                        <div className="flex gap-2 text-[15px] items-center text-center"><span ><Star size={15} /></span> <span>{eachdata.rating} min</span></div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default LibraryCardSection;