import React, { useContext } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

export default function Footer() {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  const CartBtnClickHandler = () => {
    navigate("/place-order");
  };

  return (
    <footer className="w-full h-16 bg-[#d5dada] fixed bottom-0">
      <div className="flex justify-around items-center p-2">
        <Button icon="thunder.png" size_w="10" size_s="8" />
        <Button icon="book.png" size_w="10" size_s="8" />
        <div
          onClick={CartBtnClickHandler}
          className="relative flex flex-row justify-center items-center w-10 h-10 p-2 s:w-8 s:h-8 rounded-xl bg-slate-100 shadow-md shadow-[#DEDEDE] transition-all duration-150 hover:translate-y-0.5 hover:shadow-xl"
        >
          <img src={`assets/bag.png`} alt="icon" />
          {cartCount !== 0 && (
            <div className="absolute inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {cartCount}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
