import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  incrementCount: (v: number) => void;
  decrementCount: (v: number) => void;
};

export const useStore = create<State & Actions>((set) => ({
  count: 0,
  incrementCount: (value) => set((state) => ({ count: state.count + value })),
  decrementCount: (value) =>
    set((state) => {
      if (state.count == 0) return state;

      return { count: state.count - value };
    }),
}));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
