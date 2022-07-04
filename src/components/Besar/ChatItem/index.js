import React from 'react'
import ChatCS from './ChatCS';
import ChatMebel from './ChatMebel';

const ChatItem = ({pelanggan}) => {
    if (pelanggan){
        return <ChatCS/>
      }
        return <ChatMebel/>
    };

export default ChatItem