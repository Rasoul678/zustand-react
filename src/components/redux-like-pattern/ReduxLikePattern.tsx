import React from "react";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { ActionType, useReduxStore } from "./store";

type IProps = {};

const ReduxLikePattern: React.FC<IProps> = () => {
  // const { count, dispatch } = useStore((store) => store);
  const { count, dispatch } = useReduxStore((store) => store);

  usePrism();

  return (
    <>
      <h1>Redux Like Pattern</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: ActionType.DECREASE })}>
          -
        </button>
        <button>count is {count}</button>
        <button onClick={() => dispatch({ type: ActionType.INCREASE })}>
          +
        </button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default ReduxLikePattern;
