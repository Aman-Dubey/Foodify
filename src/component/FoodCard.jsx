import React from "react";
import AddButton from "./AddButton";

export default function FoodCard() {
  return (
    <div>
      <div className="max-w-[250px] rounded-lg overflow-hidden shadow-gray-400 shadow-lg">
        <img className="w-full" src="assets/food/burger.jpg" alt="food" />
        <div className="flex flex-col p-2">
          <div className="flex justify-start">
            <div className="w-6">
              <img src="assets/veg.png" alt="veg/non-veg" srcset="" />
            </div>
            <div className="px-2">Veg loaded Burger</div>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <div className="px-1 text-xl">
              <p>&#8377;209</p>
            </div>
            <AddButton />
          </div>
        </div>
      </div>
    </div>
  );
}
