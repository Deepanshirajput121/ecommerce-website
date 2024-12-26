// pages/men.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Men() {
  const products = [
    {
      id: 1,
      name: "Men's T-Shirt",
      price: "$20",
      image: "https://i.pinimg.com/564x/b9/f2/7e/b9f27ed3b11c7ef0d765fd9a65c2753a.jpg",
    },
    {
      id: 2,
      name: "Men's Jeans",
      price: "$40",
      image: "https://i.pinimg.com/736x/3d/47/b3/3d47b329159ea3953a6ca29084fd1912.jpg",
    },
    {
      id: 3,
      name: "Men's Jacket",
      price: "$60",
      image: "https://i.pinimg.com/564x/a1/e2/50/a1e250f744459f2c46d5a6f8b538a7fe.jpg",
    },
    {
      id: 4,
      name: "Men's Sneakers",
      price: "$50",
      image: "https://i.pinimg.com/564x/f4/f4/a7/f4f4a7d614e1f1733b6486a99a060470.jpg",
    },
    {
      id: 5,
      name: "Men's T-Shirt",
      price: "$20",
      image: "https://i.pinimg.com/564x/07/02/97/07029788140113fdcc373fe97b3158f7.jpg",
    },
    {
      id: 6,
      name: "Men's Jeans",
      price: "$40",
      image: "https://i.pinimg.com/736x/1d/75/ce/1d75cef460cb9a443c34f6fb5d102914.jpg",
    },
    {
      id: 7,
      name: "Men's Jacket",
      price: "$60",
      image: "https://i.pinimg.com/564x/29/87/61/2987615d7a403ea28ea2b24521907d7a.jpg",
    },
    {
      id: 8,
      name: "Men's Sneakers",
      price: "$50",
      image: "https://i.pinimg.com/564x/c3/a2/9e/c3a29ecfdd0f0a1c827b36344e1a1a40.jpg",
    },
    {
      id: 9,
      name: "Men's T-Shirt",
      price: "$20",
      image: "https://i.pinimg.com/564x/eb/93/42/eb934256a03c50ceaa42ea7f4cfae0c1.jpg",
    },
    {
      id: 10,
      name: "Men's Jeans",
      price: "$40",
      image: "https://i.pinimg.com/564x/43/c7/04/43c704dcb179532d88b33bddf7a9efda.jpg",
    },
    {
      id: 11,
      name: "Men's Jacket",
      price: "$60",
      image: "https://i.pinimg.com/564x/6c/67/68/6c67683f6fd68b0be3c5f550a6ccc3b0.jpg",
    },
    {
      id: 12,
      name: "Men's Sneakers",
      price: "$50",
      image: "https://i.pinimg.com/564x/58/6c/23/586c230ded005b992a014eb0f8f7d1df.jpg",
    },
    {
      id: 13,
      name: "Men's T-Shirt",
      price: "$20",
      image: "https://i.pinimg.com/564x/80/19/7f/80197f2448bb4e041a9efb4ed0a0419d.jpg",
    },
    {
      id: 14,
      name: "Men's Jeans",
      price: "$40",
      image: "https://i.pinimg.com/564x/94/60/84/946084697639ef542dc934319180a28a.jpg",
    },
    {
      id: 15,
      name: "Men's Jacket",
      price: "$60",
      image: "https://i.pinimg.com/564x/5a/11/79/5a11799fdb6eecc86a2ad144a7b200bc.jpg",
    },
    {
      id: 16,
      name: "Men's Sneakers",
      price: "$50",
      image: "https://i.pinimg.com/564x/ff/ab/ef/ffabef13b1263e271f4f818c48207e0c.jpg",
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
        className="hero-section bg-gray-100 py-10 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('https://tint.creativemarket.com/otxEDfYODJOnVG8Lez6FTRy-8FaKdfwY4EHNpOkEl38/width:1820/height:1214/gravity:ce/rt:fill-down/el:1/preset:cm_watermark_retina/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzM3MC8zNzA4LzM3MDg4NTcvYWZkb2RrdzI4c2g1YjM4bnRsY2djZ3BpY3dqeHJoOWptMHVmd2ticGhzdG1xaHNscWUxZ3RnYWtzaWJmdGNoYy1vLmpwZw?1709508382')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-md">Men's Collection</h1>
          <p className="text-2xl text-white drop-shadow-md">Explore our latest men's fashion items!</p>
          <p className="text-4xl font-semibold text-red-600 mt-4 drop-shadow-lg">
            Get 20% Off on all Men's items!
          </p>
          <p className="text-xl text-white mt-2 drop-shadow-md">
            Use code <span className="font-bold text-yellow-500">MEN20</span> at checkout.
          </p>
          <Link href="#products">
            <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Explore Now
            </button>
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
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


                <Link href={`/products/${product.id}`}>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>


        {/* Explore More Button at the End */}
        <div className="text-center mt-10">
          <Link href="/men">
            <button className="bg-yellow-500 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
