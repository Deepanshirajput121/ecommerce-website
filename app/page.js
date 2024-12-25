'use client';

import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ChatWindow from "./components/ChatWindow.js";
import ProductList from "./Components/ProductList"; // Import ProductList Component

export default function Home() {
  useEffect(() => {
    // Function to calculate scroll width for 4 items
    const scrollByFourItems = () => {
      const container = document.querySelector('.scroll-container');
      const item = container?.querySelector('.category-item');
      if (item) {
        const itemWidth = item.offsetWidth + parseInt(getComputedStyle(item).marginRight); // Item width + margin
        return itemWidth * 4; // Scroll by width of 4 items
      }
      return 200; // Fallback in case there's an issue
    };

    // Left button scroll
    document.querySelector('.left-btn')?.addEventListener('click', () => {
      const scrollWidth = scrollByFourItems();
      document.querySelector('.scroll-container').scrollBy({
        left: -scrollWidth, // Scroll left by 4 items' width
        behavior: 'smooth'
      });
    });

    // Right button scroll
    document.querySelector('.right-btn')?.addEventListener('click', () => {
      const scrollWidth = scrollByFourItems();
      document.querySelector('.scroll-container').scrollBy({
        left: scrollWidth, // Scroll right by 4 items' width
        behavior: 'smooth'
      });
    });

    // Cleanup listeners when component unmounts
    return () => {
      document.querySelector('.left-btn')?.removeEventListener('click', () => {});
      document.querySelector('.right-btn')?.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <div>
      {/* Hero Section - Chat Window taking full space */}
      <section 
  className="hero-section bg-black  py-10 h-[70vh] relative" // Adjusted height for the section
>
  <div className="absolute inset-0 w-full h-full bg-opacity-40"></div>
  <div className="relative z-10 container mx-auto text-center flex justify-center items-center w-full h-full flex-col mt-12"> {/* Added margin-top */}
    
    {/* Heading with fade-in animation, moved down with margin */}
    <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
      Welcome to Our Online Store
    </h1>

    {/* Subheading with fade-in animation, moved down with margin */}
    <p className="text-2xl text-white drop-shadow-md mb-8 animate__animated animate__fadeIn animate__delay-1s">
      Find the best products at the best prices!
    </p>

    {/* Chat Window with full width and reduced height */}
    <div className="w-full h-[60vh] flex-grow">
      <ChatWindow />
    </div>
  </div>
</section>


      {/* Product Categories Section */}
      <section className="categories-section py-10 bg-slate-800 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Shop by Categories</h2>
          
          
      

          <div className="overflow-x-auto">
            <div className="flex space-x-6 scroll-container">
              <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
                <img src="https://i.pinimg.com/564x/19/d5/c0/19d5c05fd416024abc9c586cd60a6a5d.jpg" alt="Men's Clothing" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">Men's Clothing</h3>
              </div>
              <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
                <img src="https://i.pinimg.com/564x/f8/99/8a/f8998a79ee1ecd0143c6e2acb6a80b87.jpg" alt="Women's Clothing" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">Women's Clothing</h3>
              </div>
              <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
                <img src="https://i.pinimg.com/564x/e1/22/34/e122343ac7ddb125851689e1fb05cc4a.jpg" alt="Electronics" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">Electronics</h3>
              </div>
              <div className="category-item bg-gray-200 p-6 rounded-lg text-center">
                <img src="https://i.pinimg.com/564x/fd/27/9c/fd279c1a784fd561c9ff8cdee0b05374.jpg" alt="Accessories" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section py-10 bg-slate-950 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-white">Featured Products</h2>

          <div className="relative overflow-x-hidden">
            <div className="scroll-container flex space-x-6 overflow-x-auto no-scrollbar">
              <ProductList />
            </div>
          </div>
            {/* Explore More Button at the End */}
            <div className="text-center mt-10">
              <button className="bg-yellow-500 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
                Explore More
              </button>
            </div>
        </div>
      </section>

    </div>
  );
}
