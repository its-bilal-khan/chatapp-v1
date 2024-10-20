import React, { FC, ReactNode, useMemo } from "react";

import { IconContext, IIconContext } from "./IconContext";

interface IIconProvider extends IIconContext {
  children: ReactNode;
}

export const IconProvider: FC<IIconProvider> = ({ isSelected, children }) => {
  const memoizedValue = useMemo(
    () => ({
      isSelected,
    }),
    [isSelected]
  );

  return (
    <IconContext.Provider value={memoizedValue}>
      {children}
    </IconContext.Provider>
  );
};
