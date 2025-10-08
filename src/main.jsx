import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PortfolioFR from "./portfolio-fr.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioFR />
  </React.StrictMode>
);
