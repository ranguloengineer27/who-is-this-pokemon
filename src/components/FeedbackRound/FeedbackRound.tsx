import usePokemon from "../../api/store";
import { GameState } from "../../api/types";
import RoundResult from "../RoundResult/RoundResult";

const FeedbackRound = () => {
  const gameState = usePokemon.use.gameState();

  if (gameState !== GameState.ROUND_ENDED) return <h1>Who's the Pokemon?!</h1>;

  return <RoundResult />;
};

export default FeedbackRound;
