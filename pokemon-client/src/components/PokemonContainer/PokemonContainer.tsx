import { useQuery } from "@tanstack/react-query";
import usePokemon from "../../api/store";
import { usePokemonRandomChoice } from "../../hooks/usePokemonRandomChoice";
import CSS from "./Pokemon.module.scss";
import { fetchPokemonListOrigin } from "../../api/queries";

const Pokemon = () => {
  usePokemonRandomChoice();
  const currentPokemonName = usePokemon.use.currentPokemon()?.name ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", currentPokemonName],
    queryFn: () =>
      fetchPokemonListOrigin(
        `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`
      ),
  });

  if (isLoading) return <p>Loading...</p>;

  console.log("POKEMON DATA :::", data);

  return (
    <div className={CSS.Container}>
      <img src={data?.sprites?.front_default} />
    </div>
  );
};

export default Pokemon;
