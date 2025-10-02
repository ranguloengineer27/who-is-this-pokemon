import React from "react";
import GameDifficulty from "../GameDifficulty/GameDifficulty";
import PokemonContainer from "../PokemonContainer/PokemonContainer";
import GameRoundContainer from "../GameRoundContainer/GameRoundContainer";

const MainGameContainer = () => {
  return (
    <div>
      <h1>Who's the Pokemon?!</h1>
      <PokemonContainer />
      <GameRoundContainer />
      <GameDifficulty />
    </div>
  );
};

export default MainGameContainer;
