import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSubmit(message);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your query..."
                className="input-field"
                style={{
                    color: "black", // Ensures text is black
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10px",
                    width: "100%",
                }}
            />
            <button
                type="submit"
                className="send-button"
                style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                }}
            >
                Send
            </button>
        </form>
    );
};

export default ChatInput;
