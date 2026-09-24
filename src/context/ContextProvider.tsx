'use client'


import { createContext, ReactNode, useState } from 'react';




export const MainDatacontext=createContext({})

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [planlist,setPlanlist]=useState([]);
    const [savelist,setSavelist]=useState([]);
    const shered={
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