import { useState } from 'react'


import './App.css'

import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'



function App() {
  const [chatMessages, setChatMessages] = useState<MessageType[]>([{
          message: 'hello chatbot',
          sender: 'user',
          id: 'id1'
        }, {
          message: 'Hello! How can I help you?',
          sender: 'bot',
          id: 'id2'
        }, {
          message: 'can you get me todays date?',
          sender: 'user',
          id: 'id3'
        }, {
          message: 'Today is September 27',
          sender: 'bot',
          id: 'id4'
        }]);
        

        return (
          <div className="app-container">

            <ChatMessages
              chatMessages={chatMessages}
            />

            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />

          </div>
        );
}

export default App
