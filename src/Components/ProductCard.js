import React from "react";
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md transition duration-200 hover:shadow-lg">
            <Image
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.category}</p>
            <p className="text-blue-500 font-semibold">${product.price}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-blue-600">
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;
