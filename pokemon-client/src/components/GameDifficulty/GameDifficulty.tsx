import { useState } from "react";
import PokemonGenerationsDrawer from "../PokemonGenerationsDrawer/PokemonGenerationsDrawer";
import { Button } from "@chakra-ui/react";
import CSS from "./GameDifficulty.module.scss";
import { usePokemonList } from "../../hooks/usePokemonList";

const GameDifficulty = () => {
  const [isDifficultyDrawerOpen, setIsDifficultyDrawerOpen] = useState(false);
  usePokemonList(!isDifficultyDrawerOpen);

  return (
    <div className={CSS.Container}>
      <Button
        onClick={() => setIsDifficultyDrawerOpen(true)}
        className={CSS.GameDifficultyButton}
      >
        Adjust difficulty
      </Button>
      <PokemonGenerationsDrawer
        open={isDifficultyDrawerOpen}
        onOpenChange={setIsDifficultyDrawerOpen}
      />
    </div>
  );
};

export default GameDifficulty;
