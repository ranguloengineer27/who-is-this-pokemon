import usePokemon from "../../api/store";
import { GameState } from "../../api/types";

export const getIsPokemonVisible = () => {
  const gameState = usePokemon.use.gameState();
  return gameState !== GameState.INITIAL;
};
