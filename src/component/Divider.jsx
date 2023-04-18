import React from "react";

export default function Divider() {
  return (
    <div>
      <div className="flex justify-between items-center max-w-6xl mx-auto pt-4">
        <div className="ml-6 w-56">Today's Special</div>
        <div className="border-b-2 border-[#4A5662] w-full" />
        <div className="ml-4 mr-6">
          <img
            src="assets/up.svg"
            className="w-8 fill-red-600"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
