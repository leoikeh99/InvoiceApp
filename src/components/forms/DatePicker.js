import React, { useState } from "react";
import calendarIcon from "../../images/icon-calendar.svg";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { useEffect } from "react/cjs/react.development";

const DatePicker = ({ props, invoiceDate }) => {
  const [date, setDate] = useState(invoiceDate);

  useEffect(() => {
    props.setFieldValue("invoiceDate", moment(date).format("DD MMM yyyy"));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <label className="label">Invoice Date</label>
      <div className="relative w-full h-12">
        <div className="flex justify-between items-center w-full h-12 border border-input dark:border-bg1-dark dark:bg-bg2-dark mobile2:px-5 px-3 rounded mb-6">
          <p className="pt-1 text-black dark:text-text1-dark font-bold text-xs">
            {moment(date).format("DD MMM yyyy")}
          </p>
          <img src={calendarIcon} alt="" />
        </div>
        <ReactDatePicker
          selected={moment(date).toDate()}
          onChange={(date) => {
            setDate(date);
            props.setFieldValue(
              "invoiceDate",
              moment(date).format("DD MMM yyyy")
            );
          }}
          className="w-full h-12 cursor-pointer"
          wrapperClassName="absolute top-0 left-0 opacity-0"
        />
      </div>
    </div>
  );
};
export default DatePicker;
