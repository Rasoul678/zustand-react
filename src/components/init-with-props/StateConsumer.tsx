import React from "react";
import { useStore } from "zustand";
import { usePrism } from "../../hooks/usePrism";
import { BearContext } from "./InitWithProps";
import { code } from "./code";

type IProps = {};

const StateConsumer: React.FC<IProps> = () => {
  const store = React.useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");

  const bears = useStore(store, (s) => s.bears);
  const addBear = useStore(store, (s) => s.addBear);

  usePrism();

  return (
    <>
      <h1>Initialize State With Props</h1>
      <div className="card">
        <button>Value: {bears}</button>
        <button onClick={addBear}>Add bear</button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default StateConsumer;
