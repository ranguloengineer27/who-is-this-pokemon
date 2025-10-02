import React, { useState } from "react";
import { GameState, RoundResult } from "../../api/types";
import { Button } from "@chakra-ui/react";
import usePokemon from "../../api/store";
import PokemonChoices from "../PokemonChoices/PokemonChoices";

const GameStateMap: Record<GameState, { component: () => React.JSX.Element }> =
  {
    [GameState.INITIAL]: {
      component: () => {
        const updateGameState = usePokemon.use.updateGameState();
        return (
          <Button onClick={() => updateGameState(GameState.ROUND_STARTED)}>
            Start Game
          </Button>
        );
      },
    },
    [GameState.ROUND_STARTED]: {
      component: () => {
        const [pokemonChosen, setPokemonChosen] = useState<string>("");
        const correctPokemonAnswer = usePokemon.use.currentPokemon();
        const updateRoundResult = usePokemon.use.updateRoundResult();

        return (
          <>
            <PokemonChoices
              pokemonChosen={pokemonChosen}
              setPokemonChosen={setPokemonChosen}
            />
            <Button
              onClick={() => {
                const roundResult =
                  correctPokemonAnswer &&
                  pokemonChosen &&
                  pokemonChosen === correctPokemonAnswer.name
                    ? RoundResult.WIN
                    : RoundResult.LOSE;

                updateRoundResult(roundResult);
              }}
            >
              Send
            </Button>
          </>
        );
      },
    },
  };

const GameRoundContainer = () => {
  const gameState = usePokemon.use.gameState();
  const Component = GameStateMap[gameState]?.component ?? <></>;

  return (
    <div>
      <Component />
    </div>
  );
};

export default GameRoundContainer;
