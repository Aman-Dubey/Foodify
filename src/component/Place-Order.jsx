import React from "react";
import Header from "./Header";
import OrderCardBox from "./OrderCardBox";
import PlaceOrderFooter from "./PlaceOrder-Footer";
import Divider from "./Divider";
import HistoryBox from "./HistoryBox";

export default function PlaceOrder() {
  return (
    <div className="mb-28">
      <Header />
      <Divider msg="Current Order" />
      <OrderCardBox historyOn={0} />
      <Divider msg="Previous Orders" />
      <HistoryBox historyOn={1} />
      <PlaceOrderFooter />
    </div>
  );
}
