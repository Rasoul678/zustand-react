export const code = `
    /**
     * There are times when you want to conditionally connect the state to the URL.
     * This example depicts usage of the URL query parameters while keeping it synced
     * with another persistence implementation, like localstorage.
     * If you want the URL params to always populate, the conditional check on getUrlSearch() can be removed.
     **/

    // store.ts
    import { create } from "zustand";
    import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
    
    const getUrlSearch = () => {
      return window.location.search.slice(1);
    };
    
    const persistentStorage: StateStorage = {
      getItem: (key): string => {
        // Check URL first
        if (getUrlSearch()) {
          const searchParams = new URLSearchParams(getUrlSearch());
          const storedValue = searchParams.get(key);
          return JSON.parse(storedValue as string);
        } else {
          // Otherwise, we should load from localstorage or alternative storage
          return JSON.parse(localStorage.getItem(key) as string);
        }
      },
      setItem: (key, newValue): void => {
        // Check if query params exist at all, can remove check if always want to set URL
        if (getUrlSearch()) {
          const searchParams = new URLSearchParams(getUrlSearch());
          searchParams.set(key, JSON.stringify(newValue));
          window.history.replaceState(null, "", \`?\{searchParams.toString()\}\`);
        }
    
        localStorage.setItem(key, JSON.stringify(newValue));
      },
      removeItem: (key): void => {
        const searchParams = new URLSearchParams(getUrlSearch());
        searchParams.delete(key);
        window.location.search = searchParams.toString();
      },
    };
    
    type LocalAndUrlStore = {
      typesOfFish: string[];
      addTypeOfFish: (fishType: string) => void;
      numberOfBears: number;
      setNumberOfBears: (newNumber: number) => void;
    };
    
    const storageOptions = {
      name: "fishAndBearsStore",
      storage: createJSONStorage<LocalAndUrlStore>(() => persistentStorage),
    };
    
    export const useLocalAndUrlStore = create(
      persist<LocalAndUrlStore>(
        (set, get) => ({
          typesOfFish: ["salmon"],
          addTypeOfFish: (fishType) =>
            set({ typesOfFish: [...new Set([...get().typesOfFish, fishType])] }),
    
          numberOfBears: 0,
          setNumberOfBears: (numberOfBears) => set({ numberOfBears }),
        }),
        storageOptions
      )
    );

    // PersistStateURL.tsx
    import React from "react";
    import { useLocalAndUrlStore } from "./store";
    
    type IProps = {};
    
    const PersistStateURL: React.FC<IProps> = () => {
      const { addTypeOfFish, typesOfFish, numberOfBears, setNumberOfBears } =
        useLocalAndUrlStore((store) => store);
    
      return (
        <>
          <h1>Persist State With URL Search</h1>
          <div className="card">
            <button onClick={() => setNumberOfBears(10)}>Set Bear</button>
            <button>Bear count is: {numberOfBears}</button>
            <button onClick={() => addTypeOfFish("tuna")}>Add Tuna</button>
            <button>Types of Fish: ( {typesOfFish.join(", ")} )</button>
          </div>
        </>
      );
    };
    
    export default PersistStateURL;
`;
