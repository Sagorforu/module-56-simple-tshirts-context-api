import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p>{tshirt.name} <button
                    key={tshirt._id}
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >x</button></p>)
            }
        </div>
    );
};

export default Cart;