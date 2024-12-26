import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from './CartContext';
import '@fortawesome/fontawesome-free/css/all.css'; // Import font awesome icons


export default function Navbar() {
    const { cart = [], addToCart, removeFromCart } = useCart(); // Default cart to an empty array
    const [notification, setNotification] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const suggestionData = [
        "Women's Dress", "Women's Handbag", "Women's Heels", "Women's Sunglasses",
        "Men's Casual T-Shirt", "Men's Slim Fit Jeans", "Men's Leather Jacket", "Men's Casual Sneakers",
        "Kid's T-Shirt", "Kid's Jeans", "Kid's Shoes", "Kid's Jacket",
    ];

    const products = [
        { name: "Women's Dress", category: "Women's", url: "/women/dresses" },
        { name: "Men's Casual T-Shirt", category: "Men's", url: "/men/casual-t-shirts" },
        { name: "Kid's Shoes", category: "Kid's", url: "/kids/shoes" },
    ];

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        setSuggestions(
            query
                ? suggestionData.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
                : []
        );
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    const handleSearch = () => {
        setSearchResults(
            products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setSuggestions([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const handleAddToCart = (item) => {
        addToCart(item);
        setNotification(`Added ${item.name} to cart!`);
        setTimeout(() => setNotification(''), 3000);
    };

    const getTotalPrice = () =>
        cart.reduce(
            (total, item) =>
                total + (item.price || 0) * (item.quantity || 1),
            0
        ).toFixed(2);

    return (
        <>
            <nav className="bg-slate-950 p-5 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <Image src="/images/logo2.png" alt="Logo" width={50} height={50} />
                    </Link>
                    <div className="relative mx-4 flex items-center max-w-xl">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress}
                            className="px-4 py-2 flex-grow rounded-lg focus:outline-none border border-gray-300 text-base bg-white w-[800px] shadow-md hover:border-blue-400 transition-all duration-300 focus:bg-black focus:text-white focus:border-gray-500"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-2 top-0 h-full bg-blue-500 px-4 py-4 text-white rounded-lg hover:bg-blue-600 focus:outline-none text-base transition-all flex justify-center items-center"
                        >
                            <i className="fas fa-search text-xl"></i> {/* Font Awesome search icon */}
                        </button>

                        {suggestions.length > 0 && (
                            <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg w-full z-10">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="p-3 hover:bg-blue-100 cursor-pointer text-base"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="space-x-6 flex items-center">
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/men" className="text-gray-400 hover:text-white">Men's</Link>
                        <Link href="/women" className="text-gray-400 hover:text-white">Women's</Link>
                        <Link href="/kids" className="text-gray-400 hover:text-white">Kids</Link>
                        <Link
                            href="/login"
                            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Login
                        </Link>
                        <button onClick={toggleDrawer} className="relative">
                            <FiShoppingCart className="text-white text-2xl" />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {notification && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 p-2 text-white rounded-lg">
                    {notification}
                </div>
            )}

            <div
                className={`fixed top-0 right-0 h-full bg-slate-900 text-white transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ width: '25%' }}
            >
                <div className="p-5">
                    <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>
                    {cart.length > 0 ? (
                        <>
                            <ul className="space-y-2">
                                {cart.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        <div>
                                            <p>{item.name}</p>
                                            <p className="text-sm text-gray-400">Qty: {item.quantity || 1}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => removeFromCart(item)}
                                                className="bg-red-500 px-2 py-1 text-white rounded-md"
                                            >
                                                -
                                            </button>
                                            <span className="ml-2">
                                                ${(item.price || 0).toFixed(2)}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <p>Total: ${getTotalPrice()}</p>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-400">Your cart is empty.</p>
                    )}
                </div>
                <button
                    onClick={toggleDrawer}
                    className="absolute top-4 right-4 text-xl text-gray-300 hover:text-white"
                >
                    &times;
                </button>
            </div>
        </>
    );
}
