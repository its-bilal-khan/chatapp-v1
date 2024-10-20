import React from 'react';

import ChatApp from '@components/chat-v2/ChatApp';

// import { Chat } from "@components/chat";

export default function Home() {
  return (
    <main className="bg-[var(--app-background)] h-screen w-screen">
      <ChatApp />
    </main>
  );
}
