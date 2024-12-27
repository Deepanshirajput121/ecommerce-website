'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMessageSquare } from 'react-icons/fi';
import ChatWindow from '../src/Components/ChatWindow';
import ProductList from '../src/Components/ProductList';
import Categories from '../src/Components/Categories';

export default function Home() {
  const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);

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
    setIsChatWindowOpen(!isChatWindowOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section py-10 relative bg-black h-[70vh] sm:h-[50vh] min-w-[320px]"
        style={{
          backgroundImage: "url('/images/bgimg.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto text-center flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome to Our Online Store
          </h1>
          <p className="text-lg sm:text-base text-white drop-shadow-md mb-6">
            Find the best products at the best prices!
          </p>
          {isChatWindowOpen && <ChatWindow />}
        </div>
        {/* Floating Chat Icon */}
        <div
          onClick={toggleChatWindow}
          className="absolute left-5 bottom-5 p-3 bg-blue-500 text-white rounded-full cursor-pointer shadow-lg hover:bg-blue-600 transition"
        >
          <FiMessageSquare size={30} />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-8 bg-slate-950 relative">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-xl font-semibold mb-4 text-white">
            Shop by Categories
          </h2>
          {/* Ensure the scroll is smooth without shrinking */}
          <div className="scroll-container flex space-x-4 overflow-x-auto no-scrollbar min-w-full">
            <Categories />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 bg-slate-950 relative">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-xl font-semibold mb-4 text-white">
            Products
          </h2>
          {/* Responsive Grid Layout to ensure sections don't shrink on small screens */}
          <div className="scroll-container flex space-x-4 overflow-x-auto no-scrollbar min-w-full">
            <ProductList />
          </div>
          <div className="text-center mt-6">
            <Link href="/">
              <button className="bg-yellow-500 text-white text-lg sm:text-base font-semibold py-2 px-6 sm:py-2 sm:px-4 rounded-lg hover:bg-yellow-600 transition">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}  

