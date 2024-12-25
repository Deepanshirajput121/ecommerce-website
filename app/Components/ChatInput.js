// ChatInput.js
import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage(""); // Reset input after submitting
    }
  };

  return (
    <div className="flex flex-row items-center w-full space-x-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="p-2 w-full rounded-md bg-gray-700 text-white"
      />
      <button onClick={handleSendMessage} className="bg-blue-500 p-2 text-white rounded-md">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
