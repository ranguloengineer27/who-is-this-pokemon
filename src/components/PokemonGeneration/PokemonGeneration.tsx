import { type ChangeEvent, type FC } from "react";
import CSS from "./PokemonGeneration.module.scss";
import { Checkbox } from "@chakra-ui/react";
import cn from "classnames";

type Props = {
  name: string;
  value: string;
  label: string;
  onChange: () => void;
  checked: boolean;
};

const PokemonGeneration: FC<Props> = ({
  name,
  value,
  label,
  checked = false,
  onChange,
}) => {
  return (
    <div className={cn(CSS.pokemonGenerationContainer, "mt-2")}>
      <Checkbox.Root
        name={name}
        value={value}
        checked={checked}
        onCheckedChange={() => onChange()}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>{label}</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
};

export default PokemonGeneration;
