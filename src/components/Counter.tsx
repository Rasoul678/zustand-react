import React from "react";
import { useStore } from "../main";

type IProps = {};

const Counter: React.FC<IProps> = () => {
  const { count, incrementCount, decrementCount } = useStore((state) => state);
  return (
    <div className="card">
      <button onClick={() => decrementCount(1)}>-</button>
      <button>count is {count}</button>
      <button onClick={() => incrementCount(1)}>+</button>
    </div>
  );
};

export default Counter;
