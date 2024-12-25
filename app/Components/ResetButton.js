import React from 'react';

const ResetButton = ({ onReset }) => {
    return (
        <button
        onClick={onReset}
        aria-label="Reset Chat"
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700"
      >
        Reset Chat
      </button>
    );
};

export default ResetButton;