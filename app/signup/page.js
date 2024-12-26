"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // For displaying errors
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                setError(""); // Clear any existing errors
                alert("Signup successful!");
                router.push("/"); // Redirect to homepage
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Signup failed. Please try again.");
            }
        } catch (err) {
            console.error("Error during signup:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
            <div className="bg-slate-950 p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-gray-100 mt-4">Create Account</h1>
                    <p className="text-gray-500">Sign up for a new account</p>
                </div>

                {error && (
                    <div className="mb-4 text-center text-red-500">
                        <p>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-500">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
