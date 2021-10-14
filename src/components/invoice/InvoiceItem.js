import React from "react";
import rightArrow from "../../images/icon-arrow-right.svg";
import { motion } from "framer-motion";
import { getTotal } from "../../functions";
import moment from "moment";
import { Link } from "react-router-dom";
import Status from "./Status";

const InvoiceItem = ({
  invoice: {
    id,
    invoiceDate,
    to: { name },
    itemList,
    status,
    terms,
  },
}) => {
  const variants = {
    popIn: {
      scale: 0.5,
      opacity: 0,
    },
    popOut: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 500,
      },
    },
    hover: {
      scale: 0.98,
      transition: { duration: 0.01 },
    },
  };
  return (
    <Link to={`/invoice/${id}`}>
      <motion.div
        className="bg-bg2 dark:bg-bg2-dark tab:h-item tab:p-0 tab:px-8 p-6 rounded-lg shadow-item cursor-pointer border-2 border-bg2 hover:border-purple dark:border-bg2-dark  dark:hover:border-purple box-border transition duration-300 mb-4"
        variants={variants}
        initial="popIn"
        animate="popOut"
        whileHover="hover">
        <ul className="list-none mobile1:grid gap-2 items-center grid-cols-item h-full hidden">
          <li className="font-bold text-text1 dark:text-text1-dark text-xs">
            <span className="text-text2 dark:text-text2-dark">#</span>
            {id}
          </li>
          <li className="text-xs text-text2 dark:text-text2-dark">
            Due {moment(invoiceDate).add(terms, "days").format("DD MMM yyyy")}
          </li>
          <li className="text-xs text-text2 dark:text-text2-dark">{name}</li>
          <li className="font-bold text-text1 dark:text-text1-dark">
            £ {getTotal(itemList)}
          </li>
          <li>
            <Status status={status} />
          </li>
          <li className="flex justify-end">
            <img src={rightArrow} alt="" />
          </li>
        </ul>

        <div className="mobile1:hidden">
          <div className="flex justify-between items-center mb-6">
            <p className="font-bold text-text1 dark:text-text1-dark text-xs">
              <span className="text-text2 dark:text-text2-dark">#</span>
              {id}
            </p>
            <p className="text-xs text-text2 dark:text-text2-dark">{name}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-text2 dark:text-text2-dark mb-2">
                Due{" "}
                {moment(invoiceDate).add(terms, "days").format("DD MMM yyyy")}
              </p>
              <p className="font-bold text-text1 dark:text-text1-dark">
                £ {getTotal(itemList)}
              </p>
            </div>
            <div>
              <Status status={status} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
export default InvoiceItem;
