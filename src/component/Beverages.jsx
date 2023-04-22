import React, { useEffect, useState, useContext } from "react";
import Divider from "./Divider";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import AppTopBar from "./App-TopBar";
import { ProductContext } from "../contexts/productContext";

export default function HomeSpecial() {
  const [foodData, setFoodData] = useState([]);
  const { beverages } = useContext(ProductContext);

  useEffect(() => {
    setFoodData(beverages);
  }, [beverages]);

  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider msg="Feeling Hot??" />
      <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {foodData.length &&
            foodData.map((val) =>
              val.type === "cold" ? <FoodCard val={val} key={val.id} /> : null
            )}
        </div>
      </div>
      <Divider msg="Feeling Cold??" />
      <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {foodData.length &&
            foodData.map((val) =>
              val.type === "hot" ? <FoodCard val={val} key={val.id} /> : null
            )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
