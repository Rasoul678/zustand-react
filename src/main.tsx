import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  increment: (v: number) => void;
  decrement: (v: number) => void;
};

export const useCounter = create<State & Actions>((set) => ({
  count: 0,
  increment: (value) => set((state) => ({ count: state.count + value })),
  decrement: (value) => set((state) => ({ count: state.count - value })),
}));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
