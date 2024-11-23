"use client"; // This directive makes the component a Client Component

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Sample product data for kids
const products = [
    {
        id: 1,
        name: "Kid's T-Shirt",
        price: "$15",
        image: "https://i.pinimg.com/564x/22/4c/7a/224c7a29dd02ba2488cdbf86432658a2.jpg",
        description: "Comfortable cotton t-shirt for kids.",
        stock: 50,
    },
    {
        id: 2,
        name: "Kid's Jeans",
        price: "$25",
        image: "https://i.pinimg.com/564x/71/25/2f/71252f73a739fe0899f7e6e9217ed8e3.jpg",
        description: "Stylish jeans for active kids.",
        stock: 30,
    },
    {
        id: 3,
        name: "Kid's Shoes",
        price: "$30",
        image: "https://i.pinimg.com/564x/5b/08/04/5b08043f5e52a3fde3d326054385e13b.jpg",
        description: "Durable shoes for all occasions.",
        stock: 20,
    },
    {
        id: 4,
        name: "Kid's Jacket",
        price: "$35",
        image: "https://i.pinimg.com/564x/7d/7c/36/7d7c3687a035223cab730cf3a0d52f52.jpg",
        description: "Warm jacket for chilly weather.",
        stock: 15,
    },
    {
        id: 5,
        name: "Kid's T-Shirt",
        price: "$15",
        image: "https://i.pinimg.com/564x/3c/08/d5/3c08d56c022fa799325c9d3e4f6b3f4d.jpg",
        description: "Bright and colorful t-shirt for kids.",
        stock: 40,
    },
    {
        id: 6,
        name: "Kid's Jeans",
        price: "$25",
        image: "https://i.pinimg.com/564x/d7/aa/6e/d7aa6ec26760c0169bc479fd0e31b47b.jpg",
        description: "Comfortable fit jeans for kids.",
        stock: 25,
    },
    {
        id: 7,
        name: "Kid's Shoes",
        price: "$30",
        image: "https://i.pinimg.com/564x/64/59/58/645958cdee38259ee45777f39e8d5a7f.jpg",
        description: "Fashionable shoes for little feet.",
        stock: 22,
    },
    {
        id: 8,
        name: "Kid's Jacket",
        price: "$35",
        image: "https://i.pinimg.com/564x/76/c5/f6/76c5f6b7fe6f015b6fccca8a69388afa.jpg",
        description: "Trendy jacket for kids.",
        stock: 18,
    },
    {
        id: 9,
        name: "Kid's T-Shirt",
        price: "$15",
        image: "https://i.pinimg.com/564x/83/11/22/831122661b2d2ac46577f5ab58d8382a.jpg",
        description: "Cute graphic t-shirt for kids.",
        stock: 35,
    },
    {
        id: 10,
        name: "Kid's Jeans",
        price: "$25",
        image: "https://i.pinimg.com/564x/77/09/96/77099692dc1dc3b537b3f0070d429812.jpg",
        description: "Stylish denim jeans for boys and girls.",
        stock: 28,
    },
    {
        id: 11,
        name: "Kid's Shoes",
        price: "$30",
        image: "https://i.pinimg.com/564x/f3/af/a5/f3afa5426f0fe24e677ad8b38e4e705a.jpg",
        description: "Lightweight shoes perfect for running.",
        stock: 21,
    },
    {
        id: 12,
        name: "Kid's Jacket",
        price: "$35",
        image: "https://i.pinimg.com/564x/6d/25/64/6d25648709133ff4f8a2cbf360cd4bba.jpg",
        description: "Perfect for layering in fall.",
        stock: 16,
    },
    {
        id: 13,
        name: "Kid's T-Shirt",
        price: "$15",
        image: "https://i.pinimg.com/736x/cc/fe/01/ccfe0199e7d0867d06fb53b5edd7e1fc.jpg",
        description: "Soft and breathable cotton.",
        stock: 45,
    },
    {
        id: 14,
        name: "Kid's Jeans",
        price: "$25",
        image: "https://i.pinimg.com/564x/79/1e/2d/791e2d21208ddbb64732a239cf5ec9af.jpg",
        description: "Rugged jeans for adventurous kids.",
        stock: 20,
    },
    {
        id: 15,
        name: "Kid's Shoes",
        price: "$30",
        image: "https://i.pinimg.com/564x/1b/aa/c4/1baac400a8b469d82ccb7c8a1df818fb.jpg",
        description: "Stylish and comfortable shoes.",
        stock: 25,
    },
    {
        id: 16,
        name: "Kid's Jacket",
        price: "$35",
        image: "https://i.pinimg.com/564x/c1/31/d8/c131d8fc880c7baf664228704158da77.jpg",
        description: "A must-have for every child's wardrobe.",
        stock: 15,
    },
];



export default function ProductDetails({ params }) {
    const { id } = params; // Get the dynamic id
    const [product, setProduct] = useState(null);
    const [notification, setNotification] = useState(false); // State to manage notification visibility

    useEffect(() => {
        // Simulate fetching the product from an API or data source
        const fetchedProduct = products.find((product) => product.id === parseInt(id));
        setProduct(fetchedProduct);
    }, [id]);

    const handleAddToCart = () => {
        setNotification(true); // Show the notification
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto py-10">
            {notification && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded shadow-lg">
                    Added to Cart!
                </div>
            )}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-semibold">{product.name}</h1>
                <Link href="/kids">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Back to kids Collection
                    </button>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/3 h-auto rounded-lg shadow-lg"
                />
                <div className="w-full md:w-2/3">
                    <h2 className="text-6xl font-bold mb-4">Price: {product.price}</h2>
                    <p className="text-5xl leading-snug mb-8">{product.description}</p>
                    <ul className="text-5xl leading-snug mb-8 space-y-4">
                        <li><strong>Material:</strong> {product.material}</li>
                        <li><strong>Available Sizes:</strong> {product.size}</li>
                        <li><strong>Care Instructions:</strong> {product.care}</li>
                    </ul>
                    <button
                        className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-300 text-5xl"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}