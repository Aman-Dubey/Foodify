import React from "react";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="w-full h-16 bg-[#d5dada] fixed bottom-0">
      <div className="flex justify-around items-center p-2">
        <Button icon="thunder.png" size_w="10" size_s="8" />
        <Button icon="book.png" size_w="10" size_s="8" />
        <Button icon="bag.png" size_w="10" size_s="8" />
      </div>
    </footer>
  );
}
