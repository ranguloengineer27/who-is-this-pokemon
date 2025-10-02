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

export enum RoundResult {
  WIN = "WIN",
  LOSE = "LOSE",
}

export enum GameState {
  INITIAL = "INITIAL",
  ROUND_STARTED = "ROUND_STARTED",
}
