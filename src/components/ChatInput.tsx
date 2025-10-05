import React from "react";

import { Chatbot } from "supersimpledev";

function ChatInput({ chatMessages, setChatMessages } 
  : {chatMessages : MessageType[], setChatMessages: React.Dispatch<React.SetStateAction<MessageType[]>>}
) {
  const [inputText, setInputText] = React.useState<string>("");

  function saveInputText(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "bot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
