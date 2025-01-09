import React from "react";
import reactLogo from "../assets/react.svg";
import { useCounter } from "../main";
import viteLogo from "/vite.svg";

type IProps = {};

const Counter: React.FC<IProps> = () => {
  const { count, increment } = useCounter((state) => state);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment(1)}>count is {count}</button>
      </div>
    </>
  );
};

export default Counter;
