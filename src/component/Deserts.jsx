import React, { useEffect, useState, useContext } from "react";
import Divider from "./Divider";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import AppTopBar from "./App-TopBar";
import { ProductContext } from "../contexts/productContext";

export default function HomeSpecial() {
  const [foodData, setFoodData] = useState([]);
  const { desserts } = useContext(ProductContext);

  useEffect(() => {
    setFoodData(desserts);
  }, [desserts]);

  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider msg="Our Speciallity" />
      <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {foodData.length &&
            foodData.map((val) => {
              return <FoodCard val={val} key={val.id} />;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
