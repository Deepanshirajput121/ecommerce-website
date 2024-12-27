"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Women() {
  const products = [
    {
      id: 1,
      name: "Women's Dress",
      price: "$45",
      image: "https://i.pinimg.com/originals/27/af/58/27af5800a8dd5c093e7f490e516497bf.jpg",
    },
    {
      id: 2,
      name: "Women's Handbag",
      price: "$80",
      image: "https://i.pinimg.com/564x/95/16/be/9516be1b5d1155eb6691d2704b2889e3.jpg",
    },
    {
      id: 3,
      name: "Women's Heels",
      price: "$60",
      image: "https://i.pinimg.com/564x/56/5c/80/565c80d037645c4e1804abb956759bd8.jpg",
    },
    {
      id: 4,
      name: "Women's Sunglasses",
      price: "$35",
      image: "https://i.pinimg.com/564x/a6/eb/4f/a6eb4f3b25d9294428beb1e5f2aa25de.jpg",
    },
    {
      id: 5,
      name: "Women's Dress",
      price: "$45",
      image: "https://i.pinimg.com/564x/9e/8e/86/9e8e8612ab24c95d1117e47db3fb76bb.jpg",
    },
    {
      id: 6,
      name: "Women's Handbag",
      price: "$80",
      image: "https://i.pinimg.com/564x/d8/2c/6a/d82c6a52c46d2e443afb9a52db59a0a4.jpg",
    },
    {
      id: 7,
      name: "Women's Heels",
      price: "$60",
      image: "https://i.pinimg.com/564x/8d/52/f3/8d52f345b95ae2352287d20f6c0c5ae7.jpg",
    },
    {
      id: 8,
      name: "Women's Sunglasses",
      price: "$35",
      image: "https://i.pinimg.com/564x/46/7f/8a/467f8a2d2aba0f56b2d85980715bd34b.jpg",
    },
    {
      id: 9,
      name: "Women's Dress",
      price: "$45",
      image: "https://i.pinimg.com/736x/43/ab/5b/43ab5bd15206292bf6c124dfc0dff9b2.jpg",
    },
    {
      id: 10,
      name: "Women's Handbag",
      price: "$80",
      image: "https://i.pinimg.com/564x/b1/91/4c/b1914c3f765f68bac632835d4939ced2.jpg",
    },
    {
      id: 11,
      name: "Women's Heels",
      price: "$60",
      image: "https://i.pinimg.com/564x/43/3d/8a/433d8a551d65c1e09f754347b6147e48.jpg",
    },
    {
      id: 12,
      name: "Women's Sunglasses",
      price: "$35",
      image: "https://i.pinimg.com/564x/1c/e6/02/1ce6028e2cd3f58a2a94e5de028b7df9.jpg",
    },
    {
      id: 13,
      name: "Women's Dress",
      price: "$45",
      image: "https://i.pinimg.com/564x/6f/72/47/6f72472ca45158206c37826007261c5a.jpg",
    },
    {
      id: 14,
      name: "Women's Handbag",
      price: "$80",
      image: "https://i.pinimg.com/564x/1b/e8/dc/1be8dc4d406aacf749edf4cc43885d9f.jpg",
    },
    {
      id: 15,
      name: "Women's Heels",
      price: "$60",
      image: "https://i.pinimg.com/564x/52/c1/a4/52c1a41d8663589c6265b437434f1557.jpg",
    },
    {
      id: 16,
      name: "Women's Sunglasses",
      price: "$35",
      image: "https://i.pinimg.com/564x/18/98/fe/1898fee9d41443ef2507fad27ffc035e.jpg",
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
        className="hero-section bg-pink-100 py-16 bg-cover bg-center h-[90vh]"
        style={{
          backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5d113b099ae33400012a290d/1578454979317-Y4Q92TG96PFZJNO084G0/Moushumi+Khara+-+The+Lifestyle+Editor?format=1500w')",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">Women's Collection</h1>
          <p className="text-2xl text-white drop-shadow-md">Discover the latest trends for women!</p>
          <p className="text-4xl font-semibold text-red-600 mt-4 drop-shadow-lg">Get 20% Off on all items!</p>
          <p className="text-xl text-white mt-2 drop-shadow-md">Use code <span className="font-bold text-yellow-500">WOMEN20</span> at checkout.</p>
          <Link href="#products">

            <button className="mt-6 bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Explore Now</button>

          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Women's Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-t-lg mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{product.name}</h3>
                <p className="text-lg font-bold text-gray-600 mb-4">{product.price}</p>

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
                <Link href={`/women/${product.id}`}>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {/* Explore More Button at the End */}
          <div className="text-center mt-10">
            <Link href="/women">
              <button className="bg-pink-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
                Explore More
              </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}   