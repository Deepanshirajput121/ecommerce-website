import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [inventory, setInventory] = useState([]);

    // Chatbot request handler
    const sendQuery = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/chat', { query });
            setResponse(res.data.response);
        } catch (err) {
            console.error("Error fetching chatbot response:", err);
        }
    };

    // Fetch inventory data
    const fetchInventory = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/inventory');
            setInventory(res.data);
        } catch (err) {
            console.error("Error fetching inventory data:", err);
        }
    };

    return (
        <div>
            <h1>Chatbot and Inventory System</h1>

            {/* Chatbot Interface */}
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask something..."
                />
                <button onClick={sendQuery}>Ask Chatbot</button>
                <p>Response: {response}</p>
            </div>

            {/* Inventory Section */}
            <div>
                <button onClick={fetchInventory}>Fetch Inventory</button>
                <ul>
                    {inventory.map((item, index) => (
                        <li key={index}>
                            {item.item} - {item.stock} in stock, ₹{item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
