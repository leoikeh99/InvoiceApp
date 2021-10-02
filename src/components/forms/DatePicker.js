import React, { useState } from "react";
import calendarIcon from "../../images/icon-calendar.svg";
import ReactDatePicker from "react-datepicker";
import moment from "moment";

const DatePicker = ({ props }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <label className="label">Invoice Date</label>
      <div className="relative w-full h-12 ">
        <div className="flex justify-between items-center w-full h-12 border border-input px-5 rounded mb-6">
          <p className="pt-1 text-black font-bold text-xs">
            {moment(date).format("DD MMM yyyy")}
          </p>
          <img src={calendarIcon} alt="" />
        </div>
        <ReactDatePicker
          selected={date}
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
