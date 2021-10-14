import React, { useContext } from "react";
import { motion } from "framer-motion";
import { InvoiceContext } from "../../context/InvoiceContext";
import { Link } from "react-router-dom";

const DeleteModal = ({ setModal, modal }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { deleteInvoice } = invoiceContext;
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-full bg-black opacity-50 z-50"></div>
      <div className="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-bg2-dark mobile2:w-modal w-11/12 box-border p-12 rounded-lg">
          <h2 className="text-text1 dark:text-text1-dark text-lg2 font-bold mb-3">
            Confirm Deletion
          </h2>
          <p className="text-text2 dark:text-text2-dark text-xs mb-4">
            Are you sure you want to delete invoice #{modal}? This action cannot
            be undone.
          </p>
          <div className="flex justify-end gap-2">
            <button
              className="px-6 py-4 text-xs text-purple dark:text-gray3 bg-purple-light dark:bg-input-dark rounded-3xl"
              onClick={() => setModal(null)}>
              Cancel
            </button>
            <Link
              to="/"
              className="px-6 py-4 text-xs text-white bg-red rounded-3xl"
              onClick={() => deleteInvoice(modal)}>
              Delete
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeleteModal;
