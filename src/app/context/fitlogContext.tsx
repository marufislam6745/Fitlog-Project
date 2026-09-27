'use client'
import { Fitlogtype } from '@/Type';
import React, { createContext, ReactNode, useState } from 'react';

interface Fitlogdataprops {
    plan: Fitlogtype[],
    setPlan: React.Dispatch<React.SetStateAction<Fitlogtype[]>>,
    save: Fitlogtype[],
    setSave: React.Dispatch<React.SetStateAction<Fitlogtype[]>>
}

export const Fitlogcontext = createContext<Fitlogdataprops>({
    plan:[],
    setPlan:()=>{},
    save:[],
    setSave:()=>{}
})

const Fitlogprovider = ({ children }: { children: ReactNode }) => {
    const [plan, setPlan] = useState<Fitlogtype[]>([])
    const [save, setSave] = useState<Fitlogtype[]>([])

    const shareData = {
        plan,
        setPlan,
        save,
        setSave
    }

    return (
        <Fitlogcontext.Provider value={shareData}>
            {children}
        </Fitlogcontext.Provider>
    );
};

export default Fitlogprovider;