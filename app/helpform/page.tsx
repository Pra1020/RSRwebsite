"use client";
import React, { useState } from 'react';

const HelpChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', from: 'bot' },
  ]);

  const handleUserInput = (userMessage: string) => {
    if (!userMessage.trim()) return; // Prevent empty messages
    setMessages([...messages, { text: userMessage, from: 'user' }]);

    // Here, call the API or service for the bot to provide an answer
    const botResponse = "This is a placeholder response."; // Replace with actual bot logic

    setMessages([...messages, { text: userMessage, from: 'user' }, { text: botResponse, from: 'bot' }]);
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Help Chatbot</h1>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.from === 'bot' ? 'bot-message' : 'user-message'}>
            <p><strong>{message.from === 'bot' ? 'Bot' : 'You'}:</strong> {message.text}</p>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Ask a question..."
        onKeyDown={(e) => e.key === 'Enter' && handleUserInput(e.target.value)}
        className="user-input"
      />

      <style jsx>{`
        .chatbot-container {
          font-family: Arial, sans-serif;
          margin: 30px;
          max-width: 600px;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 90px;
          background-color: #fefefe;
        }
        .chatbot-title {
          text-align: center;
          color: #333;
          font-size: 1.5em;
          margin-bottom: 20px;
        }
        .chat-messages {
          margin-bottom: 20px;
          max-height: 300px;
          overflow-y: auto;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .bot-message {
          text-align: left;
          background-color: #e0f7fa;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #0288d1;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .user-message {
          text-align: right;
          background-color: #c8e6c9;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #388e3c;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .user-input {
          padding: 10px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default HelpChatBot;

