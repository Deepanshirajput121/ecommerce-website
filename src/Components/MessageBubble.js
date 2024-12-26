import React from 'react';

const MessageBubble = ({ message, isBot }) => {
    return (
        <div className={`message-bubble ${isBot ? 'bot' : 'user'}`}>
            <p>{message.text}</p>
            <span className="timestamp">{message.timestamp}</span>
        </div>
    );
};

export default MessageBubble;
