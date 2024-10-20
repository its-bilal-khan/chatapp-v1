import React from 'react';

// components/ChatArea.tsx
import ChatHeader from '@chatV2/ChatArea/ChatHeader';
import MessageInput from '@chatV2/ChatArea/MessageInput';
import MessageList from '@chatV2/ChatArea/MessageList';

export const ChatArea: React.FC = () => {
    return (
        <div className="flex-1 flex flex-col bg-gray-900">
            <ChatHeader />
            <MessageList />
            <MessageInput />
        </div>
    );
};

