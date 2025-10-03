import { useState } from "react";
import PokemonChoices from "../PokemonChoices/PokemonChoices";
import { Button } from "@chakra-ui/react";
import usePokemon from "../../api/store";
import { GameState, RoundResult } from "../../api/types";

const PokemonChoicesContainer = () => {
  const [pokemonChosen, setPokemonChosen] = useState<string>("");
  const correctPokemonAnswer = usePokemon.use.currentPokemon();
  const updateGameState = usePokemon.use.updateGameState();
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

          updateGameState(GameState.ROUND_ENDED);
          updateRoundResult(roundResult);
        }}
      >
        Send
      </Button>
    </>
  );
};

export default PokemonChoicesContainer;
