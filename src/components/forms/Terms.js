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
      <div className="flex justify-between items-center w-full h-12 border border-input px-5 rounded mb-6 relative cursor-pointer">
        <p className="text-black text-xs font-bold h">{props.values.terms}</p>
        <img src={arrowDown} alt="" />
        <ul className="absolute top-12 left-0 mt-2 bg-bg2 shadow-filter w-full hidden text-black text-xs font-bold">
          {terms.map((term) => (
            <li
              key={term}
              className="py-4 px-6 border-b border-gray3"
              onClick={() => props.setFieldValue("terms", term)}>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Terms;
