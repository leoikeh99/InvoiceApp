import React, { useEffect } from "react";
import { terms } from "./data";
import arrowDown from "../../images/icon-arrow-down.svg";

const Terms = ({ props }) => {
  useEffect(() => {
    document.getElementById("terms").addEventListener("click", () => {
      const ul = document.querySelector("#terms ul");
      if (ul.classList.contains("hidden")) {
        ul.classList.replace("hidden", "block");
      } else {
        ul.classList.replace("block", "hidden");
      }
    });
  }, []);
  return (
    <div id="terms">
      <label className="label">Payment Terms</label>
      <div className="flex justify-between items-center w-full h-12 dark:bg-bg2-dark border border-input dark:border-bg1-dark mobile2:px-5 px-3 rounded mb-6 relative cursor-pointer">
        <p className="text-black dark:text-white text-xs font-bold h">
          Next {props.values.terms} days
        </p>
        <img src={arrowDown} alt="" />
        <ul className="absolute top-12 left-0 rounded-lg mt-2 bg-bg2 dark:bg-input-dark shadow-filter dark:shadow-none w-full hidden text-black dark:text-white text-xs font-bold">
          {terms.map((term) => (
            <li
              key={term}
              className="py-4 px-6 border-b border-gray3 dark:border-bg2-dark hover:text-purple"
              onClick={() => props.setFieldValue("terms", term)}>
              Next {term} days
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Terms;
