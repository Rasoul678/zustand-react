import React from "react";
import StateConsumer from "./StateConsumer";
import { BearStore, createBearStore } from "./store";

type IProps = {
  bears?: number;
};

export const BearContext = React.createContext<BearStore | null>(null);

const InitWithProps: React.FC<IProps> = ({ bears = 0 }) => {
  const store = React.useRef(createBearStore({ bears })).current;

  return (
    <BearContext.Provider value={store}>
      <StateConsumer />
    </BearContext.Provider>
  );
};

export default InitWithProps;
