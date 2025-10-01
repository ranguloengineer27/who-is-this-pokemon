import { create } from "zustand";
import type { Generation } from "./types";
import { DEFAULT_GENERATION } from "./constants";

type StoreType = {
  generations: Generation[];
  updateGeneration: (newGenerations: Generation[]) => void;
};

const usePokemon = create<StoreType>((set) => ({
  generations: [DEFAULT_GENERATION],
  updateGeneration: (newGenerations) => set({ generations: newGenerations }),
}));

export default usePokemon;
