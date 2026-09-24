'use client'

import React, { useContext } from 'react';

import NavLogo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MainDatacontext } from '@/context/ContextProvider';
const NavBar = () => {
    const pathname = usePathname();
    const { planlist, savelist } = useContext(MainDatacontext)
    return (
        <div className="border-b-1 sticky top-0 z-50 ">
            <div className="bg-black">
                <div className="flex items-center justify-between max-w-[80%] mx-auto pt-5  pb-5  ">
                    <div >
                        <Link href={'/'} className="flex gap-3 items-center text-center">
                            <Image src={NavLogo} alt='navlogo'></Image>
                            <h1 className="font-semibold text-[20px]">FIT<span className="text-[#C2F800]">LOG</span></h1>
                        </Link>

                    </div>
                    <ul className="flex gap-8">
                        <Link href={"/workouts"}>  <li className={`${pathname == '/workouts' ? "text-[#C2F800] bg-[#1A2312]" : ""} w-20 items-center text-center rounded-[5px]`}>Workouts</li></Link>
                        <Link href={"/plan"}>  <li className={`${pathname == '/plan' ? "text-[#C2F800] bg-[#1A2312]" : ""} w-20 items-center text-center rounded-[5px]`}>My Plan</li></Link>

                    </ul>
                    <ul className="flex gap-3">
                        <div className="flex items-center gap-3">
                            <Link href={"/"}>  <li>Plan</li> </Link>
                            <div>
                                <span className="bg-[#C2F800] w-6 h-6 border rounded-full grid items-center justify-center text-black">{planlist.length}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href={"/"}> <li>Save</li> </Link>
                            <div>
                                <span className="bg-[#C2F800] w-6 h-6 border rounded-full grid items-center justify-center text-black">{savelist.length}</span>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;