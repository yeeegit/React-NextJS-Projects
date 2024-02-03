import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {CartProvider}  from "./context/CartContext";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);