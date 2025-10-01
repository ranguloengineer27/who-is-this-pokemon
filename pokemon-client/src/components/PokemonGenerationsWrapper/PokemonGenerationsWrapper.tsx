import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByGeneration } from "../../api";
import PokemonGeneration from "../PokemonGeneration/PokemonGeneration";
import { useState } from "react";

type Generation = {
  name: string;
  url: string;
};

type QueryResponse = {
  count: number;
  results: Generation[];
};

const formatLabel = (label: string) => {
  return label.replace("-", " ").toUpperCase();
};

const DEFAULT_GENERATION = ["https://pokeapi.co/api/v2/generation/1/"];

const PokemonGenerationsWrapper = () => {
  const [pokemonGeneration, setPokemonGeneration] =
    useState<Array<string>>(DEFAULT_GENERATION);
  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: ["POKEMON_GENERATIONS"],
    queryFn: () => fetchPokemonByGeneration(null),
  });

  if (isLoading) return <span>LOADING.....</span>;

  return (
    <div>
      {data?.results?.map((gen) => (
        <PokemonGeneration
          name={gen.name}
          value={gen.url}
          label={formatLabel(gen.name)}
          onClick={(e) => {
            setPokemonGeneration((prev) => [...prev, e.target.value]);
          }}
        />
      ))}
    </div>
  );
};

export default PokemonGenerationsWrapper;
