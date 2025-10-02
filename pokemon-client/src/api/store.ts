import { create, type StoreApi, type UseBoundStore } from "zustand";
import { GameState, type Generation, type PokemonSpecie } from "./types";
import { DEFAULT_GENERATION } from "./constants";

type StoreType = {
  generations: Generation[];
  gameState: GameState;
  updateGeneration: (newGenerations: Generation[]) => void;
  updatePokemonsList: (newList: PokemonSpecie[]) => void;
  updateGameState: (newGameState: GameState) => void;
  pokemonsList: PokemonSpecie[];
  currentPokemon: PokemonSpecie | null;
  updateCurrentPokemon: (newPokemon: PokemonSpecie) => void;
};

const basePokemonStore = create<StoreType>((set) => ({
  generations: [DEFAULT_GENERATION],
  gameState: GameState.INITIAL,
  updateGameState: (newGameState: GameState) =>
    set({ gameState: newGameState }),
  pokemonsList: [],
  currentPokemon: null,
  updateCurrentPokemon: (newPokemon) => set({ currentPokemon: newPokemon }),
  updateGeneration: (newGenerations) => set({ generations: newGenerations }),
  updatePokemonsList: (newPokemonsList: any) =>
    set({ pokemonsList: newPokemonsList }),
}));

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const usePokemon = createSelectors(basePokemonStore);

export default usePokemon;
