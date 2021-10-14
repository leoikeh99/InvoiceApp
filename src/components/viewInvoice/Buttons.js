import React, { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";

const Buttons = ({ invoice, setShowForm, setModal }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { editInvoice } = invoiceContext;

  const markAsPaid = () => editInvoice({ ...invoice, status: "Paid" });

  return (
    <div className="mobile2:flex gap-2 hidden">
      <button
        className="btn text-gray4 dark:text-text2-dark bg-purple-light dark:bg-input-dark hover:opacity-75 dark:hover:opacity-100 dark:hover:bg-white dark:hover:text-purple"
        onClick={() => setShowForm(true)}>
        Edit
      </button>
      <button
        to="/"
        className="btn text-white bg-red hover:opacity-75 dark:hover:opacity-100 dark:hover:bg-red-light"
        onClick={() => setModal(invoice.id)}>
        Delete
      </button>
      {invoice.status !== "Paid" && (
        <button
          className="btn text-white bg-purple hover:opacity-75 dark:hover:opacity-100 dark:hover:bg-purple-hover"
          onClick={markAsPaid}>
          Mark as Paid
        </button>
      )}
    </div>
  );
};
export default Buttons;
