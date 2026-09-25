
'use client'
import { MainDatacontext } from '@/context/ContextProvider';
import Link from 'next/link';

import React, { useContext } from 'react';


export const NavBarPlanButton = () => {
    const { planlist } = useContext(MainDatacontext)
    return (
        <div className="flex items-center gap-3">
            <Link href={"/myplan"}>  <li>Plan</li> </Link>
            <div>
                <span className="bg-[#C2F800] w-6 h-6 border rounded-full grid items-center justify-center text-black">{planlist.length}</span>
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
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-600 bg-black  text-white">
                    {savelist.length}
                </span>
            </div>
        </div>
    );
};

