import React from "react";

export default function AddButton() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-2 rounded-full shadow-xl bg-[#f6f9f7] hover:translate-y-0.5 transition-all duration-150 shadow-gray-300 hover:shadow-xl ">
        <div className="flex rounded-full shadow-lg shadow-gray-400 p-[6px]">
          <img src="assets/add.png" className="w-4" alt="icon" />
        </div>
        <div className="px-2">ADD</div>
      </div>
    </div>
  );
}
