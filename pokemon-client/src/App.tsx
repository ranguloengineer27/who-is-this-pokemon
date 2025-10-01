import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import PokemonGenerationsWrapper from "./components/PokemonGenerationsWrapper/PokemonGenerationsWrapper";
import { queryClient } from "./api/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonGenerationsWrapper />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
