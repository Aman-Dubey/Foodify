import React from "react";
import { useContext } from "react";

import { CartContext } from "../contexts/cartContext";
import OrderCard from "./OrderCard";

export default function HistoryBox({ historyOn }) {
  const { history } = useContext(CartContext);
  return (
    <div>
      {history.length !== 0 && (
        <div className="flex max-w-[400px] md:max-w-[500px] mx-auto flex-col justify-center items-center rounded-2xl shadow-lg shadow-gray-300 hover:shadow-gray-400">
          {history
            .slice(0)
            .reverse()
            .map((items, index) => {
              return (
                <>
                  {index !== 0 && (
                    <div className="border border-gray-300 border-b-1 w-[85%]" />
                  )}
                  {items.map((item) => {
                    return (
                      <OrderCard
                        key={item.id}
                        cartItem={item}
                        historyOn={historyOn}
                      />
                    );
                  })}
                </>
              );
            })}

          <div className="text-[#76DFE5] text-sm underline flex justify-start w-full p-4">
            Add cooking instruction
          </div>
        </div>
      )}
    </div>
  );
}
