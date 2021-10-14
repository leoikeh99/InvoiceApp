import { createContext } from "react";
import React, { useReducer } from "react";
import InvoiceReducer from "./InvoiceReducer";
import {
  CREATE_INVOICE,
  DELETE_INVOICE,
  EDIT_INVOICE,
  TOGGLE_FILTER,
} from "./types";
import data from "../data.json";

const InvoiceContext = createContext();

const InvoiceState = (props) => {
  const initialState = {
    invoices: localStorage.getItem("invoices")
      ? JSON.parse(localStorage.getItem("invoices"))
      : data,
    filter: null,
  };

  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  const createInvoice = (invoice) => {
    dispatch({ type: CREATE_INVOICE, payload: invoice });
  };

  const editInvoice = (invoice) => {
    dispatch({ type: EDIT_INVOICE, payload: invoice });
  };

  const deleteInvoice = (id) => {
    dispatch({ type: DELETE_INVOICE, payload: id });
  };

  const toggleFilter = (value) => {
    dispatch({ type: TOGGLE_FILTER, payload: value });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices: state.invoices,
        filter: state.filter,
        createInvoice,
        editInvoice,
        deleteInvoice,
        toggleFilter,
      }}>
      {props.children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceState };
