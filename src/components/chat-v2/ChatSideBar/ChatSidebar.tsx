// components/ChatSidebar.tsx
import React from 'react';

import ChatList from '@chatV2/ChatSideBar/ChatList';
import SidebarHeader from '@chatV2/ChatSideBar/SidebarHeader';

export const ChatSidebar: React.FC = () => {
    return (
        <div className="w-1/4 bg-gray-800 border-r border-gray-700 grid chat-sidebar-rows">
            <SidebarHeader />
            <ChatList />
        </div>
    );
};
