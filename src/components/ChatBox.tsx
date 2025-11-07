import { useState } from 'react'


import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

import ChatBoxClasses from './ChatBox.module.css'

type boxProps = {
    top: boolean
}

 function ChatBox({ top }: boxProps) {

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

        const reverse = top ? {flexDirection: 'column-reverse'} : {};

   return (
     <div className={ChatBoxClasses['chat-area']} style={reverse}>

       <ChatMessages chatMessages={chatMessages} />

        <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
        />
     </div>
   )
 }
 
 export default ChatBox
 