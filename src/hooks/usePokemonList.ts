import { useEffect } from "react";
import usePokemon from "../api/store";
import { getGenerationsData } from "../api/controllers";

export const usePokemonList = (shouldUpdateList: boolean) => {
  const generations = usePokemon.use.generations();
  const updatePokemonsList = usePokemon.use.updatePokemonsList();

  useEffect(() => {
    (async () => {
      const pokemonListData = await getGenerationsData(generations);
      const pokemonListPromise = await Promise.all(pokemonListData);
      updatePokemonsList(
        pokemonListPromise.flatMap(({ pokemon_species }) => pokemon_species)
      );
    })();
  }, [shouldUpdateList]);
};
