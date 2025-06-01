import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/chakra-ui/provider.tsx";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/chakra-ui/color-mode.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="dark">
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
