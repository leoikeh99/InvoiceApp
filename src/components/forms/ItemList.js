import React from "react";
import { v4 as uuidv4 } from "uuid";
import FieldInput from "./FieldInput";

const ItemList = ({ props, arrayHelpers }) => {
  return (
    <div className="mt-5">
      {props.values.itemList.map((item, index) => (
        <div key={index}>
          <div className="mobile2:grid grid-cols-itemList gap-2">
            <div className="mobile2:mb-1 mb-5">
              <p className="text-gray4 dark:text-gray3 text-xs mb-2">
                Item Name
              </p>
              <FieldInput name={`itemList[${index}].itemName`} />
            </div>
            <div className="grid grid-cols-itemList2 gap-2 mobile2:mb-1 mb-10">
              <div>
                <p className="text-gray4 dark:text-gray3 text-xs mb-2">Qty.</p>
                <FieldInput name={`itemList[${index}].qty`} />
              </div>
              <div>
                <p className="text-gray4 dark:text-gray3 text-xs mb-2">Price</p>
                <FieldInput name={`itemList[${index}].price`} />
              </div>
              <div>
                <p className="text-gray4 dark:text-gray3 text-xs mb-2">Total</p>
                <p className="w-full flex justify-between items-center text-text2 font-bold text-xs h-12">
                  {item.qty * item.price}
                  <svg
                    className="fill-current text-text2 hover:text-red cursor-pointer"
                    onClick={() => arrayHelpers.remove(index)}
                    width="13"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                      fillRule="nonzero"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        className="flex justify-center items-center text-purple dark:text-gray3 text-xs font-bold gap-2 w-full py-4 bg-purple-light dark:bg-input-dark rounded-3xl mt-4"
        type="button"
        onClick={() =>
          arrayHelpers.push({
            itemName: "",
            qty: 0,
            price: 0,
            total: "",
            id: uuidv4(),
          })
        }>
        <svg
          className="fill-current text-purple dark:text-gray3 mb-1"
          width="11"
          height="11"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            fillRule="nonzero"
          />
        </svg>{" "}
        Add New Item
      </button>
    </div>
  );
};
export default ItemList;
