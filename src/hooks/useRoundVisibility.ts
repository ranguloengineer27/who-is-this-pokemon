import { GameState } from "../api/types";

type roundVisibility = {
  pokemonIsVisible: boolean;
  startRoundButtonIsVisible: boolean;
  pokemonChoicesIsVisible: boolean;
};

export const useRoundVisibility = (gameState: GameState): roundVisibility => {
  return {
    pokemonIsVisible: gameState !== GameState.INITIAL,
    startRoundButtonIsVisible: gameState !== GameState.ROUND_STARTED,
    pokemonChoicesIsVisible: gameState === GameState.ROUND_STARTED,
  };
};
