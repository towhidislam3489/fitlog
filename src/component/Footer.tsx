import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLogo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="border-t-2 border-gray-700 mt-10">
            <div className="max-w-[80%] mx-auto flex justify-between pt-10 pb-10 bg-black">
                <div >
                    <Link href={'/'} className="flex gap-3 items-center text-center">
                        <Image src={NavLogo} alt='navlogo'></Image>
                        <h1 className="font-semibold text-[20px]">FIT<span >LOG</span></h1>
                    </Link>

                </div>
                <div>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;