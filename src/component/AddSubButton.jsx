import React from "react";

export default function AddSubButton({ quantity, increase, decrease }) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-2 rounded-full shadow-xl bg-[#f6f9f7] hover:translate-y-0.5 transition-all duration-150 shadow-gray-300 hover:shadow-xl ">
        <div
          className="flex rounded-full shadow-md shadow-gray-400 p-[6px]"
          onClick={decrease}
        >
          <img src="assets/minus.png" className="w-4" alt="icon" />
        </div>
        <div className="px-4">{quantity}</div>
        <div
          className="flex rounded-full shadow-md shadow-gray-400 p-[6px]"
          onClick={increase}
        >
          <img src="assets/add.png" className="w-4" alt="icon" />
        </div>
      </div>
    </div>
  );
}
