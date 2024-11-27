import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState(0);

    // Retrieve the cartItems from the cart slice
    const cartItems = useSelector(state => state.cart.cartItems);

    // reduce() --> built-in method that iterates over all the elements of an array and combines them into a single value
    //          --> Takes 2 arguments: (function, initial_value)
    //                               : function: (total, item) => total + item.price * item.quantity
    //                               : initial_value: 0
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
          setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
          setSuperCoins(20);
        } else if (totalAmount >= 300) {
          setSuperCoins(30);
        } else {
          setSuperCoins(0);
        }
    }, [totalAmount]);

    return(
        <div style={{textAlign:'center'}}>
            <h2 >Super Coins</h2>
            <p>You will earn {superCoins} super coins with this purchase.</p>
        </div>
    );
}; 

export default SuperCoin