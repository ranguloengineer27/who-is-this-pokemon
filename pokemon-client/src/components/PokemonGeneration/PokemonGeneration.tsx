import { type ChangeEvent, type FC } from "react";
import CSS from "./PokemonGeneration.module.scss";

type Props = {
  name: string;
  value: string;
  label: string;
  onClick: (event: ChangeEvent<HTMLInputElement>) => void;
};

console.log("CSS :::", CSS);

const PokemonGeneration: FC<Props> = ({ name, value, label }) => {
  return (
    <div className={CSS.pokemonGenerationContainer}>
      <label>
        {label}
        <input type="checkbox" name={name} value={value} />
      </label>
    </div>
  );
};

export default PokemonGeneration;
