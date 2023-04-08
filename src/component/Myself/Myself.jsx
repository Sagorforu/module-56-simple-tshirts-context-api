import React, { useContext } from 'react';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({ring}) => {
    const angti = useContext(RingContext);
    console.log(angti)
    return (
        <div>
            <h2>Myself</h2>
            {/* <Special ring={ring}></Special> */} 
             {/* by props drilling */}
            <Special ring={angti}></Special> 
            {/* by context api */}
        </div>
    );
};

export default Myself;