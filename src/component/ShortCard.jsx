import React from "react";
import AddButton from "./AddButton";

export default function ShortCard() {
  return (
    <div>
      <div className="max-w-[400px] mx-auto m-2 rounded-xl overflow-hidden shadow-gray-400 shadow-lg">
        <div className="flex justify-between items-center p-2">
          <img
            className="max-w-[100px] max-h-[100px] rounded-xl"
            src="assets/food/prawn.jpg"
            alt="food"
          />
          <div className="flex w-full px-2 flex-col justify-between">
            <div className="px-2">Veg loaded Burger</div>
            <div className="flex justify-between items-center py-0.5">
              <div className="px-1 text-xl flex justify-center items-center">
                <div className="w-6">
                  <img src="assets/veg.png" alt="veg/non-veg" srcset="" />
                </div>
                <p className="px-1">&#8377;209</p>
              </div>
              <AddButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
