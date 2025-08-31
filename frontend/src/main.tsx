import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import Stock from "./pages/Stock";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Stock />
    </ThemeProvider>
  </StrictMode>
);
