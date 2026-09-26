import React from 'react';

import bannerImg from '../assets/banner.png';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="sm:flex  max-w-[80%] mx-auto bg-[#15171D] justify-around items-center mt-30 pt-5 pb-5 rounded-[10px] mb-38 space-y-8 sm:space-y-0">
            <div className="space-y-3">
                <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="text-4xl font-bold ">
                    TRAIN WITH  INTENT. LOG <br  />
                    EVERY SET.
                </h1>
                <p className="">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
                    into today`s plan, and watch the week`s work add up.</p>
                <a
                    href="#library"
                    className="inline-block bg-[#C2F800] text-black font-semibold px-5 py-3 rounded-[10px] hover:scale-105 transition-transform duration-300"
                >
                    BROWSE WORKOUTS
                </a>
            </div>
            <div>
                <Image src={bannerImg} alt='bannreImg'></Image>
            </div>
        </div>
    );
};

export default Banner;