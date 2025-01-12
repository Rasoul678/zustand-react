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
