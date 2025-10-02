import { useEffect } from "react";
import usePokemon from "../api/store";
import { GameState } from "../api/types";

export const usePokemonRandomChoice = () => {
  const gameState = usePokemon.use.gameState();
  const pokemonList = usePokemon.use.pokemonsList();
  const updateCurrentPokemon = usePokemon.use.updateCurrentPokemon();

  useEffect(() => {
    if (gameState === GameState.ROUND_START) {
      const newPokemonIndex = Math.floor(Math.random() * pokemonList.length);
      updateCurrentPokemon(pokemonList[newPokemonIndex]);
    }
  }, [gameState]);
};
