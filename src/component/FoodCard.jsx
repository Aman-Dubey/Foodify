import React from "react";
import AddButton from "./AddButton";

export default function FoodCard({ name, price, tag, image }) {
  return (
    <div>
      <div className="max-w-[250px] rounded-lg overflow-hidden shadow-gray-400 shadow-lg hover:translate-y-0.5 duration-200 transition-all">
        <img className="w-full md:h-56 h-48" src={image} alt="food" />
        <div className="flex flex-col p-2">
          <div className="flex justify-start">
            <div className="w-6">
              <img
                src={tag === "veg" ? "assets/veg.png" : "assets/non-veg.png"}
                alt="veg/non-veg"
              />
            </div>
            <div className="px-2">{name}</div>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <div className="px-1 text-xl">
              <p>&#8377;{Math.round(price)}</p>
            </div>
            <AddButton />
          </div>
        </div>
      </div>
    </div>
  );
}
