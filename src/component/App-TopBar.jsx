import React, { useEffect, useState, useContext } from "react";
import Button from "./Button";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { TabContext } from "../contexts/tabContext";
export default function AppTopBar() {
  const { currentTab, updateCurrentTab } = useContext(TabContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedTab(currentTab);
  }, [currentTab]);

  const tabMenuClickHandler = (e) => {
    switch (e.target.innerText) {
      case "Special":
        setSelectedTab(0);
        updateCurrentTab(0);
        navigate("/");
        break;
      case "Main":
        setSelectedTab(1);
        updateCurrentTab(1);
        navigate("/home-menu");
        break;
      case "Desserts":
        setSelectedTab(2);
        updateCurrentTab(2);
        navigate("/deserts");
        break;
      case "Beverages":
        setSelectedTab(3);
        updateCurrentTab(3);
        navigate("/beverages");
        break;
      default:
        setSelectedTab(0);
        updateCurrentTab(0);
        navigate("/");
        break;
    }
  };

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
          visible={selectedTab === 0}
          click={tabMenuClickHandler}
        />

        <Menu
          value="Main"
          visible={selectedTab === 1}
          click={tabMenuClickHandler}
        />

        <Menu
          value="Desserts"
          visible={selectedTab === 2}
          click={tabMenuClickHandler}
        />

        <Menu
          value="Beverages"
          visible={selectedTab === 3}
          click={tabMenuClickHandler}
        />
      </div>
    </div>
  );
}
