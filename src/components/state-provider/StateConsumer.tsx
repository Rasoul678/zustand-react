import React from "react";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { useBearContext } from "./useBearContext";

type IProps = {};

const StateConsumer: React.FC<IProps> = () => {
  const bears = useBearContext((s) => s.bears);
  const addBear = useBearContext((s) => s.addBear);

  usePrism();

  return (
    <>
      <h1>State Provider Pattern</h1>
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
