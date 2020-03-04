import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transactions => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4></h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  );
};
