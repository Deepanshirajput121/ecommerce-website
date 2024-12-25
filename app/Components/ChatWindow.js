// ChatWindow.js
import React, { useState } from 'react';
import MessageBubble from './MessageBubble'; // Import MessageBubble component
import ChatInput from './ChatInput';         // Import ChatInput component
import ResetButton from './ResetButton';     // Import ResetButton component

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! I’m your Assistant Bot 🤖. How can I help you today?", fromBot: true }
  ]);
  const [typing, setTyping] = useState(false);

  const handleUserMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, fromBot: false },
    ]);
    setTyping(true);

    // Call backend to fetch products based on user query
    fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: message })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Here are the products I found:", fromBot: true },
            ...data.map((product) => ({
              text: `${product.name} - ${product.price}`,
              link: product.link,
              fromBot: true,
            }))
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "Sorry, no matching products were found.", fromBot: true }
          ]);
        }
        setTyping(false);
      })
      .catch(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, something went wrong.", fromBot: true }
        ]);
        setTyping(false);
      });
  };

  const resetChat = () => {
    setMessages([
      { text: "Hi there! I’m your Assistant Bot 🤖. How can I help you today?", fromBot: true },
    ]);
  };

  return (
    <div className="min-h-[80vh] bg-black text-white flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full flex flex-col">
        {/* Header */}
        <div className="bg-blue-500 text-white text-center p-4 rounded-t-lg flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712028.png"
            alt="Robot Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <h1 className="font-bold text-xl">Assistant Bot</h1>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col space-y-4 h-[50vh] overflow-y-scroll p-4">
          {messages.map((message, index) => (
            <MessageBubble
              key={index}
              message={message}
              isBot={message.fromBot}
            />
          ))}
          {typing && (
            <div className="flex justify-start items-center space-x-2 text-gray-400">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Input and Reset */}
        <div className="p-4 border-t border-gray-700 flex space-x-4">
          <ChatInput onSubmit={handleUserMessage} />
          <ResetButton onReset={resetChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
