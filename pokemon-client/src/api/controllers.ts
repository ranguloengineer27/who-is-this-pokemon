import { getCachedData } from "./queries";
import type { Generation, PokemonSpecieResponse } from "./types";

export const manageGenerationsUpdate = (
  newGeneration: Generation,
  oldGenerations: Generation[]
) => {
  const newGenerationExists = oldGenerations.some(
    ({ url }) => url === newGeneration.url
  );
  if (newGenerationExists) {
    return oldGenerations.filter((gen) => gen.name !== newGeneration.name);
  }

  return [...oldGenerations, newGeneration];
};

export async function getGenerationsData(
  gens: Generation[]
): Promise<Promise<PokemonSpecieResponse>[]> {
  const data: Promise<PokemonSpecieResponse>[] = gens.map(
    async ({ url }) =>
      await getCachedData<PokemonSpecieResponse>("POKEMONS_GENERATIONS")(url)
  );

  return data;
}
