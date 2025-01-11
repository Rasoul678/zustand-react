import React from "react";
import { create } from "zustand";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";
import { createSelectors } from "./createSelector";

type IProps = {};

interface StateActions {
  bears: number;
  increase: (by: number | ((oldVal: number) => number)) => void;
  increament: () => void;
  decrease: (by: number | ((oldVal: number) => number)) => void;
  decreament: () => void;
}

const useBaseBearStore = create<StateActions>()((set) => ({
  bears: 0,
  increase: (by) =>
    set((state) => ({
      bears: typeof by === "function" ? by(state.bears) : state.bears + by,
    })),
  increament: () => set((state) => ({ bears: state.bears + 1 })),
  decrease: (by) =>
    set((state) => {
      if (typeof by === "function") {
        if (by(state.bears) < 0) return state;

        return {
          bears: by(state.bears),
        };
      } else {
        if (state.bears - by < 0) return state;

        return {
          bears: state.bears - by,
        };
      }
    }),
  decreament: () =>
    set((state) => {
      if (state.bears === 0) return state;

      return { bears: state.bears - 1 };
    }),
}));

const useBearStore = createSelectors(useBaseBearStore);

const AutoGenerateSelector: React.FC<IProps> = () => {
  const bears = useBearStore.use.bears();
  const increase = useBearStore.use.increase();
  const increament = useBearStore.use.increament();
  const decrease = useBearStore.use.decrease();
  const decreament = useBearStore.use.decreament();

  usePrism();

  return (
    <>
      <h1>Auto Generated Selectors</h1>
      <div className="card">
        <button onClick={() => decrease((prev) => prev - 2)}>minus 2</button>
        <button onClick={() => decreament()}>-</button>
        <button>Bears count is {bears}</button>
        <button onClick={() => increament()}>+</button>
        <button onClick={() => increase(2)}>plus 2</button>
      </div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default AutoGenerateSelector;
