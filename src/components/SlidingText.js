import React from 'react';
import './SlidingText.css'; // Ensure you have this CSS file

const SlidingText = ({ messages }) => {
  const doubledMessages = [...messages, ...messages, ...messages]; // Duplicate messages for looping

  return (
    <div className="sliding-text-container">
      <div className="sliding-text">
        {doubledMessages.map((message, index) => {
          // Check if the message is an image (React element) or plain text
          const isImage = React.isValidElement(message);

          // Apply a specific class or style based on the message type
          const messageStyle = isImage ? "message" : "message text-message";

          return (
            <span key={index} className={messageStyle}>
              {message}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SlidingText;
