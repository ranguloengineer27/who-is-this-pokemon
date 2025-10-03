import { type FC } from "react";
import usePokemon from "../../api/store";
import { RadioGroup } from "@chakra-ui/react";

type Props = {
  pokemonChosen: string;
  setPokemonChosen: (answer: string) => void;
};

const PokemonChoices: FC<Props> = ({ pokemonChosen, setPokemonChosen }) => {
  const pokemonOptions = usePokemon.use.options();

  return (
    <RadioGroup.Root
      value={pokemonChosen ? pokemonChosen : pokemonOptions[0]?.name}
      onValueChange={(e) => setPokemonChosen(e.value ?? "")}
    >
      <div className="flex justify-content-evenly mb-2">
        {pokemonOptions.map((option) => (
          <RadioGroup.Item
            value={option.name}
            key={option.name}
            className="cursor-pointer"
          >
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText>{option.name}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </div>
    </RadioGroup.Root>
  );
};

export default PokemonChoices;
