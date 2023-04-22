import { createContext, useEffect, useState } from "react";
import { data } from "../data/data";

export const ProductContext = createContext({
  special: [],
  main: [],
  desserts: [],
  beverages: [],
});

export const ProductProvider = ({ children }) => {
  const [special, setSpecial] = useState([]);
  const [main, setMain] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    const specials = [],
      mains = [],
      dessertss = [],
      beveragess = [];
    data.map((value) => {
      if (value.category === "special") {
        specials.push(value);
      } else if (value.category === "main") {
        mains.push(value);
      } else if (value.category === "dessert") {
        dessertss.push(value);
      } else if (value.category === "beverage") {
        beveragess.push(value);
      }
    });
    setSpecial(specials);
    setMain(mains);
    setDesserts(dessertss);
    setBeverages(beveragess);
  }, []);

  const value = { special, main, desserts, beverages };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
