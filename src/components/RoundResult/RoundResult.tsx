import usePokemon from "../../api/store";
import { GameState, RoundResult as RoundResultType } from "../../api/types";

const RoundResult = () => {
  const roundResult = usePokemon.use.roundResult();

  const message =
    roundResult === RoundResultType.WIN ? (
      <h1>You won !</h1>
    ) : (
      <h1>Sorry, you'll make it next time!</h1>
    );

  return <>{message}</>;
};

export default RoundResult;
