import React from "react";

export default function Rectangle() {
  return (
    <div className="flex flex-col justify-center overflow-hidden items-center">
      <div className="lg:translate-y-40 md:translate-y-36 translate-y-32 px-12 lg:px-72 md:px-44 z-50 w-full text-white">
        <div className="w-56 text-2xl mx-4">Welcome to Sacred Earth Cafe</div>
      </div>
      <div className="max-w-4xl mx-6 md:h-48 h-36 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-lg" src="/assets/kitchen1.jpg" alt="" />
      </div>
    </div>
  );
}
