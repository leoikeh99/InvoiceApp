import React from "react";
import { getTotal } from "../../functions";

const ItemsTable = ({ itemList }) => {
  return (
    <div className="mt-11">
      <div className="mobile2:px-8 px-6 pt-8 bg-purple-light dark:bg-input-dark rounded-tr-lg rounded-tl-lg">
        <div className="grid grid-cols-2 mobile2:grid-cols-itemList3 gap-2 pb-8">
          <p className="text-xs text-text2 dark:text-text2-dark">Item Name</p>
          <p className="text-xs text-text2 dark:text-text2-dark mobile2:block hidden">
            QTY.
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark text-right mobile2:block hidden">
            Price
          </p>
          <p className="text-xs text-text2 dark:text-text2-dark text-right">
            Total
          </p>
        </div>
        {itemList.map((item) => (
          <div className="grid grid-cols-2 mobile2:grid-cols-itemList3 gap-2 pb-8">
            <p className="text-text1 dark:text-text1-dark font-bold">
              {item.itemName}
            </p>
            <p className="text-text2 dark:text-text2-dark font-bold mobile2:block hidden">
              {item.qty}
            </p>
            <p className="text-right text-text2 dark:text-text2-dark font-bold mobile2:block hidden">
              £ {item.price}
            </p>
            <p className="text-right text-text1 dark:text-text1-dark font-bold">
              £ {item.qty * item.price}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center py-6 mobile2:px-8 px-6 bg-bg3 dark:bg-text1 rounded-br-lg rounded-bl-lg">
        <p className="text-xs text-white">Amount Due</p>
        <p className="mobile2:text-lg2 text-lg1 text-white font-bold">
          £ {getTotal(itemList)}
        </p>
      </div>
    </div>
  );
};
export default ItemsTable;
