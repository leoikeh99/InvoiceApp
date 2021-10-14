import React from "react";
import Status from "../invoice/Status";
import Buttons from "./Buttons";

const Header = ({ invoice, setShowForm, setModal }) => {
  return (
    <div>
      <header className="w-full bg-bg2 dark:bg-bg2-dark p-6 mobile3:py-5 mobile3:px-8 flex justify-between items-center rounded-lg shadow-item mb-6">
        <div className="flex items-center gap-4 justify-between mobile2:w-auto w-full">
          <p className="text-text2 dark:text-text2-dark text-xs">Status</p>
          <Status status={invoice.status} />
        </div>
        <Buttons
          invoice={invoice}
          setShowForm={setShowForm}
          setModal={setModal}
        />
      </header>
    </div>
  );
};
export default Header;
