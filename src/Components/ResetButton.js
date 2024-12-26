import React from 'react';

const ResetButton = ({ onReset }) => {
    return (
        <button className="reset-button" onClick={onReset}>
            Reset Chat
        </button>
    );
};

export default ResetButton;
