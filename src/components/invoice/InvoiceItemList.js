import React, { useState } from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceItemList = () => {
  const [invoices, setInvoices] = useState([
    {
      id: "RT3080",
      due: "19 Aug 2020",
      name: "Jensen Huang",
      amount: "1,800.90",
      status: "Paid",
    },
    {
      id: "AC3940",
      due: "12 Nov 2020",
      name: "Leonard Ikeh",
      amount: "1,200.90",
      status: "Paid",
    },
    {
      id: "LL1280",
      due: "19 Sep 2020",
      name: "Wayne Rooney",
      amount: "900.90",
      status: "Pending",
    },
    {
      id: "VT8653",
      due: "20 Aug 2020",
      name: "Juan Mata",
      amount: "300.90",
      status: "Draft",
    },
  ]);
  return (
    <ul>
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} />
      ))}
    </ul>
  );
};
export default InvoiceItemList;
