import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "../components/viewInvoice/Header";
import { InvoiceContext } from "../context/InvoiceContext";
import arrowLeft from "../images/icon-arrow-left.svg";
import { Link } from "react-router-dom";
import EditInvoiceForm from "../components/forms/EditInvoiceForm";
import { motion } from "framer-motion";
import InvoiceDetails from "../components/viewInvoice/InvoiceDetails";
import BottomButtons from "../components/viewInvoice/BottomButtons";
import DeleteModal from "../components/viewInvoice/DeleteModal";

const ViewInvoice = ({ match, history }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { invoices } = invoiceContext;
  const [invoice, setInvoice] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    setInvoice(invoices.find((invoice) => invoice.id === match.params.id));
  }, [match, invoices]);
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="px-3 mb-12">
      {invoice && (
        <Fragment>
          <Link
            to="/"
            className="text-text1 dark:text-text1-dark font-bold text-xs flex items-center gap-7 tab:mt-16 mt-32 mb-8">
            <img src={arrowLeft} alt="" className="mb-1" /> Go back
          </Link>
          <Header
            invoice={invoice}
            setShowForm={setShowForm}
            history={history}
            setModal={setModal}
          />
          <InvoiceDetails invoice={invoice} />
          <BottomButtons
            invoice={invoice}
            setShowForm={setShowForm}
            setModal={setModal}
          />
          {modal && <DeleteModal setModal={setModal} modal={modal} />}
        </Fragment>
      )}
      {showForm && (
        <EditInvoiceForm
          showForm={showForm}
          setShowForm={setShowForm}
          invoice={invoice}
        />
      )}
    </motion.div>
  );
};

export default ViewInvoice;
