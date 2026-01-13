import React, { useState } from 'react';
import './App.css';
import invokeLambdaFunction from './lexapi.js';


function App() {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (userMessage.trim() === '') return; // Prevent empty messages
  
    // Add user message to the chat
    const newMessage = { text: userMessage, sender: 'user' };
    setMessages([...messages, newMessage]);
    setUserMessage(''); // Clear the input
  
    try {
      // Send the user message to the backend (Node.js server)
      const botResponse= await invokeLambdaFunction(userMessage);
      console.log(botResponse);
      if(typeof botResponse === "string"){
        setMessages((prev) => [...prev, "Error!!!"]); //clear
      }
      const botMessage = { text: botResponse, sender: 'bot' };
      console.log(botMessage);
     
      setMessages((prev) => [...prev, botMessage]);
      
      // (Optional) Display a confirmation message if API is triggered
      
    } catch (error) {
      console.error('Error communicating with the backend:', error);
      const errorMessage = { text: 'Error: Unable to connect to the bot.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="app">
      <h1>MINECRAFT BOT</h1>
      <div className="chat-container">
        {messages.map((msg, index) => (
          <div className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}>
          {typeof msg.text === 'object' ? JSON.stringify(msg.text) : msg.text}
        </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Attach keypress event
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
