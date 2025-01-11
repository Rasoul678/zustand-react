import React from "react";
import StateConsumer from "./StateConsumer";
import { BearStore, createBearStore } from "./store";

type IProps = {};

export const BearContext = React.createContext<BearStore | null>(null);

const InitWithProps: React.FC<IProps> = () => {
  const store = React.useRef(createBearStore({ bears: 10 })).current;

  return (
    <BearContext.Provider value={store}>
      <StateConsumer />
    </BearContext.Provider>
  );
};

export default InitWithProps;
