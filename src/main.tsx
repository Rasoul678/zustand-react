import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";

import Counter from "./components/counter/Counter.tsx";
import AppLayout from "./components/layout/AppLayout.tsx";
import ShowStateKeys from "./components/use-shallow/ShowNames.tsx";
import WithCombine from "./components/with-combine/WithCombine.tsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path="counter" element={<Counter />} />
          <Route path="use-shallow" element={<ShowStateKeys />} />
          <Route path="combine" element={<WithCombine />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
