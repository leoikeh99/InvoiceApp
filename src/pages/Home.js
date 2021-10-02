import React, { useContext, useState } from "react";
import CreateInvoiceForm from "../components/forms/CreateInvoiceForm";
import Header from "../components/home/Header";
import FilteredInvoices from "../components/invoice/FilteredInvoices";
import InvoiceItemList from "../components/invoice/InvoiceItemList";
import { InvoiceContext } from "../context/InvoiceContext";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const invoiceContext = useContext(InvoiceContext);
  const { filter } = invoiceContext;

  return (
    <div className="px-3">
      <Header setShow={setShow} show={show} setShowForm={setShowForm} />
      {!filter ? <InvoiceItemList /> : <FilteredInvoices />}
      {showForm && (
        <CreateInvoiceForm showForm={showForm} setShowForm={setShowForm} />
      )}
    </div>
  );
};
export default Home;
