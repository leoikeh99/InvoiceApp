import React from "react";
import arrowDown from "../../images/icon-arrow-down.svg";
import plus from "../../images/icon-plus.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center  pt-homeTop pb-homeBottom">
      <div>
        <h1 className="text-lg font-bold text-text1">Invoices</h1>
        <p className="text-xs text-text2">There are 7 total invoices</p>
      </div>
      <div className="flex gap-10">
        <button className="flex items-center gap-3 font-bold text-text1 text-xs">
          Filter by status <img src={arrowDown} alt="" className="mt-0.5" />
        </button>
        <button className="icon-btn bg-purple">
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
