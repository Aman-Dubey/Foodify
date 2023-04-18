import React from "react";
import AppTopBar from "./App-TopBar";
import Divider from "./Divider";
import Footer from "./Footer";
import ShortCard from "./ShortCard";

export default function HomeMenu() {
  return (
    <div className="mb-20">
      <AppTopBar />
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>

      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
        <ShortCard />
      </div>

      <Footer />
    </div>
  );
}
