import { useQuery } from "@tanstack/react-query";
import usePokemon from "../../api/store";
import { usePokemonRandomChoice } from "../../hooks/usePokemonRandomChoice";
import CSS from "./Pokemon.module.scss";
import { fetchPokemonListOrigin } from "../../api/queries";
import cn from "classnames";
import { GameState } from "../../api/types";
import { Spinner } from "@chakra-ui/react";

const getIfPokemonImageIsHidden = (gameState: GameState) => {
  return gameState === GameState.ROUND_STARTED;
};

const Pokemon = () => {
  usePokemonRandomChoice();
  const currentPokemonName = usePokemon.use.currentPokemon()?.name ?? "";
  const gameState = usePokemon.use.gameState();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", currentPokemonName],
    queryFn: () =>
      fetchPokemonListOrigin(
        `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`
      ),
  });

  return (
    <div className={CSS.Container}>
      {isLoading ? (
        <Spinner size="md" />
      ) : (
        <img
          src={data?.sprites?.front_default}
          className={cn(CSS.Image, {
            [CSS.ImageDark]: getIfPokemonImageIsHidden(gameState),
          })}
        />
      )}
    </div>
  );
};

export default Pokemon;
