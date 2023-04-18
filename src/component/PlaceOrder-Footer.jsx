import React from "react";
import Button from "./Button";

export default function PlaceOrderFooter() {
  return (
    <div className="flex justify-center items-center px-2">
      <footer className="w-[90%] mx-auto h-16 rounded-2xl p-2 m-3 bg-gradient-to-r from-[#459EAF] to-[#007991] fixed bottom-2">
        <div className="flex justify-between items-center p-2">
          <div className="px-2 text-white md:px-12">4 Items</div>
          <div className="flex justify-center items-center space-x-2 px-3 md:px-12 ">
            <div className="text-white font-semibold">Place Order</div>
            <div className="flex justify-center items-center p-1 bg-[#108ca5] rounded-full">
              <img src="assets/right.png" className="w-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}