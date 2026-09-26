'use client'


import { Idatatye } from '@/type/MainData';
import { createContext,  ReactNode, useState } from 'react';

interface Iprovide {
    planlist: Idatatye[];
    setPlanlist: React.Dispatch<React.SetStateAction<Idatatye[]>>;
    savelist: Idatatye[];
    setSavelist: React.Dispatch<React.SetStateAction<Idatatye[]>>;
    done:number[];
    setdone:React.Dispatch<React.SetStateAction<number[]>>;
}


export const MainDatacontext = createContext<Iprovide>({
    planlist: [],
    setPlanlist: ()=>{},
    savelist: [],
    setSavelist: ()=>{},
    done:[],
    setdone:()=>{}
})

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [planlist, setPlanlist] = useState<Idatatye[]>([]);
    const [savelist, setSavelist] = useState<Idatatye[]>([]);
     const [done, setdone] = useState<number[]>([]);
    const shered = {
        planlist,
        setPlanlist,
        savelist,
        setSavelist,
        done,
        setdone
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