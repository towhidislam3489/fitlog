import DetialseCard from '@/component/DetialseCard';

import { Idatatye } from '@/type/MainData';
import { Metadata } from 'next';
import React from 'react';
import NotFound from './not-found';
export const metadata: Metadata = {
  title: "Details",
  description: "details",
};

const dataLoad = async (): Promise<Idatatye[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const data: Idatatye[] = await dataLoad();
    const finded = data.find(v => String(v.id) === String(id))
    return (
        <div className="my-10">
            {finded ? <DetialseCard eachdata={finded}></DetialseCard> : <NotFound></NotFound>}   
        </div>
    );
};

export default page;