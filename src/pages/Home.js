import React, { useContext, useState } from "react";
import CreateInvoiceForm from "../components/forms/CreateInvoiceForm";
import Header from "../components/home/Header";
import FilteredInvoices from "../components/invoice/FilteredInvoices";
import InvoiceItemList from "../components/invoice/InvoiceItemList";
import Empty from "../components/layouts/Empty";
import { InvoiceContext } from "../context/InvoiceContext";
import { motion } from "framer-motion";
import { Fragment } from "react";

const Home = () => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const invoiceContext = useContext(InvoiceContext);
  const { filter, invoices } = invoiceContext;

  const variants = {
    exit: {
      y: -30,
      opacity: 0,
    },
  };

  return (
    <motion.div className="px-3" variants={variants} exit="exit">
      <Header setShow={setShow} show={show} setShowForm={setShowForm} />

      <Fragment>
        {!filter ? <InvoiceItemList /> : <FilteredInvoices />}
        {showForm && (
          <CreateInvoiceForm showForm={showForm} setShowForm={setShowForm} />
        )}
      </Fragment>

      {invoices.length === 0 && <Empty />}
    </motion.div>
  );
};
export default Home;
