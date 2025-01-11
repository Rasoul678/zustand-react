// Mimic the hook returned by `create`
import { useContext } from "react";
import { useStore } from "zustand";
import { BearContext } from "./BearProvider";
import { BearState } from "./store";

export const useBearContext = <T>(selector: (state: BearState) => T): T => {
  const store = useContext(BearContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");

  return useStore(store, selector);
};
