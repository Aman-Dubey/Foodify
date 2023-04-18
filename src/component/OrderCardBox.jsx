import React from "react";
import OrderCard from "./OrderCard";

export default function OrderCardBox() {
  return (
    <div>
      <div className="flex max-w-[400px] md:max-w-[500px] mx-auto flex-col justify-center items-center rounded-2xl shadow-lg shadow-gray-400">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <div className="text-[#76DFE5] text-sm underline flex justify-start w-full p-4">
          Add cooking instruction
        </div>
      </div>
    </div>
  );
}
