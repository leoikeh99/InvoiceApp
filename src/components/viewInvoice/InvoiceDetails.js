import React from "react";
import moment from "moment";
import ItemsTable from "./ItemsTable";

const InvoiceDetails = ({ invoice }) => {
  return (
    <div className="bg-bg2 dark:bg-bg2-dark p-6 mobile3:p-12 rounded-lg shadow-item">
      <div className="mobile2:flex justify-between mobile2:mb-4 mb-7">
        <div className="mobile2:mb-0 mb-7">
          <p className="font-bold text-text1 dark:text-text1-dark text-base">
            <span className="text-text2 dark:text-text2-dark">#</span>
            {invoice.id}
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark">
            {invoice.desc}
          </p>
        </div>
        <div>
          <p className="text-xs text-text2 dark:text-text2-dark mobile2:text-right text-left mb-1">
            {invoice.from.address}
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark mobile2:text-right text-left mb-1">
            {invoice.from.city}
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark mobile2:text-right text-left mb-1">
            {invoice.from.postCode}
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark mobile2:text-right text-left mb-1">
            {invoice.from.country}
          </p>
        </div>
      </div>
      <div className="mobile2:grid grid-cols-3">
        <div className="grid grid-cols-2 col-span-2">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <p className="text-xs text-text2 dark:text-text2-dark mb-3">
                Invoice Date
              </p>
              <p className="font-bold text-text1 dark:text-text1-dark text-base">
                {moment(invoice.invoiceDate).format("DD MMM yyyy")}
              </p>
            </div>
            <div>
              <p className="text-xs text-text2 dark:text-text2-dark mb-3">
                Payment Due
              </p>
              <p className="font-bold text-text1 dark:text-text1-dark text-base">
                {moment(invoice.invoiceDate)
                  .add(invoice.terms, "days")
                  .format("DD MMM yyyy")}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-text2 dark:text-text2-dark mb-3">
              Bill To
            </p>
            <p className="font-bold text-text1 dark:text-text1-dark text-base mb-1">
              {invoice.to.name}
            </p>
            <div>
              <p className="text-xs text-text2 dark:text-text2-dark text-left mb-1">
                {invoice.to.address}
              </p>
              <p className="text-xs text-text2 dark:text-text2-dark text-left mb-1">
                {invoice.to.city}
              </p>
              <p className="text-xs text-text2 dark:text-text2-dark text-left mb-1">
                {invoice.to.postCode}
              </p>
              <p className="text-xs text-text2 dark:text-text2-dark text-left mb-1">
                {invoice.to.country}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs text-text2 dark:text-text2-dark mb-2 mobile2:mt-0 mt-6">
            Sent To
          </p>
          <p className="font-bold text-text1 dark:text-text1-dark text-base">
            {invoice.to.mail}
          </p>
        </div>
      </div>
      <ItemsTable itemList={invoice.itemList} />
    </div>
  );
};
export default InvoiceDetails;
