"use client";

import { useDetectClickOutside } from "hooks";
import React, { FC, ReactNode, useCallback, useState } from "react";

import { IconProvider } from "@common/icons/context";

interface IIcon {
  padding?: string;
  className?: string;
  children: ReactNode;
}

export const Icon: FC<IIcon> = ({
  padding = "p-2",
  className,
  children,
}): React.JSX.Element => {
  const [isSelected, setIsSelected] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setIsSelected(false),
  });

  const handleOnClick = useCallback(
    () => setIsSelected(!isSelected),
    [setIsSelected, isSelected]
  );

  const selectedClassName = isSelected ? "icon-selected" : "";

  return (
    <IconProvider isSelected={isSelected}>
      <div
        className={`icon-container ${selectedClassName} ${padding} ${className}`}
        onClick={handleOnClick}
        ref={ref}
      >
        <span>{children}</span>
      </div>
    </IconProvider>
  );
};
