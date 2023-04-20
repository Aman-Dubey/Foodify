import React, { useEffect, useState } from "react";
import Button from "./Button";
import Menu from "./Menu";

export default function AppTopBar() {
  const [selectedTab, setSelectedTab] = useState(2);

  const tabMenuClickHandler = (e) => {
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Special":
        setSelectedTab(0);
        break;
      case "Main":
        setSelectedTab(1);
        break;
      case "Desserts":
        setSelectedTab(2);
        break;
      case "Beverages":
        setSelectedTab(3);
        break;
      default:
        setSelectedTab(0);
        break;
    }
  };

  console.log(selectedTab);

  return (
    <div className="flex flex-col max-w-6xl mx-auto space-y-10 pt-4 px-2 md:px-4">
      <div className="flex flex-row justify-between items-center mx-4 sm:mx-2 p-3">
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="w-10 h-10 s:w-[28px] s:h-[28px]">
            <img src="assets/icon.png" alt="logo" />
          </div>
          <div className="font-bold">Sacred Earth Cafe</div>
        </div>
        <div className="flex flex-row justify-between items-center space-x-4">
          <Button icon="cont.png" size_w="10" size_s="8" />
          <Button icon="has.png" size_w="10" size_s="8" />
        </div>
      </div>
      <div className="flex flex-row justify-around rounded-b-2xl border-b-2 shadow-lg px-3 py-1 items-center mx-4 sm:mx-2">
        <Menu
          value="Special"
          color="red"
          visible={selectedTab === 0}
          link="/"
          click={tabMenuClickHandler}
        />
        <Menu
          value="Main"
          color="#2BE6AA"
          visible={selectedTab === 1}
          link="/home-menu"
          click={tabMenuClickHandler}
        />
        <Menu
          value="Desserts"
          color="#2BE6AA"
          visible={selectedTab === 2}
          link="/deserts"
          click={tabMenuClickHandler}
        />
        <Menu
          value="Beverages"
          color="#2BE6AA"
          visible={selectedTab === 3}
          link="/beverages"
          click={tabMenuClickHandler}
        />
      </div>
    </div>
  );
}
