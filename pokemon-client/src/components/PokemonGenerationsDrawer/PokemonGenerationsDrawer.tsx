import { Button, CloseButton, Drawer, HStack, Portal } from "@chakra-ui/react";
import PokemonGenerationsWrapper from "../PokemonGenerationsWrapper/PokemonGenerationsWrapper";
import CSS from "./PokemonGenerationsDrawer.module.scss";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const PokemonGenerationsDrawer = ({ open, onOpenChange }: Props) => {
  return (
    <HStack wrap="wrap">
      <Drawer.Root
        placement="end"
        open={open}
        onOpenChange={(details) => onOpenChange(details.open)}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content
              roundedTop="l3"
              roundedBottom="l3"
              className={CSS.wrapper}
            >
              <Drawer.Header>
                <Drawer.Title>Select generations of pokemons</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <div>
                  Please select the generations of pokemons you want to play
                  with
                </div>
                <PokemonGenerationsWrapper />
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger asChild>
                  <Button variant="outline" className={CSS.cancelButton}>
                    Close
                  </Button>
                </Drawer.ActionTrigger>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
};

export default PokemonGenerationsDrawer;
