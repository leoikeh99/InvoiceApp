import React from "react";
import { v4 as uuidv4 } from "uuid";
import plusIcon from "../../images/icon-plus.svg";
import deleteIcon from "../../images/icon-delete.svg";
import FieldInput from "./FieldInput";

const ItemList = ({ props, arrayHelpers }) => {
  return (
    <div>
      {props.values.itemList.map((item, index) => (
        <div key={index}>
          <div className="grid grid-cols-itemList gap-2">
            <FieldInput name={`itemList[${index}].itemName`} />
            <FieldInput name={`itemList[${index}].qty`} />
            <FieldInput name={`itemList[${index}].price`} />
            <p className="w-full flex justify-between items-center text-text2 font-bold text-xs">
              {item.qty * item.price}
              <img
                src={deleteIcon}
                alt=""
                onClick={() => arrayHelpers.remove(index)}
                className="cursor-pointer"
              />
            </p>
          </div>
        </div>
      ))}
      <button
        className="flex justify-center items-center text-purple text-xs font-bold gap-2 w-full py-4 bg-purple-light rounded-3xl mt-4"
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
        <img className="mb-1" src={plusIcon} alt="" /> Add New Item
      </button>
    </div>
  );
};
export default ItemList;
