import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from './CartContext';

export default function Navbar() {
    const { cart, addToCart, removeFromCart } = useCart();
    const [notification, setNotification] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    // Predefined suggestions
    const suggestionData = [
        "Women's Dress",
        "Women's Handbag",
        "Women's Heels",
        "Women's Sunglasses",
        "Men's Casual T-Shirt",
        "Men's Slim Fit Jeans",
        "Men's Leather Jacket",
        "Men's Casual Sneakers",
        "Men's T-Shirt",
        "Men's Jeans",
        "Men's Jacket",
        "Kid's T-Shirt",
        "Kid's Jeans",
        "Kid's Shoes",
        "Kid's Jacket",
    ];

        // Predefined products for example (you will fetch real products here)
        const products = [
            { name: "Women's Dress", category: "Women's", url: "/women/dresses" },
            { name: "Men's Casual T-Shirt", category: "Men's", url: "/men/casual-t-shirts" },
            { name: "Kid's Shoes", category: "Kid's", url: "/kids/shoes" },
            // Add more products here as needed
        ];

    // Handle search input change
    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            // Filter suggestions dynamically based on input
            const filteredSuggestions = suggestionData.filter((item) =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Handle suggestion click
    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion); // Set the input value to the clicked suggestion
        setSuggestions([]); // Clear suggestions
    };

        // Handle Search
        const handleSearch = () => {
            // Filter products based on the search query
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredProducts);
            setSuggestions([]);
        };

            // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Toggle drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Add item to cart and show notification
    const handleAddToCart = (item) => {
        addToCart(item);
        setNotification(`Added ${item.name} to cart!`);
        setTimeout(() => setNotification(''), 3000);
    };

    // Calculate total price of cart items
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-slate-950 p-5 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo Section */}
                    <div>
                        <Link href="/">
                            <Image src="/images/logo2.png" alt="Logo" width={50} height={50} />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex-grow flex items-center justify-center mx-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleInputChange}
                            className="px-4 py-2 rounded-l-lg focus:outline-none w-full max-w-lg text-black"
                        />
                        <button className="bg-blue-500 px-4 py-2 rounded-r-lg text-white hover:bg-blue-600">
                            Search
                        </button>
                        {/* Suggestions Dropdown */}
                        {suggestions.length > 0 && (
                            <div className="absolute top-full mt-1 bg-white shadow-md rounded-lg w-full max-w-lg z-10">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-black"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div className="space-x-6 flex items-center">
                        <Link href="/" className="text-white hover:underline">Home</Link>
                        <Link href="/men" className="hover:text-gray-400 hover:underline">Men's</Link>
                        <Link href="/women" className="hover:text-gray-400 hover:underline">Women's</Link>
                        <Link href="/kids" className="hover:text-gray-400 hover:underline">Kids</Link>
                        <Link href="/login" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                            Login
                        </Link>

                        {/* Cart Icon */}
                        <div className="flex items-center">
                            <button onClick={toggleDrawer} className="relative">
                                <FiShoppingCart className="text-white text-2xl" />
                                {cart && cart.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                                        {cart.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Notification */}
            {notification && (
                <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-lg shadow-lg mt-4">
                    {notification}
                </div>
            )}

            {/* Drawer - Adjusted to open from the right */}
            <div
                className={`fixed top-0 right-0 h-full bg-slate-900 text-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
                style={{ width: '25%' }}
            >
                <div className="p-5">
                    <h2 className="text-3xl font-bold mb-4 p-4 rounded-lg shadow-lg text-center">
                        Your Cart Items
                    </h2>
                    {cart && cart.length > 0 ? (
                        <>
                            <ul className="space-y-4">
                                {cart.map((item, index) => (
                                    <li key={index} className="border-b border-gray-600 py-2 flex justify-between items-center">
                                        <div>
                                            <p>{item.name}</p>
                                            <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => removeFromCart(item)}
                                                className="bg-red-500 px-2 py-1 text-white rounded-md mr-2"
                                            >
                                                -
                                            </button>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <p className="text-lg font-semibold">
                                    Total: ${getTotalPrice()}
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-400 mt-4">Your cart is empty.</p>
                    )}
                </div>
                {/* Close button */}
                <button
                    onClick={toggleDrawer}
                    className="absolute top-4 right-4 text-2xl text-gray-300 hover:text-white"
                >
                    &times;
                </button>
            </div>
        </>
    );
}
