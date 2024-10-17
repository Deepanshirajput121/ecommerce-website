// app/Components/Navbar.js

import Link from 'next/link'; // Import Next.js Link component
import Image from 'next/image'; // If you are using images
import { FiShoppingCart } from 'react-icons/fi'; // Cart Icon from react-icons


export default function Navbar() {
    return (
        <nav className="bg-slate-950 p-5 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo Section */}
                <div>
                    <Link href="/">
                        <Image
                            src="/images/logo2.png"
                            alt="Logo"
                            width={100}
                            height={150}
                            priority
                        />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="px-4 py-2 rounded-l-lg focus:outline-none"
                        style={{ width: "550px" }}
                    />
                    <button className="bg-blue-500 px-4 py-2 rounded-r-lg text-white hover:bg-blue-600">
                        Search
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="space-x-6 flex items-center">
                    <Link href="/" className="text-white hover:underline">Home</Link>

                    {/* Category Links */}

                    <Link href="/men" className="hover:text-gray-400 hover:underline">Men's</Link>
                    <Link href="/women" className="hover:text-gray-400 hover:underline">Women's</Link>
                    <Link href="/kids" className="hover:text-gray-400 hover:underline">Kids</Link>

                    {/* Login Link */}
                    <Link href="/login" className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                        Login
                    </Link>

                    {/* Cart Icon */}
                    <Link href="/cart" className="text-white hover:text-blue-300 relative">
                        <FiShoppingCart size={24} />
                        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            9{/* Replace with cart item count */}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
