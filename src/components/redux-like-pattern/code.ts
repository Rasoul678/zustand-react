export const code = `
    // store.ts
    import { create } from "zustand";
    import { redux } from "zustand/middleware";
    
    export enum ActionType {
      INCREASE = "INCREASE",
      DECREASE = "DECREASE",
    }
    
    type DispatchActions = {
      type: ActionType;
      payload?: number;
    };
    
    type State = {
      count: number;
    };
    
    type Actions = {
      dispatch: (actions: DispatchActions) => void;
    };
    
    const reducer = (state: State, action: DispatchActions) => {
      switch (action.type) {
        case ActionType.INCREASE:
          return { count: state.count + (action.payload || 1) };
        case ActionType.DECREASE:
          if (state.count === 0) return state;
          return { count: state.count - (action.payload || 1) };
        default:
          return state;
      }
    };
    
    export const useStore = create<State & Actions>((set) => ({
      count: 0,
      dispatch: (actions: DispatchActions) =>
        set((state) => reducer(state, actions)),
    }));

    // With Redux Middleware
    export const useReduxStore = create(redux(reducer, { count: 0 }));

    // #####################################################################
    // ReduxLikePattern.tsx
    import React from "react";
    import { ActionType, useReduxStore, useStore } from "./store";
    
    type IProps = {};
    
    const ReduxLikePattern: React.FC<IProps> = () => {
      // const { count, dispatch } = useStore((store) => store);
      const { count, dispatch } = useReduxStore((store) => store);
    
      return (
        <>
          <h1>Redux Like Pattern</h1>
          <div className="card">
            <button onClick={() => dispatch({ type: ActionType.DECREASE })}>
              -
            </button>
            <button>count is {count}</button>
            <button onClick={() => dispatch({ type: ActionType.INCREASE })}>
              +
            </button>
          </div>
        </>
      );
    };
    
    export default ReduxLikePattern;
`;
