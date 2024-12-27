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
        "Women&apos;s Dress", "Women&apos;s Handbag", "Women&apos;s Heels", "Women&apos;s Sunglasses",
        "Men&apos;s Casual T-Shirt", "Men&apos;s Slim Fit Jeans", "Men&apos;s Leather Jacket", "Men&apos;s Casual Sneakers",
        "Kid&apos;s T-Shirt", "Kid&apos;s Jeans", "Kid&apos;s Shoes", "Kid&apos;s Jacket",
    ];

    const products = [
        { name: "Women&apos;s Dress", category: "Women&apos;s", url: "/women/dresses" },
        { name: "Men&apos;s Casual T-Shirt", category: "Men&apos;s", url: "/men/casual-t-shirts" },
        { name: "Kid&apos;s Shoes", category: "Kid&apos;s", url: "/kids/shoes" },
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
                        <Link href="/men" className="text-white hover:text-white">Men&apos;s</Link>
                        <Link href="/women" className="text-white hover:text-white">Women&apos;s</Link>
                        <Link href="/kids" className="text-white hover:text-white">Kid&apos;s</Link>
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

           
        </>
    );
}
