import { Idatatye } from '@/type/MainData';
import Image from 'next/image';

import React from 'react';

import EachDataDetialsButton from '@/buttoncomponent/EachDataDetialsButton';

const DetialseCard = ({ eachdata }: { eachdata: Idatatye }) => {
    return (
        <div className="max-w-[80%] mx-auto grid md:grid-cols-12 gap-5 ">
            <div className="md:col-span-6">
                <Image src={eachdata.image} alt='image' height={200} width={400} className="rounded-2xl h-full w-full" ></Image>
            </div>
            <div className="md:col-span-6 space-y-5">
                <h1 className="uppercase font-semibold text-2xl">{eachdata.name}</h1>
                <h1 className=" text-[15px]">{eachdata.description}</h1>
                <h1 className="flex gap-3"> {eachdata.muscleGroups.map((v, ind) => <span key={ind} className="bg-[#C2F800] text-black  py-1 px-2 rounded-[5px] text-[12px] font-semibold">{v}</span>)}</h1>
                <div className="w-full overflow-hidden rounded-2xl border border-[#252c38] bg-[#151922]">
                    <table className="w-full">
                        <tbody>

                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className=" px-8 py-2 text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    EQUIPMENT
                                </td>

                                <td className="px-8 py-2  text-right text-[12px] text-[#e5e7eb]">
                                    {eachdata.equipment}
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    DIFFICULTY
                                </td>

                                <td className="px-8 py-2  text-right text-[12px] text-[#e5e7eb]">
                                    {eachdata.difficulty}
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    SETS
                                </td>

                                <td className="px-8 py-2  text-right text-[12px]  text-[#e5e7eb]">
                                    {eachdata.sets}
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    REPS
                                </td>

                                <td className="px-8 py-2  text-right text-[12px] text-[#e5e7eb]">
                                    {eachdata.reps}
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    DURATION
                                </td>

                                <td className="px-8 py-2  text-right text-[12px]  text-[#e5e7eb]">
                                    {eachdata.duration} min
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    CALORIES
                                </td>

                                <td className="px-8 py-2  text-right text-[12px] text-[#e5e7eb]">
                                    {eachdata.caloriesBurned} kcal
                                </td>
                            </tr>
                            <tr

                                className="border-b border-[#202632] last:border-b-0"
                            >
                                <td className="px-8 py-2  text-[12px] font-bold tracking-wide text-[#9da5b4]">
                                    RATING
                                </td>

                                <td className="px-8 py-2  text-right text-[12px] text-[#e5e7eb]">
                                    {eachdata.rating}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>INSTRUCTIONS</h1>
                    <ol className="list-decimal pl-6">
                        {eachdata.instructions.map((v, i) => <li key={i} className="text-[15px]"> {v}</li>)}
                    </ol>

                </div>
                <div >
                 
                    <EachDataDetialsButton eachData={eachdata}></EachDataDetialsButton>
                </div>
            </div>
        </div>
    );
};

export default DetialseCard;