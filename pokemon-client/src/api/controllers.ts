import { getCachedData } from "./queries";
import type { Generation, PokemonSpecie, PokemonSpecieResponse } from "./types";

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

export const generateDistractorsChoices = (
  pokemonList: PokemonSpecie[],
  correctPokemon: PokemonSpecie
): PokemonSpecie[] => {
  const distractors: PokemonSpecie[] = [];

  while (distractors.length < 3) {
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const candidate = pokemonList[randomIndex];
    if (
      candidate.name !== correctPokemon.name &&
      !distractors.some((d) => d.name === candidate.name)
    ) {
      distractors.push(candidate);
    }
  }

  return distractors;
};
