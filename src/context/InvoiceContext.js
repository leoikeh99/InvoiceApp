import { createContext } from "react";
import React, { useReducer } from "react";
import InvoiceReducer from "./InvoiceReducer";
import { CREATE_INVOICE } from "./types";

const InvoiceContext = createContext();

const InvoiceState = (props) => {
  const initialState = { invoices: [] };
  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  const createInvoice = (invioce) => {
    dispatch({ type: CREATE_INVOICE, payload: invioce });
  };
  return (
    <InvoiceContext.Provider
      value={{ invoices: state.invoices, createInvoice }}>
      {props.children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceState };
