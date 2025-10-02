import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { queryClient } from "./api/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MainGameContainer from "./components/MainGameContainer/MainGameContainer";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <MainGameContainer />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
