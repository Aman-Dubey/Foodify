import React, { useState, useEffect } from "react";
import AppTopBar from "./App-TopBar";
import Divider from "./Divider";
import Footer from "./Footer";
import ShortCard from "./ShortCard";
import { data } from "../data/data";

export default function HomeMenu() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const filteredData = [];
    data.map((val) => {
      if (val.category === "main") {
        filteredData.push(val);
      }
    });
    setFoodData(filteredData);
  }, []);

  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider msg="Asia bowls" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {foodData.length &&
          foodData.map((val) => {
            if (val.type === "asia")
              return (
                <ShortCard
                  key={val.id}
                  name={val.name}
                  price={val.price}
                  tag={val.tag}
                  image={val.image}
                />
              );
          })}
      </div>

      <Divider msg="Japanese bowls" />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {foodData.length &&
          foodData.map((val) => {
            if (val.type === "non-asia")
              return (
                <ShortCard
                  key={val.id}
                  name={val.name}
                  price={val.price}
                  tag={val.tag}
                  image={val.image}
                />
              );
          })}
      </div>

      <Footer />
    </div>
  );
}
