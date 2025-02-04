export const code = `
    import React from "react";
    import { create } from "zustand";
    
    type IProps = {};
    
    type State = {
      count: number;
    };
    
    type Actions = {
      incrementCount: (v: number) => void;
      decrementCount: (v: number) => void;
    };
    
    const useCounter = create<State & Actions>()((set) => ({
      count: 0,
      incrementCount: (value) => set((state) => ({ count: state.count + value })),
      decrementCount: (value) =>
        set((state) => {
          if (state.count == 0) return state;
    
          return { count: state.count - value };
        }),
    }));
    
    const Counter: React.FC<IProps> = () => {
      const { count, incrementCount, decrementCount } = useCounter(
        (state) => state
      );
    
      return (
        <>
          <h1>Good Old Counter</h1>
          <div className="card">
              <button onClick={() => decrementCount(1)}>-</button>
              <button>count is {count}</button>
              <button onClick={() => incrementCount(1)}>+</button>
          </div>
        </>
      );
    };
    
    export default Counter;
`;
