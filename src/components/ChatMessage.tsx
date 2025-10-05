import React from 'react'
import BotImg from "../assets/robot.png"
import UsrImg from "../assets/user.png"


function ChatMessage({ message , sender } : {message: string, sender: string}) {
  return (
          <div className={
            sender === 'user'
              ? 'chat-message-user'
              : 'chat-message-robot'
          }>
            {sender === 'bot' && (
              <img src={BotImg} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
              {message}
            </div>
            {sender === 'user' && (
              <img src={UsrImg} className="chat-message-profile" />
            )}
          </div>
        );
}

export default ChatMessage
