import { useState } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        // Sample cart items, ideally fetched from state or storage
        { id: 1, name: 'T-Shirt', price: 20, quantity: 1 },
        { id: 2, name: 'Jeans', price: 40, quantity: 2 },
    ]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item p-4 border-b">
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p>${item.price} x {item.quantity}</p>
                    </div>
                ))}
            </div>
            <div className="text-right mt-6">
                <h2 className="text-2xl font-bold">Total: ${totalPrice}</h2>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
