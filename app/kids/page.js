"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Kids() {
  const products = [
    {
      id: 1,
      name: "Kid's T-Shirt",
      price: "$15",
      image: "https://i.pinimg.com/564x/22/4c/7a/224c7a29dd02ba2488cdbf86432658a2.jpg",
    },
    {
      id: 2,
      name: "Kid's Jeans",
      price: "$25",
      image: "https://i.pinimg.com/564x/71/25/2f/71252f73a739fe0899f7e6e9217ed8e3.jpg",
    },
    {
      id: 3,
      name: "Kid's Shoes",
      price: "$30",
      image: "https://i.pinimg.com/564x/5b/08/04/5b08043f5e52a3fde3d326054385e13b.jpg",
    },
    {
      id: 4,
      name: "Kid&apos;s Jacket",
      price: "$35",
      image: "https://i.pinimg.com/564x/7d/7c/36/7d7c3687a035223cab730cf3a0d52f52.jpg",
    },
    {
      id: 5,
      name: "Kid's T-Shirt",
      price: "$15",
      image: "https://i.pinimg.com/564x/3c/08/d5/3c08d56c022fa799325c9d3e4f6b3f4d.jpg",
    },
    {
      id: 6,
      name: "Kid's Jeans",
      price: "$25",
      image: "https://i.pinimg.com/564x/d7/aa/6e/d7aa6ec26760c0169bc479fd0e31b47b.jpg",
    },
    {
      id: 7,
      name: "Kid's Shoes",
      price: "$30",
      image: "https://i.pinimg.com/564x/64/59/58/645958cdee38259ee45777f39e8d5a7f.jpg",
    },
    {
      id: 8,
      name: "Kid's Jacket",
      price: "$35",
      image: "https://i.pinimg.com/564x/76/c5/f6/76c5f6b7fe6f015b6fccca8a69388afa.jpg",
    },
    {
      id: 9,
      name: "Kid's T-Shirt",
      price: "$15",
      image: "https://i.pinimg.com/564x/83/11/22/831122661b2d2ac46577f5ab58d8382a.jpg",
    },
    {
      id: 10,
      name: "Kid's Jeans",
      price: "$25",
      image: "https://i.pinimg.com/564x/77/09/96/77099692dc1dc3b537b3f0070d429812.jpg",
    },
    {
      id: 11,
      name: "Kid's Shoes",
      price: "$30",
      image: "https://i.pinimg.com/564x/f3/af/a5/f3afa5426f0fe24e677ad8b38e4e705a.jpg",
    },
    {
      id: 12,
      name: "Kid's Jacket",
      price: "$35",
      image: "https://i.pinimg.com/564x/6d/25/64/6d25648709133ff4f8a2cbf360cd4bba.jpg",
    },
    {
      id: 13,
      name: "Kid's T-Shirt",
      price: "$15",
      image: "https://i.pinimg.com/736x/cc/fe/01/ccfe0199e7d0867d06fb53b5edd7e1fc.jpg",
    },
    {
      id: 14,
      name: "Kid's Jeans",
      price: "$25",
      image: "https://i.pinimg.com/564x/79/1e/2d/791e2d21208ddbb64732a239cf5ec9af.jpg",
    },
    {
      id: 15,
      name: "Kid's Shoes",
      price: "$30",
      image: "https://i.pinimg.com/564x/1b/aa/c4/1baac400a8b469d82ccb7c8a1df818fb.jpg",
    },
    {
      id: 16,
      name: "Kid's Jacket",
      price: "$35",
      image: "https://i.pinimg.com/564x/c1/31/d8/c131d8fc880c7baf664228704158da77.jpg",
    },
  ];

  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setSelectedQuantities({
      ...selectedQuantities,
      [productId]: quantity,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section bg-gray-100 py-10 bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/foto-gratis/ropa-tendedero_23-2147790636.jpg?t=st=1728669874~exp=1728673474~hmac=28da64899ca1c2fde30d5c3a0bca24ae4dd93e7d30b1943503bc7ba3d976c8fc&w=996')",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-slate-800 drop-shadow-lg">Kid&apos;s Collection</h1>
          <p className="text-2xl text-slate-800 drop-shadow-md">Discover the latest trends for kids!</p>

          {/* Discount Section */}
          <p className="text-4xl font-semibold text-red-600 mt-4 drop-shadow-lg">
            Get 20% Off on all Kid&apos;s items!
          </p>
          <p className="text-xl text-slate-800 mt-2 drop-shadow-md">
            Use code <span className="font-bold text-yellow-500">KIDS20</span> at checkout.
          </p>

          {/* Explore More Button */}
          <Link href="#products">
          <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Explore Now
          </button>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                {/* Use Image component here */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}  // Define width and height for Image component
                  height={250}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-slate-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>

                {/* Quantity Selector */}
                <div className="mb-4">
                  <label htmlFor={`quantity-${product.id}`} className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">Quantity:</label>
                  <select
                    id={`quantity-${product.id}`}
                    value={selectedQuantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    className="border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {/* View Details Button */}
                <Link href={`/kids/${product.id}`}>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Explore More Button at the End */}
          <div className="text-center mt-10">
          <Link href="/kids">
            <button className="bg-yellow-500 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Explore More
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
