import React from "react";

const Status = ({ status }) => {
  return (
    <div>
      <div
        className={`status ${
          status === "Paid"
            ? "text-green"
            : status === "Pending"
            ? "text-yellow"
            : "text-gray dark:text-gray3"
        }`}>
        <span
          className={`${
            status === "Paid"
              ? "bg-green"
              : status === "Pending"
              ? "bg-yellow"
              : "bg-gray dark:bg-gray3"
          } h-2 w-2 block rounded-full`}></span>
        {status}
        <span
          className={`absolute top-0 left-0 w-full h-full ${
            status === "Paid"
              ? "bg-green"
              : status === "Pending"
              ? "bg-yellow"
              : "bg-gray dark:bg-gray3"
          } opacity-5 rounded-md`}></span>
      </div>
    </div>
  );
};
export default Status;
