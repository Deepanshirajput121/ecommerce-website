const ChatAPI = {
    async getBotResponse(userMessage) {
        // Mock API call simulation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Bot reply to: "${userMessage}"`);
            }, 1000);
        });
    },
};

export default ChatAPI;