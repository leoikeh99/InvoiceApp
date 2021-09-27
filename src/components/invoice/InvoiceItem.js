import React from "react";
import rightArrow from "../../images/icon-arrow-right.svg";

const InvoiceItem = ({ invoice: { id, due, name, amount, status } }) => {
  return (
    <div className="bg-bg2 h-item px-8 rounded-lg shadow-item cursor-pointer border-2 border-bg2 hover:border-purple box-border transition duration-300 mb-4">
      <ul className="list-none grid items-center grid-cols-item h-full">
        <li className="font-bold text-text1 text-xs">
          <span className="text-text2">#</span>
          {id}
        </li>
        <li className="text-xs text-text2">Due {due}</li>
        <li className="text-xs text-text2">{name}</li>
        <li className="font-bold text-text1">£ {amount}</li>
        <li>
          <div
            className={`status ${
              status === "Paid"
                ? "text-green"
                : status === "Pending"
                ? "text-yellow"
                : "text-gray"
            }`}>
            <span
              className={`${
                status === "Paid"
                  ? "bg-green"
                  : status === "Pending"
                  ? "bg-yellow"
                  : "bg-gray"
              } h-2 w-2 block rounded-full`}></span>
            {status}
            <span
              className={`absolute top-0 left-0 w-full h-full ${
                status === "Paid"
                  ? "bg-green"
                  : status === "Pending"
                  ? "bg-yellow"
                  : "bg-gray"
              } opacity-5 rounded-md`}></span>
          </div>
        </li>
        <li className="flex justify-end">
          <img src={rightArrow} alt="" />
        </li>
      </ul>
    </div>
  );
};
export default InvoiceItem;
