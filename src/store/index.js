import {create} from "zustand/react";

const useMacBookStore = create((set) => ({
    color: '#2E2C2E',
    setColor: (color) => set ({color}),

    scale: 0.08,
    setScale: (scale) => set ({scale}),

    reset: () => set({color: '#2E2C2E', scale: 0.08}),
}));

export default useMacBookStore;