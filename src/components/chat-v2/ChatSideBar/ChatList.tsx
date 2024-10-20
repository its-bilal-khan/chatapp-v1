// components/ChatList.tsx

import { chatStore } from 'store';

import ChatItem from '@chatV2/ChatSideBar/ChatItem';

const ChatList: React.FC = () => {
    return (
        <div className="overflow-y-auto">
            {
                 chatStore.signal.chats.value.map(chat => (
                    <ChatItem
                    {...chat}
                    date='Yesterday'
                    />
                ))
            }
        </div>
    );
};

export default ChatList