import React from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import plus from "../../images/icon-plus.svg";
import StatusFilter from "./StatusFilter";

const Header = ({ show, setShow, setShowForm }) => {
  return (
    <header className="flex justify-between items-center  pt-homeTop pb-homeBottom">
      <div>
        <h1 className="text-lg font-bold text-text1">Invoices</h1>
        <p className="text-xs text-text2">There are 7 total invoices</p>
      </div>
      <div className="flex">
        <button className="px-10 font-bold text-text1 text-xs relative">
          <span
            className="flex items-center gap-3"
            onClick={() => setShow(!show)}>
            Filter by status <img src={arrowDown} alt="" className="mt-0.5" />
          </span>
          <StatusFilter show={show} />
        </button>
        <button
          className="icon-btn bg-purple hover:bg-purple-hover cursor-pointer"
          onClick={() => setShowForm(true)}>
          <span className="bg-bg2 h-8 w-8 rounded-full flex items-center justify-center">
            <img src={plus} alt="" />
          </span>
          <span className="mt-0.5">New Invoice</span>
        </button>
      </div>
    </header>
  );
};
export default Header;
