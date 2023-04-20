import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import AppTopBar from "./App-TopBar";
import { data } from "../data/data";

export default function HomeSpecial() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const filteredData = [];
    data.map((val) => {
      if (val.category === "dessert") {
        filteredData.push(val);
      }
    });
    setFoodData(filteredData);
  }, []);

  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider msg="Our Speciallity" />
      <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {foodData.length &&
            foodData.map((val) => {
              return (
                <FoodCard
                  key={val.id}
                  name={val.name}
                  price={val.price}
                  tag={val.tag}
                  image={val.image}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
