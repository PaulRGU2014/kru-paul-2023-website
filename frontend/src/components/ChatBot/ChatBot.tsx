"use client"

import { useState } from 'react';
import axios from 'axios';
import styles from './ChatBot.module.scss';

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: string, text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    try {
      const response = await axios.post('/api/chat', { message: input });
      setMessages(prevMessages => [
        ...prevMessages,
        { user: 'You', text: input },
        { user: 'Bot', text: response.data.reply }
      ]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.sendButton} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;