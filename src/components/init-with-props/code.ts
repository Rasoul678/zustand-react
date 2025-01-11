export const code = `
    // store.ts
    import { createStore } from "zustand";
    
    interface BearProps {
      bears: number;
    }
    
    interface BearState extends BearProps {
      addBear: () => void;
    }
    
    export const createBearStore = (initProps?: Partial<BearProps>) => {
      const DEFAULT_PROPS: BearProps = {
        bears: 0,
      };
    
      return createStore<BearState>()((set) => ({
        ...DEFAULT_PROPS,
        ...initProps,
        addBear: () => set((state) => ({ bears: ++state.bears })),
      }));
    };
    
    export type BearStore = ReturnType<typeof createBearStore>;

    // #######################################################################
    // InitWithProps.tsx
    import React from "react";
    import StateConsumer from "./StateConsumer";
    import { BearStore, createBearStore } from "./store";

    type IProps = {
      bears?: number;
    };

    export const BearContext = React.createContext<BearStore | null>(null);

    const InitWithProps: React.FC<IProps> = ({ bears = 0 }) => {
      const store = React.useRef(createBearStore({ bears })).current;

      return (
        <BearContext.Provider value={store}>
          <StateConsumer />
        </BearContext.Provider>
      );
    };

    export default InitWithProps;


    // #######################################################################
    // StateConsumer.tsx
    import React from "react";
    import { useStore } from "zustand";
    import { BearContext } from "./InitWithProps";
    
    type IProps = {};
    
    const StateConsumer: React.FC<IProps> = () => {
      const store = React.useContext(BearContext);
      if (!store) throw new Error("Missing BearContext.Provider in the tree");
    
      const bears = useStore(store, (s) => s.bears);
      const addBear = useStore(store, (s) => s.addBear);
    
      return (
        <>
          <h1>Initialize State With Props</h1>
          <div className="card">
            <button>Value: {bears}</button>
            <button onClick={addBear}>Add bear</button>
          </div>
        </>
      );
    };
    
    export default StateConsumer;
`;
