import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import ResetButton from './ResetButton';

// Mock Inventory Database
const mockInventory = [
  { name: "Laptop", price: "$1200", link: "#laptop" },
  { name: "Smartphone", price: "$800", link: "#smartphone" },
  { name: "Headphones", price: "$150", link: "#headphones" },
  { name: "Keyboard", price: "$100", link: "#keyboard" },
  { name: "Monitor", price: "$300", link: "#monitor" },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! I’m your Assistant Bot 🤖. How can I help you today?", fromBot: true, timestamp: new Date().toLocaleTimeString() }
  ]);
  const [typing, setTyping] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(true);

  // Handle User Message & Search Query
  const handleUserMessage = (message) => {
    const userMessage = {
      text: message,
      fromBot: false,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setTyping(true);

    const queryLowercase = message.toLowerCase();
    const matchingProducts = mockInventory.filter(product =>
      product.name.toLowerCase().includes(queryLowercase)
    );

    setTimeout(() => {
      const botResponse = matchingProducts.length > 0
        ? [{ text: "Here are the products I found:", fromBot: true, timestamp: new Date().toLocaleTimeString() }]
        : [{ text: "Sorry, no matching products were found. Try again.", fromBot: true, timestamp: new Date().toLocaleTimeString() }];
      
      setMessages((prevMessages) => [
        ...prevMessages,
        ...botResponse,
        ...matchingProducts.map(product => ({
          text: `${product.name} - ${product.price}`,
          link: product.link,
          fromBot: true,
          timestamp: new Date().toLocaleTimeString(),
        })),
      ]);
      setTyping(false);
    }, 1500);  
  };

  const resetChat = () => {
    setMessages([ 
      { text: "Hi there! I’m your Assistant Bot 🤖. How can I help you today?", fromBot: true, timestamp: new Date().toLocaleTimeString() },
    ]);
  };

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    isChatVisible && (
      <div className="chat-container">
        <div className="chat-window">
          <div className="chat-header">
            <h1>Welcome to Our Online Store</h1>
            <p>Find the best products and start shopping!</p>
            <button
              onClick={toggleChat}
              className="close-button"
              aria-label="Close Chat Window"
            >
              &times;
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <MessageBubble
                key={index}
                message={message}
                isBot={message.fromBot}
              />
            ))}

            {typing && (
              <div className="typing-indicator">Bot is typing...</div>
            )}
          </div>

          <div className="chat-footer">
            <div className="input-container">
              <ChatInput onSubmit={handleUserMessage} />
              <ResetButton onReset={resetChat} className="reset-btn-small" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatWindow;
