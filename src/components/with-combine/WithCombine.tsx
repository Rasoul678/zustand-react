import React from "react";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";

type IProps = {};

type State = {
  history: Array<number | null>;
  currentMove: number;
};

type Actions = {
  setHistory: (nextHistory: Array<number | null> | Function) => void;
  setCurrentMove: (nextMove: number | Function) => void;
};

let useStore = create<State & Actions>(
  combine(
    {
      history: Array(9).fill(null),
      currentMove: 0,
    },
    (set, _get) => ({
      setHistory: (nextHistory: Array<number | null> | Function) => {
        set((state) => ({
          history:
            typeof nextHistory === "function"
              ? nextHistory(state.history)
              : nextHistory,
        }));
      },
      setCurrentMove: (nextCurrentMove: number | Function) => {
        set((state) => ({
          currentMove:
            typeof nextCurrentMove === "function"
              ? nextCurrentMove(state.currentMove)
              : nextCurrentMove,
        }));
      },
    })
  )
);

const WithCombine: React.FC<IProps> = () => {
  const { currentMove, history, setCurrentMove, setHistory } = useStore();

  usePrism();

  return (
    <div>
      <h1>Combine</h1>
      <div className="card">
        <button onClick={() => setCurrentMove(9)}>
          current Move: {currentMove}
        </button>
        <button onClick={() => setHistory([1, 2, 3, 4, 5, 6, 7, 8, 9])}>
          populate history
        </button>
      </div>
      <p>{history.filter(Boolean).join(", ")}</p>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </div>
  );
};

export default WithCombine;
