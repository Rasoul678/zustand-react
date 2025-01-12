import React from "react";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { useLocalAndUrlStore } from "./store";

type IProps = {};

const PersistStateURL: React.FC<IProps> = () => {
  const { addTypeOfFish, typesOfFish, numberOfBears, setNumberOfBears } =
    useLocalAndUrlStore((store) => store);

  usePrism();

  return (
    <>
      <h1>Persist State With URL Search</h1>
      <div className="card">
        <button onClick={() => setNumberOfBears(10)}>Set Bear</button>
        <button>Bear count is: {numberOfBears}</button>
        <button onClick={() => addTypeOfFish("tuna")}>Add Tuna</button>
        <button>Types of Fish: ( {typesOfFish.join(", ")} )</button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default PersistStateURL;
