import React, { useEffect, useState } from "react";
import { GameState } from "../../api/types";
import { Button } from "@chakra-ui/react";
import usePokemon from "../../api/store";
import PokemonChoicesContainer from "../PokemonChoicesContainer/PokemonChoicesContainer";
import Pokemon from "../PokemonContainer/PokemonContainer";
import RoundResult from "../RoundResult/RoundResult";

const ButtonStartRound = () => {
  const updateGameState = usePokemon.use.updateGameState();
  return (
    <Button
      className="mt-2"
      onClick={() => updateGameState(GameState.ROUND_STARTED)}
    >
      Start new round
    </Button>
  );
};

type ComponentsVisibilityState = {
  pokemonIsVisible: boolean;
  startRoundButtonIsVisible: boolean;
  pokemonChoicesIsVisible: boolean;
  roundResultIsVisible: boolean;
};

const DEFAULT_VISIBILITY_STATE = {
  pokemonIsVisible: false,
  startRoundButtonIsVisible: true,
  pokemonChoicesIsVisible: false,
  roundResultIsVisible: false,
};

const useComponentsVisibility = (): ComponentsVisibilityState => {
  const gameState = usePokemon.use.gameState();
  const [componentsVisibility, setComponentsVisibility] =
    useState<ComponentsVisibilityState>(DEFAULT_VISIBILITY_STATE);

  useEffect(() => {
    if (!gameState) return;

    if (gameState === GameState.INITIAL) {
      setComponentsVisibility({
        startRoundButtonIsVisible: true,
        pokemonIsVisible: false,
        pokemonChoicesIsVisible: false,
        roundResultIsVisible: false,
      });
      return;
    }

    if (gameState === GameState.ROUND_STARTED) {
      setComponentsVisibility({
        pokemonIsVisible: true,
        startRoundButtonIsVisible: false,
        pokemonChoicesIsVisible: true,
        roundResultIsVisible: false,
      });
      return;
    }

    if (gameState === GameState.ROUND_ENDED) {
      setComponentsVisibility({
        pokemonIsVisible: true,
        pokemonChoicesIsVisible: false,
        startRoundButtonIsVisible: true,
        roundResultIsVisible: true,
      });
    }
  }, [gameState]);

  return componentsVisibility;
};

const GameRoundContainer = () => {
  const {
    pokemonChoicesIsVisible,
    pokemonIsVisible,
    startRoundButtonIsVisible,
    roundResultIsVisible,
  } = useComponentsVisibility();
  return (
    <div>
      <div {...(pokemonIsVisible ? {} : { className: "display-none" })}>
        <Pokemon />
      </div>

      <div {...(pokemonChoicesIsVisible ? {} : { className: "display-none" })}>
        <PokemonChoicesContainer />
      </div>

      <div {...(roundResultIsVisible ? {} : { className: "display-none" })}>
        <RoundResult />
      </div>

      <div
        {...(startRoundButtonIsVisible ? {} : { className: "display-none" })}
      >
        <ButtonStartRound />
      </div>

      {/* <Component /> */}
    </div>
  );
};

export default GameRoundContainer;
