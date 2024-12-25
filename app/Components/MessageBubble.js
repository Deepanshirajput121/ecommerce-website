// MessageBubble.js
const MessageBubble = ({ message, isBot }) => {
    return (
      <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
        <div className={`max-w-xs rounded-lg ${isBot ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} p-3 mb-2`}>
          <p>{message.text}</p>
          {message.link && <a href={message.link} className="text-blue-400">{message.link}</a>}
        </div>
      </div>
    );
  };
  
  export default MessageBubble;
  