import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/chakra-ui/provider.tsx";
import App from "./App.tsx";
import { ColorModeProvider } from "./components/chakra-ui/color-mode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider defaultTheme="dark">
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </Provider>
  </StrictMode>
);
