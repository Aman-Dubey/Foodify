import React from "react";

export default function Menu({ value, color, visible }) {
  return (
    <div>
      <div className="group flex flex-col justify-center items-center space-y-1 w-auto">
        <div className={`text-[${color}] font-semibold`}>{value}</div>
        <span
          className={`border-b-2 p-1 border-[${color}] w-full ${visible}`}
        />
      </div>
    </div>
  );
}
