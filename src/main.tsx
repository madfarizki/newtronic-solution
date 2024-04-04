import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/fonts/main.css";
import { ThemeProvider } from "styled-components";
import Colors from "@/consts/colors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: {
          ...Colors,
        },
      }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
