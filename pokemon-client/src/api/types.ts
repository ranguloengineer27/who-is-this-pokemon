export type Generation = {
  name: string;
  url: string;
};

export type PokemonSpecie = {
  name: string;
  url: string;
};

export type PokemonSpecieResponse = { pokemon_species: PokemonSpecie[] };

export type QueryResponse = {
  count: number;
  results: Generation[];
};

export enum GameState {
  INITIAL = "INITIAL",
  ROUND_START = "ROUND_START",
  ROUND_STARTED = "ROUND_STARTED",
}
