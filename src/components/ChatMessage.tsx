import React from 'react'
import BotImg from "../assets/robot.png"
import UsrImg from "../assets/user.png"

import MessageClasses from './ChatMessage.module.css'


function ChatMessage({ message , sender } : {message: string, sender: string}) {
  return (
          <div className={
            sender === 'user'
              ? MessageClasses['chat-message-user']
              : MessageClasses['chat-message-robot']
          }>
            {sender === 'bot' && (
              <img src={BotImg} className={MessageClasses["chat-message-profile"]} />
            )}
            <div className={MessageClasses["chat-message-text"]}>
              {message}
            </div>
            {sender === 'user' && (
              <img src={UsrImg} className={MessageClasses["chat-message-profile"]} />
            )}
          </div>
        );
}

export default ChatMessage
