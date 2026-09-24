import React from 'react';

import bannerImg from '../assets/banner.png';
import Image from 'next/image';
const Banner = () => {
    return (
        <div className="flex  max-w-[80%] mx-auto bg-[#15171D] justify-around items-center mt-20 pt-5 pb-5 rounded-[10px]">
            <div className="space-y-3">
                <p className="text-[#C2F800]">WORKOUT LIBRARY</p>
                <h1 className="text-4xl font-bold">
                    TRAIN WITH <br className="md:hidden" /> INTENT. LOG <br />
                    EVERY SET.
                </h1>
                <p>FitLog is a dark, no-nonsense <br className="md:hidden" /> gym companion: pick a lift, lock it <br />
                    into today's plan, and watch the <br className="md:hidden" /> week's work add up.</p>
               <button className="btn btn-active btn-success bg-[#C2F800] text-black font-semibold px-5 rounded-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer py-3">BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={bannerImg} alt='bannreImg'></Image>
            </div>
        </div>
    );
};

export default Banner;