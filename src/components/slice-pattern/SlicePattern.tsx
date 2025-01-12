import React from "react";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { useBoundStore } from "./store";

type IProps = {};

const SlicePattern: React.FC<IProps> = () => {
  const { addBear, addBoth, addFish, bears, eatFish, fishes, getBoth } =
    useBoundStore((state) => state);

  usePrism();

  return (
    <>
      <h1>Slice Pattern</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
          flexDirection: "column",
          margin: "auto",
          width: "fit-content",
        }}
      >
        <div className="card" style={{ padding: 0 }}>
          <h2>Bears</h2>
          <button>Bears count is: {bears}</button>
          <button onClick={() => addBear()}>Add Bear</button>
          <button onClick={() => eatFish()}>Eat Fish</button>
        </div>
        <div className="card" style={{ padding: 0 }}>
          <h2>Fish</h2>
          <button>Fish count is: {fishes}</button>
          <button onClick={() => addFish()}>Add Fish</button>
        </div>

        <div className="card" style={{ padding: 0 }}>
          <h2>Bears and Fish</h2>
          <button>Fish & Bears count is: {getBoth()}</button>
          <button onClick={() => addBoth()}>Add Fish and Bear</button>
        </div>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default SlicePattern;
