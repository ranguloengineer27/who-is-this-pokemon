import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByGeneration } from "../../api/queries";
import PokemonGeneration from "../PokemonGeneration/PokemonGeneration";
import usePokemon from "../../api/store";
import { manageGenerationsUpdate } from "../../api/controllers";

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

const PokemonGenerationsWrapper = () => {
  const updateGenerations = usePokemon((state) => state.updateGeneration);
  const generations = usePokemon((state) => state.generations);
  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: ["POKEMON_GENERATIONS"],
    queryFn: () => fetchPokemonByGeneration(null),
  });

  if (isLoading) return <span>LOADING.....</span>;

  console.log("generations:::", generations);

  return (
    <div>
      {data?.results?.map((gen) => (
        <PokemonGeneration
          checked={generations.some(({ url }) => url === gen.url)}
          name={gen.name}
          value={gen.url}
          label={formatLabel(gen.name)}
          onChange={() => {
            updateGenerations(manageGenerationsUpdate(gen, generations));
          }}
        />
      ))}
    </div>
  );
};

export default PokemonGenerationsWrapper;
