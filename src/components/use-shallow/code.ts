export const code = `
    import React from "react";
    import { create } from "zustand";
    import { useShallow } from "zustand/react/shallow";

    type IProps = {};

    type State = {
    names: String[];
    };

    type Actions = {
    setNames: (v: String[]) => void;
    };

    const useStore = create<State & Actions>((set) => ({
    names: [],
    setNames: (names) => set({ names }),
    }));

    const ShowStateKeys: React.FC<IProps> = () => {
    const names = useStore(useShallow((state) => Object.keys(state)));

    return (
        <div className="card">{names.join(", ")}</div>
    );
    };

    export default ShowStateKeys;

`;
