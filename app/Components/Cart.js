import React from 'react';
import { useCart } from './CartContext';
import { FiShoppingCart } from 'react-icons/fi';

export default function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    return (
        <div className="cart">
            <h2><FiShoppingCart /> Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}
