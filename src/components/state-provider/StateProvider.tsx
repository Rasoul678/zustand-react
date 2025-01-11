import React from "react";
import { BearProvider } from "./BearProvider";
import StateConsumer from "./StateConsumer";

type IProps = {
  bears?: number;
};

const StateProvider: React.FC<IProps> = ({ bears = 0 }) => {
  return (
    <BearProvider bears={bears}>
      <StateConsumer />
    </BearProvider>
  );
};

export default StateProvider;
