import React from "react";
import Divider from "./Divider";
import FoodCard from "./FoodCard";
import Footer from "./Footer";
import Rectangle from "./Rectangle";
import AppTopBar from "./App-TopBar";

export default function HomeSpecial() {
  return (
    <div>
      <AppTopBar />
      <Rectangle />
      <Divider />
      <div className="flex justify-center items-center p-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
