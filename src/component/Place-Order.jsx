import React from "react";
import Header from "./Header";
import OrderCardBox from "./OrderCardBox";
import PlaceOrderFooter from "./PlaceOrder-Footer";
import Divider from "./Divider";

export default function PlaceOrder() {
  return (
    <div className="mb-28">
      <Header />
      <Divider />
      <OrderCardBox />
      <Divider />
      <OrderCardBox />
      <PlaceOrderFooter />
    </div>
  );
}
