import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
            <p>Has money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value={'golden ring'}>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
 * 3 STEPS TO DECLARE A CONTEXT API
 * 1. create context and export
 * 2. create a provider and pass a value
 * 3. use context to receive data
*/