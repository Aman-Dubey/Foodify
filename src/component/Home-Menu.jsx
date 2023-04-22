import React, { useState, useEffect, useContext } from "react";
import AppTopBar from "./App-TopBar";
import Divider from "./Divider";
import Footer from "./Footer";
import ShortCard from "./ShortCard";
import { ProductContext } from "../contexts/productContext";

export default function HomeMenu() {
  const [foodData, setFoodData] = useState([]);
  const { main } = useContext(ProductContext);

  useEffect(() => {
    setFoodData(main);
  }, [main]);

  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider msg="Asia bowls" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {foodData.length &&
          foodData.map((val) =>
            val.type === "asia" ? <ShortCard item={val} key={val.id} /> : null
          )}
      </div>

      <Divider msg="Japanese bowls" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {foodData.length &&
          foodData.map((val) =>
            val.type === "non-asia" ? (
              <ShortCard item={val} key={val.id} />
            ) : null
          )}
      </div>

      <Footer />
    </div>
  );
}
