import { type ChangeEvent, type FC } from "react";
import CSS from "./PokemonGeneration.module.scss";

type Props = {
  name: string;
  value: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

console.log("CSS :::", CSS);

const PokemonGeneration: FC<Props> = ({
  name,
  value,
  label,
  checked = false,
  onChange,
}) => {
  return (
    <div className={CSS.pokemonGenerationContainer}>
      <label>
        {label}
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default PokemonGeneration;
