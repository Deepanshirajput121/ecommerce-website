import React from 'react';
import { useCart } from '../Components/CartContext';

const ProductDisplay = ({ products }) => {
    const { addToCart } = useCart();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="border p-4 m-2 rounded">
                    <img src={product.img} alt={product.name} className="w-full h-32 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-500">${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductDisplay;
