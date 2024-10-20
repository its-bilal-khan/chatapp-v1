"use client"
import React from 'react';

import { ChatArea } from '@chatV2/ChatArea';
import { ChatSidebar } from '@chatV2/ChatSideBar';

const ChatApp: React.FC = () => {
    return (
        <div className="flex h-screen">
            <ChatSidebar />
            <ChatArea />
        </div>
    );
};

export default ChatApp;
