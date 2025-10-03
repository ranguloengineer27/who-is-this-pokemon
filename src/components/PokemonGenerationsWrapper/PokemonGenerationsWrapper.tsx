import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByGeneration } from "../../api/queries";
import PokemonGeneration from "../PokemonGeneration/PokemonGeneration";
import usePokemon from "../../api/store";
import { manageGenerationsUpdate } from "../../api/controllers";
import type { QueryResponse } from "../../api/types";
import { Spinner } from "@chakra-ui/react";

const formatLabel = (label: string) => {
  return label.replace("-", " ").toUpperCase();
};
const PokemonGenerationsWrapper = () => {
  const generations = usePokemon.use.generations();
  const updateGeneration = usePokemon.use.updateGeneration();

  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: ["POKEMON_GENERATIONS"],
    queryFn: () => fetchPokemonByGeneration(null),
  });

  if (isLoading) return <Spinner size="md" />;

  return (
    <div>
      {data?.results?.map((gen) => (
        <PokemonGeneration
          key={gen.name}
          checked={generations.some(({ url }) => url === gen.url)}
          name={gen.name}
          value={gen.url}
          label={formatLabel(gen.name)}
          onChange={() => {
            updateGeneration(manageGenerationsUpdate(gen, generations));
          }}
        />
      ))}
    </div>
  );
};

export default PokemonGenerationsWrapper;
