import GameDifficulty from "../GameDifficulty/GameDifficulty";
import GameRoundContainer from "../GameRoundContainer/GameRoundContainer";

const MainGameContainer = () => {
  return (
    <div>
      <h1>Who's the Pokemon?!</h1>
      <GameRoundContainer />
      <GameDifficulty />
    </div>
  );
};

export default MainGameContainer;
