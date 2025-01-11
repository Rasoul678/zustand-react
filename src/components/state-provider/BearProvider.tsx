import React from "react";
import { BearProps, BearStore, createBearStore } from "./store";

type IProps = React.PropsWithChildren<BearProps>;

export const BearContext = React.createContext<BearStore | null>(null);

export const BearProvider: React.FC<IProps> = ({ children, ...props }) => {
  const storeRef = React.useRef<BearStore>();

  if (!storeRef.current) {
    storeRef.current = createBearStore(props);
  }

  return (
    <BearContext.Provider value={storeRef.current}>
      {children}
    </BearContext.Provider>
  );
};
