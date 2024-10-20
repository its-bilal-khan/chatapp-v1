import { createContext, useContext } from "react";

export interface IIconContext {
  isSelected: boolean;
}

const defaultValue = {
  isSelected: false,
};

const IconContext = createContext<IIconContext>(defaultValue);
IconContext.displayName = "Icon Context";

export const useIconContext = () => useContext(IconContext);
export { IconContext };
