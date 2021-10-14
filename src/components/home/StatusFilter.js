import React, { useContext, useEffect } from "react";
import check from "../../images/icon-check.svg";
import { InvoiceContext } from "../../context/InvoiceContext";

const StatusFilter = ({ show }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { filter, toggleFilter } = invoiceContext;

  useEffect(() => {
    const filterView = document.getElementById("filter");
    if (show) {
      filterView.classList.replace("hidden", "block");
    } else {
      filterView.classList.replace("block", "hidden");
    }
  }, [show]);

  return (
    <ul
      className="absolute -bottom-30 mobile1:-right-0 -right-10 w-48 bg-bg2 dark:bg-input-dark px-6 py-3 text-left shadow-filter dark:shadow-none rounded-lg z-10 hidden"
      id="filter">
      <li
        className="py-2 text-xs flex items-center gap-2"
        onClick={() => toggleFilter("Draft")}>
        <span className={`checkbox ${filter === "Draft" ? "active" : ""}`}>
          <img src={check} alt="" />
        </span>
        Draft
      </li>
      <li
        className="py-2 text-xs flex items-center gap-2"
        onClick={() => toggleFilter("Pending")}>
        <span className={`checkbox ${filter === "Pending" ? "active" : ""}`}>
          <img src={check} alt="" />
        </span>
        Pending
      </li>
      <li
        className="py-2 text-xs flex items-center gap-2"
        onClick={() => toggleFilter("Paid")}>
        <span className={`checkbox ${filter === "Paid" ? "active" : ""}`}>
          <img src={check} alt="" />
        </span>
        Paid
      </li>
    </ul>
  );
};
export default StatusFilter;
