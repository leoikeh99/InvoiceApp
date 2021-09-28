import React, { useContext, useState } from "react";
import check from "../../images/icon-check.svg";
import { InvoiceContext } from "../../context/InvoiceContext";

const StatusFilter = ({ show }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { filter, toggleFilter } = invoiceContext;

  return (
    <ul
      className={`absolute -bottom-30 left-0 w-full bg-bg2 px-6 py-3 text-left shadow-filter rounded-lg z-10 transition-opacity opacity-0 ${
        show && "opacity-100"
      }`}>
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
