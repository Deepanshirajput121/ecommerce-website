'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { FiMessageSquare } from 'react-icons/fi';

import ChatWindow from "../src/Components/ChatWindow";
import ProductList from "../src/Components/ProductList";

export default function Home() {
  const [isChatWindowOpen, setIsChatWindowOpen] = useState(false); // State to control chat window visibility

  useEffect(() => {
    const container = document.querySelector('.scroll-container');

    const scrollByFourItems = () => {
      const item = container?.querySelector('.category-item');
      if (item) {
        const itemWidth = item.offsetWidth + parseInt(getComputedStyle(item).marginRight);
        return itemWidth * 4;
      }
      return 200; // Fallback in case there's an issue
    };

    const handleLeftScroll = () => {
      const scrollWidth = scrollByFourItems();
      container?.scrollBy({
        left: -scrollWidth,
        behavior: 'smooth',
      });
    };

    const handleRightScroll = () => {
      const scrollWidth = scrollByFourItems();
      container?.scrollBy({
        left: scrollWidth,
        behavior: 'smooth',
      });
    };

    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn?.addEventListener('click', handleLeftScroll);
    rightBtn?.addEventListener('click', handleRightScroll);

    return () => {
      leftBtn?.removeEventListener('click', handleLeftScroll);
      rightBtn?.removeEventListener('click', handleRightScroll);
    };
  }, []);

  const toggleChatWindow = () => {
    setIsChatWindowOpen(!isChatWindowOpen); // Toggle the chat window state
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section bg-black py-10 h-[70vh] relative"
        style={{
          backgroundImage: "url('/images/bgimg.jpg')",
          backgroundSize: 'cover', // This ensures the background image covers the section.
          backgroundRepeat: 'no-repeat', // Prevents the background from repeating.
          backgroundPosition: 'center center' // Centers the image within the section.
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto text-center flex justify-center items-center w-full h-full flex-col">
          <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Our Online Store
          </h1>
          <p className="text-2xl text-white drop-shadow-md mb-8">
            Find the best products at the best prices!
          </p>
          <div className="w-full h-[60vh] flex-grow">
            {/* Conditionally render ChatWindow only if isChatWindowOpen is true */}
            {isChatWindowOpen && <ChatWindow />}
          </div>
        </div>

        {/* Floating chat icon on the left side */}
        <div
          onClick={toggleChatWindow} // Toggle chat window visibility on icon click
          className="absolute left-5 bottom-5 p-3 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-600"
        >
          <FiMessageSquare size={30} />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="categories-section py-10 bg-slate-800 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Shop by Categories
          </h2>
          <div className="relative">
            <button className="left-btn absolute top-1/2 -left-4 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full text-white shadow-lg z-10 hover:bg-yellow-600">
              &#8592;
            </button>
            <div className="scroll-container flex space-x-6 overflow-x-auto no-scrollbar">
              <div className="category-item bg-gray-200 p-6 rounded-lg text-center overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://i.pinimg.com/564x/19/d5/c0/19d5c05fd416024abc9c586cd60a6a5d.jpg"
                    alt="Men's Clothing"
                    className="mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Men's Clothing</h3>
              </div>

              <div className="category-item bg-gray-200 p-6 rounded-lg text-center overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://i.pinimg.com/564x/f8/99/8a/f8998a79ee1ecd0143c6e2acb6a80b87.jpg"
                    alt="Women's Clothing"
                    className="mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Women's Clothing</h3>
              </div>

              <div className="category-item bg-gray-200 p-6 rounded-lg text-center overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://i.pinimg.com/564x/e1/22/34/e122343ac7ddb125851689e1fb05cc4a.jpg"
                    alt="Electronics"
                    className="mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Electronics</h3>
              </div>

              <div className="category-item bg-gray-200 p-6 rounded-lg text-center overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://i.pinimg.com/564x/fd/27/9c/fd279c1a784fd561c9ff8cdee0b05374.jpg"
                    alt="Accessories"
                    className="mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Accessories</h3>
              </div>
            </div>
            <button className="right-btn absolute top-1/2 -right-4 transform -translate-y-1/2 bg-yellow-500 p-2 rounded-full text-white shadow-lg z-10 hover:bg-yellow-600">
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-10 bg-slate-950 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Featured Products
          </h2>
          <div className="scroll-container flex space-x-6 overflow-x-auto no-scrollbar">
            <ProductList />
          </div>
          <div className="text-center mt-10">
            <Link href="/">
              <button className="bg-yellow-500 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
