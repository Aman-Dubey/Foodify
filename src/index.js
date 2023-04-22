import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./contexts/cartContext";
import { ProductProvider } from "./contexts/productContext";
import { TabProvider } from "./contexts/tabContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <TabProvider>
          <App />
        </TabProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
