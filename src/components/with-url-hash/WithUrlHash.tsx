import React from "react";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { useStore } from "./store";

type IProps = {};

const WithUrlHash: React.FC<IProps> = () => {
  const { count, decrease, increase, reset } = useStore((state) => state);

  usePrism();

  return (
    <>
      <h1>With Hash Persist state in URL</h1>
      <div className="card">
        <button onClick={decrease}>-</button>
        <button onClick={reset}>count is {count} and reset?!</button>
        <button onClick={increase}>+</button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default WithUrlHash;
