'use client'



import { NavBarPlanButton, NavBarSaveButton } from '@/buttoncomponent/NavBarButton';
import NavLogo from '../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
 
    return (
        <div className="border-b sticky top-0 z-50 ">
            <div className="bg-black">
                <div className="flex items-center justify-between max-w-[80%] mx-auto pt-5  pb-5  ">
                    <div >
                        <Link href={'/'} className="flex gap-3 items-center text-center">
                            <Image src={NavLogo} alt='navlogo'></Image>
                            <h1 className="font-semibold text-[15px] sm:text-[20px]">FIT<span className="text-[#C2F800]">LOG</span></h1>
                        </Link>

                    </div>
                    <ul className="flex gap-2">
                        <Link href={"/"}>  <li className={`${pathname == '/' ? "text-[#C2F800] bg-[#1A2312]" : ""}  items-center text-center rounded-[5px] p-1 sm:p-3 text-[12px] sm:text-[15px]`}>Workouts</li></Link>
                        <Link href={"/myplan"}>  <li className={`${pathname == '/myplan' ? "text-[#C2F800] bg-[#1A2312]" : ""}  items-center text-center rounded-[5px] p-1 sm:p-3 text-[12px] sm:text-[15px]`}>My Plan</li></Link>

                    </ul>
                    <ul className="flex gap-3">
                      
                        <NavBarPlanButton></NavBarPlanButton>
                        <NavBarSaveButton></NavBarSaveButton>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;