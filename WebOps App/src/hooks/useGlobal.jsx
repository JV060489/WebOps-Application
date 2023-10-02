import create from "zustand";
import currentData from "../data/";
import { NavData, MainData } from "../data/";
export { default as NavData } from "./elements/NavData";

const useGlobal = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}));

export default useGlobal;
