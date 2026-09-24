import { Idatatye } from '@/type/MainData';
import React from 'react';
import LibraryCardSection from './LibraryCardSection';



const dataLoad = async (): Promise<Idatatye[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data
}

const LibrarySection = async () => {
    const data: Idatatye[] = await dataLoad();
    return (
        <div className="max-w-[80%] mx-auto" id='library'>
            <div className="space-y-3 mb-6">
                <h1 className="text-3xl font-bold">THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {data.map(eachData => <LibraryCardSection key={eachData.id} eachdata={eachData}></LibraryCardSection>)}
            </div>
        </div>
    );
};

export default LibrarySection;