import { useState, useEffect } from "react";

export default function SessionManager({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {children}
                    <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
                        Logout
                    </button>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}
