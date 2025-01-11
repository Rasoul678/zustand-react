export const code = `
    // store.ts
    import { create } from "zustand";
    import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
    
    const hashStorage: StateStorage = {
      getItem: (key): string => {
        const searchParams = new URLSearchParams(window.location.hash.slice(1));
        const storedValue = searchParams.get(key) ?? "{}";
        return JSON.parse(storedValue);
      },
      setItem: (key, newValue): void => {
        const searchParams = new URLSearchParams(window.location.hash.slice(1));
        searchParams.set(key, JSON.stringify(newValue));
        window.location.hash = searchParams.toString();
      },
      removeItem: (key): void => {
        const searchParams = new URLSearchParams(window.location.hash.slice(1));
        searchParams.delete(key);
        window.location.hash = searchParams.toString();
      },
    };
    
    interface IStore {
      count: number;
      increase: () => void;
      decrease: () => void;
      reset: () => void;
    }
    
    export const useStore = create<IStore>()(
      persist(
        (set) => ({
          count: 0,
          increase: () => set((state) => ({ count: state.count + 1 })),
          decrease: () =>
            set((state) => {
              if (state.count === 0) return state;
    
              return { count: state.count - 1 };
            }),
          reset: () => set({ count: 0 }),
        }),
        {
          name: "count-hash-storage",
          storage: createJSONStorage(() => hashStorage),
        }
      )
    );

    // WithUrlHash.tsx
    import React from "react";
    import { useStore } from "./store";
    
    type IProps = {};
    
    const WithUrlHash: React.FC<IProps> = () => {
      const { count, decrease, increase, reset } = useStore((state) => state);

      return (
        <>
          <h1>"With Hash Persist state in URL"</h1>
          <div className="card">
            <button onClick={decrease}>-</button>
            <button onClick={reset}>count is {count} and reset?!</button>
            <button onClick={increase}>+</button>
          </div>
        </>
      );
    };
    
    export default WithUrlHash;
`;
