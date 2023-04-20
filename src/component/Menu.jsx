import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ value, color, visible, link, click }) {
  return (
    <div>
      <div className="group flex flex-col justify-center items-center space-y-1 w-auto">
        <Link to={link} onClick={click}>
          <div
            className={`${
              visible ? "text-cyan-500" : "text-blue-600"
            } font-semibold`}
          >
            {value}
          </div>
        </Link>
        <span
          className={`border-b-2 p-1 border-cyan-500 w-full ${
            visible ? "visible" : "invisible"
          }`}
        />
      </div>
    </div>
  );
}
