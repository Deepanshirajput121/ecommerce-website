'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { FiMessageSquare } from 'react-icons/fi';
import Image from 'next/image';
import ChatWindow from "../src/Components/ChatWindow";
import ProductList from "../src/Components/ProductList";
import Categories from "../src/Components/Categories";

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
      <section className="featured-products-section py-10 bg-white relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Shop by Categories
          </h2>
          <div className="scroll-container flex space-x-6 overflow-x-auto no-scrollbar">
            <Categories />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-10 bg-white relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Products
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
