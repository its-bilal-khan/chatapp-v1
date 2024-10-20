import React from "react";

import { Left } from "@chat/left";
import { Right } from "@chat/right";

export const Chat = () => {
  return (
    <div className="flex w-[calc(100%-38px)] h-[calc(100%-38px)] max-w-[1600px] mx-auto bg-[var(--background-default)]">
      <Left />
      <Right />
    </div>
  );
};
