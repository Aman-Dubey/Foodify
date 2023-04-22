import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const backBtnClickHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-20 rounded-xl border-gray-300 border-b-2 ">
        <div className="flex items-center justify-start p-3 md:px-6 md:py-3">
          <Button
            icon="back.png"
            size_s="8"
            size_w="10"
            click={backBtnClickHandler}
          />
          <div className="text-[#4A5662] text-xl p-4">Place Order</div>
        </div>
        <div className="py-2 px-3 md:px-6">
          <Button icon="notification.png" size_s="8" size_w="10" />
        </div>
      </div>
    </div>
  );
}
