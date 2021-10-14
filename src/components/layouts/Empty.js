import React from "react";
import image from "../../images/illustration-empty.svg";

const Empty = () => {
  return (
    <div className="mt-4">
      <img className="w-auto m-auto" src={image} alt="" />
      <h2 className="text-center text-text1 dark:text-text1-dark text-lg2 font-bold mt-10">
        There is nothing here
      </h2>
      <p className="text-center max-w-xs m-auto text-text2 dark:text-gray3 mt-6">
        Create an invoice by clicking the New button and get started
      </p>
    </div>
  );
};
export default Empty;
