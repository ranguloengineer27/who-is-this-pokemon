import { GENERATION_ENDPOINT } from "./constants";
import type { QueryResponse } from "./types";

export const fetchPokemonListOrigin = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon data");
    }
    return await response.json();
  } catch (e) {
    throw new Error(`ERROR fetching data::: ${e}`);
  }
};

export function getCachedData<T>(dataKey: string): (url: string) => Promise<T> {
  const cache = new Map();

  return async (url: string) => {
    if (!cache.has(dataKey)) {
      const data = await fetchPokemonListOrigin(url);
      cache.set(dataKey, data);
    }

    return Promise.resolve(cache.get(dataKey));
  };
}

export const fetchPokemonByGeneration = async (
  gen: number | null
): Promise<QueryResponse> => {
  const key = gen ? `POKEMON_GEN_${gen}` : "POKEMON_GENS";
  const endpoint = gen ? `${GENERATION_ENDPOINT}/${gen}` : GENERATION_ENDPOINT;

  const getPokemonGeneration = await getCachedData<QueryResponse>(key);
  return await getPokemonGeneration(endpoint);
};
