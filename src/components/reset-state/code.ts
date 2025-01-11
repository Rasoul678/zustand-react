export const code = `
    import React from "react";
    import { create } from "zustand";
    
    type IProps = {};
    
    type State = {
      salmon: number;
      tuna: number;
    };
    
    type Actions = {
      addSalmon: (s: number) => void;
      addTuna: (t: number) => void;
      reset: () => void;
    };
    
    const initialState = {
      salmon: 0,
      tuna: 0,
    };
    
    const useSlice = create<State & Actions>()((set, get) => ({
      ...initialState,
      addSalmon: (s) => set({ salmon: get().salmon + s }),
      addTuna: (t) => set({ tuna: get().tuna + t }),
      reset: () => set(initialState),
    }));
    
    const ResetState: React.FC<IProps> = () => {
      const { salmon, tuna, addSalmon, addTuna, reset } = useSlice();
    
      return (
        <>
          <h1>Reset State</h1>
          <div className="card">
            <button onClick={() => addSalmon(1)}>salmon: {salmon}</button>
            <button onClick={() => addTuna(1)}>tuna: {tuna}</button>
            <button onClick={reset}>reset</button>
          </div>
        </>
      );
    };
    
    export default ResetState;
`;
