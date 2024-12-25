// app/cart/page.js
'use client';

import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div>
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <p>Total: ${getTotalPrice()}</p>
        </div>
    );
};

export default Cart;
