import { useEffect } from "react";
import usePokemon from "../api/store";
import { GameState } from "../api/types";
import { generateDistractorsChoices } from "../api/controllers";

export const usePokemonRandomChoice = () => {
  const gameState = usePokemon.use.gameState();
  const pokemonList = usePokemon.use.pokemonsList();
  const updateCurrentPokemon = usePokemon.use.updateCurrentPokemon();
  const updateOptions = usePokemon.use.updateOptions();

  useEffect(() => {
    if (gameState === GameState.ROUND_STARTED && pokemonList.length > 0) {
      const correctIndex = Math.floor(Math.random() * pokemonList.length);
      const correctPokemon = pokemonList[correctIndex];

      const distractors = generateDistractorsChoices(
        pokemonList,
        correctPokemon
      );

      const allOptions = [...distractors, correctPokemon];
      const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);

      updateCurrentPokemon(correctPokemon);
      updateOptions(shuffledOptions);
    }
  }, [gameState]);
};
