import React from "react";
import OrderCard from "./OrderCard";
import { useContext } from "react";

import { CartContext } from "../contexts/cartContext";

export default function OrderCardBox() {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div className="flex max-w-[400px] md:max-w-[500px] mx-auto flex-col justify-center items-center rounded-2xl shadow-lg shadow-gray-300 hover:shadow-gray-400">
        {cartItems.map((item) => (
          <OrderCard key={item.id} cartItem={item} />
        ))}
        <div className="text-[#76DFE5] text-sm underline flex justify-start w-full p-4">
          Add cooking instruction
        </div>
      </div>
    </div>
  );
}
