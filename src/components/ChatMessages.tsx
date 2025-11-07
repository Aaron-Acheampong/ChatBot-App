import React from "react";
import ChatMessage from "./ChatMessage";

import ChatMessagesClasses from './ChatMessages.module.css'

function ChatMessages({ chatMessages }: { chatMessages: MessageType[] }) {
  const chatMessagesRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className={ChatMessagesClasses["chat-messages-container"]} ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
