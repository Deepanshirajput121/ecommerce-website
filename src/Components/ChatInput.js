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
        <form onSubmit={handleSubmit} className="chat-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your query..."
                className="input-field"
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default ChatInput;
