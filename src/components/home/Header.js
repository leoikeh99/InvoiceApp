import React, { useContext } from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import plus from "../../images/icon-plus.svg";
import StatusFilter from "./StatusFilter";
import { InvoiceContext } from "../../context/InvoiceContext";

const Header = ({ show, setShow, setShowForm }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { invoices } = invoiceContext;

  return (
    <header className="flex justify-between items-center  tab:pt-homeTop pt-32 mobile1:pb-homeBottom pb-7">
      <div>
        <h1 className="mobile1:text-lg text-20 font-bold text-text1 dark:text-text1-dark">
          Invoices
        </h1>
        {invoices.length !== 0 ? (
          <p className="text-xs text-text2 dark:text-text2-dark">
            <span className="hidden mobile1:block">
              There are {invoices.length} total invoices
            </span>
            <span className="mobile1:hidden block">
              {invoices.length} Invoices
            </span>
          </p>
        ) : (
          <p className="text-xs text-text2 dark:text-text2-dark">No invoices</p>
        )}
      </div>
      <div className="flex">
        <button className="mobile2:pr-10 pr-4 font-bold text-text1 dark:text-text1-dark text-xs relative">
          <span
            className="flex items-center gap-3"
            onClick={() => setShow(!show)}>
            Filter
            <span className="mobile2:inline hidden -ml-2">by status</span>
            <img src={arrowDown} alt="" className="mt-0.5" />
          </span>
          <StatusFilter show={show} />
        </button>
        <button
          className="icon-btn bg-purple hover:bg-purple-hover cursor-pointer"
          onClick={() => setShowForm(true)}>
          <span className="bg-bg2 h-8 w-8 rounded-full flex items-center justify-center">
            <img src={plus} alt="" />
          </span>
          <span className="mt-0.5">
            New <span className="mobile2:inline hidden">Invoice</span>
          </span>
        </button>
      </div>
    </header>
  );
};
export default Header;
