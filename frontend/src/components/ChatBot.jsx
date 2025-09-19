import React, { useEffect, useRef } from 'react';
import { FaRobot } from 'react-icons/fa';

const Chatbot = ({ messages }) => {
    const chatWindowRef = useRef(null);

    // Auto-scroll to the latest message
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-header">
                <FaRobot className="me-2" /> AI Savings Advisor
            </div>
            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`d-flex message-bubble ${msg.from === 'user' ? 'user-message' : 'bot-message'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chatbot;