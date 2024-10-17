'use client';

import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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
      {/* Hero Section */}
      <section 
        className="hero-section bg-gray-100 py-10 bg-cover bg-center h-[80vh]" 
        style={{ backgroundImage: "url('https://i.pinimg.com/originals/4b/c5/a8/4bc5a864bc7cb0cffbee7b40e28f7c02.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">Welcome to Our Online Store</h1>
          <p className="text-2xl text-white drop-shadow-md">Find the best products at the best prices!</p>
          <a 
            href="/shop" 
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="categories-section py-10 bg-slate-800 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Shop by Categories</h2>
          
          {/* Left Button */}
          <button className="left-btn absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-l-lg z-10 hover:bg-blue-700">
            &#8592; {/* Left arrow */}
          </button>
          
          {/* Right Button */}
          <button className="right-btn absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-r-lg z-10 hover:bg-blue-700">
            &#8594; {/* Right arrow */}
          </button>

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
