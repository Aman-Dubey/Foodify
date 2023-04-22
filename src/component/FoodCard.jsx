import React, { useContext, useEffect, useState } from "react";
import AddButton from "./AddButton";

import { CartContext } from "../contexts/cartContext";
import AddSubButton from "./AddSubButton";

export default function FoodCard({ val }) {
  const { addItemToCart, removeItemFromCart, cartItems } =
    useContext(CartContext);
  const { name, price, tag, image, id } = val;
  const [count, setCount] = useState(0);

  const addButtonClickHandler = () => {
    addItemToCart(val);
  };

  const removeButtonClickHandler = () => {
    removeItemFromCart(val);
  };

  useEffect(() => {
    let itemCount = cartItems.reduce(
      (total, cartItem) =>
        cartItem.id === id ? total + cartItem.quantity : total + 0,
      0
    );
    setCount(itemCount);
  }, [cartItems, id]);

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
            {count ? (
              <AddSubButton
                quantity={count}
                increase={addButtonClickHandler}
                decrease={removeButtonClickHandler}
              />
            ) : (
              <AddButton click={addButtonClickHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
