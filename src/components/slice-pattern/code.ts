export const code = `
    // store.ts
    import { create, StateCreator } from "zustand";
    
    interface BearSlice {
      bears: number;
      addBear: () => void;
      eatFish: () => void;
    }
    
    interface FishSlice {
      fishes: number;
      addFish: () => void;
    }
    
    interface SharedSlice {
      addBoth: () => void;
      getBoth: () => number;
    }
    
    interface BoundSlices extends BearSlice, FishSlice, SharedSlice {}
    
    const createBearSlice: StateCreator<
      BearSlice & FishSlice,
      [],
      [],
      BearSlice
    > = (set) => ({
      bears: 0,
      addBear: () => set((state) => ({ bears: state.bears + 1 })),
      eatFish: () =>
        set((state) => {
          if (state.fishes === 0) return state;
          return { fishes: state.fishes - 1 };
        }),
    });
    
    const createFishSlice: StateCreator<FishSlice, [], [], FishSlice> = (
      set,
      get
    ) => ({
      fishes: 0,
      addFish: () => set({ fishes: get().fishes + 1 }),
    });
    
    const createSharedSlice: StateCreator<
      BearSlice & FishSlice,
      [],
      [],
      SharedSlice
    > = (_set, get) => ({
      addBoth: () => {
        // you can reuse previous methods
        get().addBear();
        get().addFish();
        // or do them from scratch
        // _set((state) => ({ bears: state.bears + 1, fishes: state.fishes + 1 })
      },
      getBoth: () => get().bears + get().fishes,
    });
    
    export const useBoundStore = create<BoundSlices>()((...args) => ({
      ...createBearSlice(...args),
      ...createFishSlice(...args),
      ...createSharedSlice(...args),
    }));

    // #########################################################################
    // SlicePattern.tsx
    import React from "react";
    import { useBoundStore } from "./store";
    
    type IProps = {};
    
    const SlicePattern: React.FC<IProps> = () => {
      const { addBear, addBoth, addFish, bears, eatFish, fishes, getBoth } =
        useBoundStore((state) => state);
        
      return (
        <>
          <h1>Slice Pattern</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "baseline",
              flexDirection: "column",
              margin: "auto",
              width: "fit-content",
            }}
          >
            <div className="card" style={{ padding: 0 }}>
              <h2>Bears</h2>
              <button>Bears count is: {bears}</button>
              <button onClick={() => addBear()}>Add Bear</button>
              <button onClick={() => eatFish()}>Eat Fish</button>
            </div>
            <div className="card" style={{ padding: 0 }}>
              <h2>Fish</h2>
              <button>Fish count is: {fishes}</button>
              <button onClick={() => addFish()}>Add Fish</button>
            </div>
    
            <div className="card" style={{ padding: 0 }}>
              <h2>Bears and Fish</h2>
              <button>Fish & Bears count is: {getBoth()}</button>
              <button onClick={() => addBoth()}>Add Fish and Bear</button>
            </div>
          </div>
        </>
      );
    };
    
    export default SlicePattern;
`;
