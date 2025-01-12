export const code = `
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { BrowserRouter, Route, Routes } from "react-router";
    import App from "./App.tsx";
    import "./index.css";

    import AutoGenerateSelector from "./components/auto-generate_selector/AutoGenerateSelector.tsx";
    import Counter from "./components/counter/Counter.tsx";
    import InitWithProps from "./components/init-with-props/InitWithProps.tsx";
    import AppLayout from "./components/layout/AppLayout.tsx";
    import PersistStateURL from "./components/persist-state-with-url/PersistStateURL.tsx";
    import ReduxLikePattern from "./components/redux-like-pattern/ReduxLikePattern.tsx";
    import ResetState from "./components/reset-state/ResetState.tsx";
    import StateProvider from "./components/state-provider/StateProvider.tsx";
    import ShowStateKeys from "./components/use-shallow/ShowNames.tsx";
    import WithCombine from "./components/with-combine/WithCombine.tsx";
    import WithUrlHash from "./components/with-url-hash/WithUrlHash.tsx";

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
                    <Route path="auto-selector" element={<AutoGenerateSelector />} />
                    <Route path="with-url-hash" element={<WithUrlHash />} />
                    <Route path="persist-url-search" element={<PersistStateURL />} />
                    <Route path="reset-state" element={<ResetState />} />
                    <Route
                        path="init-with-props"
                        element={<InitWithProps bears={10} />}
                    />
                    <Route
                        path="provider-pattern"
                        element={<StateProvider bears={60} />}
                    />
                    </Route>
                    <Route path="redux-like-pattern" element={<ReduxLikePattern />} />
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
`;
