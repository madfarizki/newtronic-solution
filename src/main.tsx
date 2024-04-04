import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./assets/fonts/main.css";
import { ThemeProvider } from "styled-components";
import Colors from "@/consts/colors";
import { Provider } from "./utils/context/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: {
          ...Colors,
        },
      }}>
      <Provider>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
