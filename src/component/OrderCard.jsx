import React from "react";
import AddSubButton from "./AddSubButton";

export default function OrderCard() {
  return (
    <div>
      <div className="w-[400px] h-20 p-4 overflow-hidden">
        <div className="flex justify-between items-center h-full p-2">
          <div className="flex justify-start items-center space-x-2">
            <div className="w-6">
              <img src="assets/veg.png" alt="veg/non-veg" srcset="" />
            </div>
            <div className="flex flex-col justify-between items-start space-y-3">
              <div className="px-2 text-sm">Veg loaded Burger</div>
              <div className="px-1 text-sm">
                <p>&#8377;209</p>
              </div>
            </div>
          </div>
          <AddSubButton />
        </div>
      </div>
    </div>
  );
}
