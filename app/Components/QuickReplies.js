import React from 'react';

const QuickReplies = ({ onQuickReply }) => {
    const suggestions = ['What is the price?', 'Any discounts?', 'Show me the bestsellers'];

    return (
        <div className="flex space-x-2 mb-4">
            {suggestions.map((text, index) => (
                <button
                    key={index}
                    className="bg-gray-200 text-sm px-3 py-1 rounded-lg hover:bg-gray-300"
                    onClick={() => onQuickReply(text)}
                >
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuickReplies;