
'use client'
import { MainDatacontext } from '@/context/ContextProvider';
import Link from 'next/link';

import React, { useContext } from 'react';


export const NavBarPlanButton = () => {
    const { planlist } = useContext(MainDatacontext)
    return (
        <div className="flex items-center gap-1 sm:gap-3 text-[12px] sm:text-[15px]">
            <Link href={"/myplan"}>  <li>Plan</li> </Link>
            <div>
                <span className="bg-[#C2F800] w-4 h-4  sm:w-6 sm:h-6 border rounded-full flex items-center justify-center "><h1 className="text-black">{planlist.length}</h1></span>
            </div>
        </div>
    );
};
export const NavBarSaveButton = () => {
    const { savelist } = useContext(MainDatacontext)
    return (
        <div className="flex items-center gap-3">
            <Link href={"/myplan"}> <li>Save</li> </Link>
            <div>
                <span className="bg-black w-4 h-4  sm:w-6 sm:h-6  rounded-full flex items-center justify-center  border border-gray-600 text-[12px] sm:text-[15px]  ">
                    <h1 className="text-white">{savelist.length}</h1>
                </span>
            </div>
        </div>
    );
};

