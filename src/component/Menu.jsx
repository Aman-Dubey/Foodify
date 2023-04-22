import React from "react";

export default function Menu({ value, visible, click }) {
  return (
    <div>
      <div className="group flex flex-col justify-center items-center space-y-1 w-auto">
        <div onClick={click}>
          <div
            className={`${
              visible ? "text-cyan-500" : "text-gray-500"
            } font-semibold`}
          >
            {value}
          </div>
        </div>
        <span
          className={`border-b-2 p-1 border-cyan-500 w-full ${
            visible ? "visible" : "invisible"
          }`}
        />
      </div>
    </div>
  );
}
