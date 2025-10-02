import React from "react";
import { GameState } from "../../api/types";
import { Button } from "@chakra-ui/react";
import usePokemon from "../../api/store";

const GameStateMap: Record<GameState, { component: () => React.JSX.Element }> =
  {
    [GameState.INITIAL]: {
      component: () => {
        const updateGameState = usePokemon.use.updateGameState();
        return (
          <Button onClick={() => updateGameState(GameState.ROUND_START)}>
            Start Game
          </Button>
        );
      },
    },
    [GameState.ROUND_START]: {
      component: () => (
        <div>
          <p>Do you need any help?</p>
          <p>
            If you do, we'll provide 4 choices of pokemon, and you have one shot
            to guess it. Otherwise you'll have up to 3 shots to guess!
          </p>
          <Button>Yes I need help</Button>
          <Button>No, I can guess it by myself</Button>
        </div>
      ),
    },
    [GameState.ROUND_STARTED]: {
      component: () => <div>Round in progress</div>,
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
