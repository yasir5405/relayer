import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="sumptuo-ui-theme">
        <App />
        <Toaster
          richColors
          toastOptions={{
            classNames: {
              toast:
                "bg-background text-foreground border border-border shadow-lg",
              success: "bg-primary text-primary-foreground",
              error: "bg-destructive text-destructive-foreground",
              warning: "bg-yellow-500 text-white",
              info: "bg-blue-500 text-white",
            },
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
