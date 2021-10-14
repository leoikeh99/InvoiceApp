import React, { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";

const InvoiceItemList = () => {
  const invoiceContext = useContext(InvoiceContext);
  const { invoices } = invoiceContext;

  return (
    <ul>
      {invoices.map((invoice) => (
        <InvoiceItem invoice={invoice} key={invoice.id} />
      ))}
    </ul>
  );
};
export default InvoiceItemList;
