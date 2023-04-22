import React, { useContext } from "react";
import AddSubButton from "./AddSubButton";
import { CartContext } from "../contexts/cartContext";

export default function OrderCard({ cartItem, historyOn }) {
  const { name, price, tag, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const addButtonClickHandler = () => {
    addItemToCart(cartItem);
  };

  const removeButtonClickHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <div>
      <div className="w-[400px] h-20 p-4 overflow-hidden">
        <div className="flex justify-between items-center h-full p-2">
          <div className="flex justify-start items-center space-x-2">
            <div className="w-6">
              <img
                src={tag === "veg" ? "assets/veg.png" : "assets/non-veg.png"}
                alt="veg/non-veg"
              />
            </div>
            <div className="flex flex-col justify-between items-start space-y-3">
              <div className="px-2 text-sm">{name}</div>
              <div className="px-1 text-sm">
                <p>&#8377;{price}</p>
              </div>
            </div>
          </div>
          {historyOn === 0 ? (
            <AddSubButton
              quantity={quantity}
              increase={addButtonClickHandler}
              decrease={removeButtonClickHandler}
            />
          ) : (
            <>
              <div className="px-6 md:px-4">{quantity}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
