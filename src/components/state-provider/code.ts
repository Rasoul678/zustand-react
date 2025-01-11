export const code = `
    // store.ts
    import { createStore } from "zustand";
    
    export interface BearProps {
      bears: number;
    }
    
    export interface BearState extends BearProps {
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

    // BearProvider.tsx
    import React from "react";
    import { BearProps, BearStore, createBearStore } from "./store";
    
    type IProps = React.PropsWithChildren<BearProps>;
    
    export const BearContext = React.createContext<BearStore | null>(null);
    
    export const BearProvider: React.FC<IProps> = ({ children, ...props }) => {
      const storeRef = React.useRef<BearStore>();
    
      if (!storeRef.current) {
        storeRef.current = createBearStore(props);
      }
    
      return (
        <BearContext.Provider value={storeRef.current}>
          {children}
        </BearContext.Provider>
      );
    };

    // useBearContext.ts
    // Mimic the hook returned by 'create'
    import { useContext } from "react";
    import { useStore } from "zustand";
    import { BearContext } from "./BearProvider";
    import { BearState } from "./store";
    
    export const useBearContext = <T>(selector: (state: BearState) => T): T => {
      const store = useContext(BearContext);
      if (!store) throw new Error("Missing BearContext.Provider in the tree");
    
      return useStore(store, selector);
    };
    

    // StateConsumer.tsx
    import React from "react";
    import { code } from "./code";
    import { useBearContext } from "./useBearContext";
    
    type IProps = {};
    
    const StateConsumer: React.FC<IProps> = () => {
      const bears = useBearContext((s) => s.bears);
      const addBear = useBearContext((s) => s.addBear);
    
      usePrism();
    
      return (
        <>
          <h1>State Provider Pattern</h1>
          <div className="card">
            <button>Value: {bears}</button>
            <button onClick={addBear}>Add bear</button>
          </div>
        </>
      );
    };
    
    export default StateConsumer;
`;
