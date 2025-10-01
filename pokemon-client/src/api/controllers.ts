import type { Generation } from "./types";

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
