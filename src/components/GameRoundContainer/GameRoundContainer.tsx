import { GameState } from "../../api/types";
import { Button } from "@chakra-ui/react";
import usePokemon from "../../api/store";
import PokemonChoicesContainer from "../PokemonChoicesContainer/PokemonChoicesContainer";
import Pokemon from "../Pokemon/Pokemon";
import FeedbackRound from "../FeedbackRound/FeedbackRound";
import cn from "classnames";
import CSS from "./GameRoundContainer.module.scss";
import { useRoundVisibility } from "../../hooks/useRoundVisibility";

const GameRoundContainer = () => {
  const gameState = usePokemon.use.gameState();
  const { pokemonChoicesIsVisible, pokemonIsVisible } =
    useRoundVisibility(gameState);
  const updateGameState = usePokemon.use.updateGameState();
  const controlsComponent = pokemonChoicesIsVisible ? (
    <PokemonChoicesContainer />
  ) : (
    <Button
      className="mt-2"
      onClick={() => updateGameState(GameState.ROUND_STARTED)}
    >
      Start new round
    </Button>
  );

  return (
    <div className={CSS.GameRoundGrid}>
      <div className={CSS.FeedbackSlot}>
        <FeedbackRound />
      </div>

      <div
        className={cn(CSS.PokemonSlot, {
          "visibility-hidden": !pokemonIsVisible,
        })}
      >
        <Pokemon />
      </div>

      <div className={CSS.ControlsSlot}>
        <div className={CSS.ControlsSlot__Inner}>{controlsComponent}</div>
      </div>
    </div>
  );
};

export default GameRoundContainer;
