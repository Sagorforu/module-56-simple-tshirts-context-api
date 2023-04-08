import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Aunty = ({ring}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <p><small>Grandpa money: {money}</small></p>
            <button onClick={()=>setMoney(money+500)}>Send 500tk</button>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;