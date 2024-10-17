import React from 'react';

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
            <div className="bg-slate-950 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-100 mt-4">Create Account</h1>
                    <p className="text-gray-500">Sign up for a new account</p>
                </div>

                <form>
                    {/* Username Input */}
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-500">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-9">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-500">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
