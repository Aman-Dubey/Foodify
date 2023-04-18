import React from "react";

export default function Button({ icon, size_w, size_s }) {
  return (
    <div>
      <div
        className={`flex flex-row justify-center items-center s:p-2 w-${size_w} h-${size_w} p-2 s:w-${size_s} s:h-${size_s} rounded-xl bg-slate-100 shadow-md shadow-[#DEDEDE] hover:translate-y-0.5 hover:shadow-xl`}
      >
        <img src={`assets/${icon}`} alt="icon" />
      </div>
    </div>
  );
}
