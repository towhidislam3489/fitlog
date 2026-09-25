'use client'


import { Idatatye } from '@/type/MainData';
import { createContext,  ReactNode, useState } from 'react';

interface Iprovide {
    planlist: Idatatye[];
    setPlanlist: React.Dispatch<React.SetStateAction<Idatatye[]>>;
    savelist: Idatatye[];
    setSavelist: React.Dispatch<React.SetStateAction<Idatatye[]>>;
}


export const MainDatacontext = createContext<Iprovide>({
    planlist: [],
    setPlanlist: ()=>{},
    savelist: [],
    setSavelist: ()=>{},
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [planlist, setPlanlist] = useState<Idatatye[]>([]);
    const [savelist, setSavelist] = useState<Idatatye[]>([]);
    const shered = {
        planlist,
        setPlanlist,
        savelist,
        setSavelist,
    }
    return (
        <div>
            <MainDatacontext.Provider value={shered}>
                {children}
            </MainDatacontext.Provider >
        </div>
    );
};

export default ContextProvider;