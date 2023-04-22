import { createContext, useState } from "react";

export const TabContext = createContext({
  currentTab: 0,
  updateCurrentTab: () => {},
});

export const TabProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const updateCurrentTab = (currentTab) => {
    setCurrentTab(currentTab);
  };

  const value = { currentTab, updateCurrentTab };
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
