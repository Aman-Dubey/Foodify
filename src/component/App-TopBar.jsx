import React from "react";
import Button from "./Button";
import Menu from "./Menu";

export default function AppTopBar() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-10 pt-4 px-2 md:px-4">
      <div className="flex flex-row justify-between items-center mx-4 sm:mx-2">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="w-10 h-10 s:w-[28px] s:h-[28px]">
            <img src="assets/icon.png" alt="logo" />
          </div>
          <div className="font-bold">Sacred Earth Cafe</div>
        </div>
        <div className="flex flex-row justify-between items-center space-x-4">
          <Button icon="cont.png" size_w="11" size_s="8" />
          <Button icon="has.png" size_w="11" size_s="8" />
        </div>
      </div>
      <div className="flex flex-row justify-between rounded-b-2xl border-l-red-400 border-b-2 shadow-lg px-3 py-1 items-center mx-4 sm:mx-2">
        <Menu value="Special" color="#3CBCB4" visible="visible" />
        <Menu value="Main" color="#4A5662" visible="invisible" />
        <Menu value="Deserts" color="#4A5662" visible="invisible" />
        <Menu value="Beverages" color="#4A5662" visible="invisible" />
      </div>
    </div>
  );
}
