import React from "react";

import {
  ChannelsIcon,
  CommunitiesIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "@common/icons";

export const First = () => {
  return (
    <div className="flex items-start justify-between h-[var(--chat-left-header-height)] bg-[var(--panel-header-background)] text-[color:var(--primary)] px-4 py-[10px]">
      <div className="w-[40px] h-[40px] rounded-full bg-[var(--menu-bar-item-background-active)]"></div>
      <div className="flex justify-end items-center gap-[10px]">
        <CommunitiesIcon />
        <StatusIcon />
        <ChannelsIcon />
        <NewChatIcon />
        <MenuIcon />
      </div>
    </div>
  );
};
