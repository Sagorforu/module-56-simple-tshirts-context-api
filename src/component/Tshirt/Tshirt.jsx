import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleCartToAdd}) => {
    const {price, name, picture} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <button onClick={() => handleCartToAdd(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;