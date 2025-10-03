import GameDifficulty from "../GameDifficulty/GameDifficulty";
import GameRoundContainer from "../GameRoundContainer/GameRoundContainer";

const MainGameContainer = () => {
  return (
    <div>
      <GameRoundContainer />
      <GameDifficulty />
    </div>
  );
};

export default MainGameContainer;
