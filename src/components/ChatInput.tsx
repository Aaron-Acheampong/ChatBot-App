import React from "react";

import { Chatbot } from "supersimpledev";

import ChatInputClasses from './ChatInput.module.css'

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

   const keyDownHandler:React.KeyboardEventHandler<HTMLInputElement> = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    
          if(e.key === "Enter") {
            e.preventDefault();
            sendMessage();
          }
       
   }

  React.useEffect(() => {
    const inputElem = document.getElementById('send_button') as HTMLInputElement;

    inputElem?.addEventListener('keydown', keyDownHandler)

    return () => {
      inputElem?.removeEventListener('keydown', keyDownHandler);
    }
  })

  return (
    <div className={ChatInputClasses["chat-input-container"]} id="input_point">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className={ChatInputClasses["chat-input"]}
        id="send_button"
      />
      <button onClick={sendMessage} className={ChatInputClasses["send-button"]} >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
