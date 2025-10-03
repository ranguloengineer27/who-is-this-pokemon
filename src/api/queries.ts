const BASE_URL = "https://pokeapi.co/api/v2";
const GENERATION_ENDPOINT = `${BASE_URL}/generation`;

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

    console.log("is there data in cache ??");

    return Promise.resolve(cache.get(dataKey));
  };
}

export const fetchPokemonByGeneration = async (
  gen: number | null
): Promise<any> => {
  const key = gen ? `POKEMON_GEN_${gen}` : "POKEMON_GENS";
  const endpoint = gen ? `${GENERATION_ENDPOINT}/${gen}` : GENERATION_ENDPOINT;

  const getPokemonGeneration = await getCachedData(key);
  return await getPokemonGeneration(endpoint);
};
