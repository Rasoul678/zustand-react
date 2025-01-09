import React from "react";
import { create } from "zustand";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";

type IProps = {};

type State = {
  count: number;
};

type Actions = {
  incrementCount: (v: number) => void;
  decrementCount: (v: number) => void;
};

const useCounter = create<State & Actions>((set) => ({
  count: 0,
  incrementCount: (value) => set((state) => ({ count: state.count + value })),
  decrementCount: (value) =>
    set((state) => {
      if (state.count == 0) return state;

      return { count: state.count - value };
    }),
}));

const Counter: React.FC<IProps> = () => {
  const { count, incrementCount, decrementCount } = useCounter(
    (state) => state
  );

  usePrism();

  return (
    <>
      <div className="card">
        <button onClick={() => decrementCount(1)}>-</button>
        <button>count is {count}</button>
        <button onClick={() => incrementCount(1)}>+</button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default Counter;
