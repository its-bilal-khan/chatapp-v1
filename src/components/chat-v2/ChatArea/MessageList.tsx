import React from 'react';
import { chatStore } from 'store';
import ChatMessage from 'store/message';

import Message from '@chatV2/ChatArea/Message';

const MessageList: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 bg-[#0b141a]">
      {
        chatStore.signal.selectedChatMessages.value.map((message: ChatMessage)=> <Message {...message} />)
      }
    </div>
  );
};

export default MessageList;
