// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const { id } = useParams(); // Product ID ko route se get karein
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${id}`); // Individual product fetch karein
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-5">{product.name}</h1>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-700">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <p className="text-lg font-bold">SKU: {product.sku}</p> {/* SKU display karein */}
            {/* Yahan aur bhi details add kar sakte hain agar zarurat ho */}
        </div>
    );
}
