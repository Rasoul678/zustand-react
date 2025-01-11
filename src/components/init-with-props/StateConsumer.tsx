import React from "react";
import { useStore } from "zustand";
import { BearContext } from "./InitWithProps";

type IProps = {};

const StateConsumer: React.FC<IProps> = () => {
  const store = React.useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");

  const bears = useStore(store, (s) => s.bears);
  const addBear = useStore(store, (s) => s.addBear);

  return (
    <>
      <h1>Initialize State With Props</h1>
      <div className="card">
        <button>{bears}</button>
        <button onClick={addBear}>Add bear</button>
      </div>
    </>
  );
};

export default StateConsumer;
