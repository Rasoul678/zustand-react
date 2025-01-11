import { code } from "./App.code";
import "./App.css";
import { usePrism } from "./hooks/usePrism";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import zustandLogo from "/zustand.svg";

const App = () => {
  usePrism();

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://zustand-demo.pmnd.rs" target="_blank">
          <img src={zustandLogo} className="logo zustand" alt="Zustand logo" />
        </a>
      </div>
      <h1>Vite + React + Zustand</h1>
      <pre>
        <code className="language-typescript">{code}</code>
      </pre>
    </div>
  );
};

export default App;
