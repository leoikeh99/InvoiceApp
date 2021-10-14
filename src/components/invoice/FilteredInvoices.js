import React, { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import InvoiceItem from "./InvoiceItem";

const FilteredInvoices = () => {
  const invoiceContext = useContext(InvoiceContext);
  const { filter, invoices } = invoiceContext;
  return (
    <>
      {invoices
        .filter((invoice) => filter === invoice.status)
        .map((invoice) => (
          <InvoiceItem invoice={invoice} key={invoice.id} />
        ))}
    </>
  );
};
export default FilteredInvoices;
