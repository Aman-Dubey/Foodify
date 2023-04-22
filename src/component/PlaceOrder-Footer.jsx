import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function PlaceOrderFooter() {
  const { cartCount, addToHistory, cartItems } = useContext(CartContext);

  const placeYourOrder = () => {
    if (cartCount) {
      addToHistory(cartItems);
    }
  };

  return (
    <div
      className="flex justify-center items-center px-2"
      onClick={placeYourOrder}
    >
      <footer className="w-[90%] mx-auto h-16 rounded-2xl p-2 m-3 bg-gradient-to-r from-[#459EAF] to-[#007991] fixed bottom-2 hover:translate-y-1 transition-all duration-200">
        <div className="flex justify-between items-center p-2">
          <div className="px-2 text-white md:px-12">{`${
            cartCount ? cartCount : 0
          } ${cartCount < 2 ? "Item" : "Items"}`}</div>
          <div className="flex justify-center items-center space-x-2 px-3 md:px-12 ">
            <div className="text-white font-semibold">Place Order</div>
            <div className="flex justify-center items-center p-1 bg-[#108ca5] rounded-full">
              <img src="assets/right.png" className="w-6" alt="right" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
