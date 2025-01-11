import React from "react";
import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { usePrism } from "../../hooks/usePrism";
import { code } from "./code";

type IProps = {};

type State = {
  names: String[];
};

type Actions = {
  setNames: (v: String[]) => void;
};

const useStore = create<State & Actions>((set) => ({
  names: [],
  setNames: (names) => set({ names }),
}));

const ShowStateKeys: React.FC<IProps> = () => {
  const names = useStore(useShallow((state) => Object.keys(state)));

  usePrism();

  return (
    <>
      <h1>With 'useShallow' hook</h1>
      <div className="card">{names.join(", ")}</div>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </>
  );
};

export default ShowStateKeys;
