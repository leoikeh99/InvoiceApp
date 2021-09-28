import { createContext } from "react";
import React, { useReducer } from "react";
import InvoiceReducer from "./InvoiceReducer";
import { CREATE_INVOICE, TOGGLE_FILTER } from "./types";

const InvoiceContext = createContext();

const InvoiceState = (props) => {
  const initialState = {
    invoices: [
      {
        id: "RT3080",
        due: "19 Aug 2020",
        name: "Jensen Huang",
        amount: "1,800.90",
        status: "Paid",
      },
      {
        id: "AC3940",
        due: "12 Nov 2020",
        name: "Leonard Ikeh",
        amount: "1,200.90",
        status: "Paid",
      },
      {
        id: "LL1280",
        due: "19 Sep 2020",
        name: "Wayne Rooney",
        amount: "900.90",
        status: "Pending",
      },
      {
        id: "VT8653",
        due: "20 Aug 2020",
        name: "Juan Mata",
        amount: "300.90",
        status: "Draft",
      },
    ],
    filter: null,
  };
  const [state, dispatch] = useReducer(InvoiceReducer, initialState);

  const createInvoice = (invioce) => {
    dispatch({ type: CREATE_INVOICE, payload: invioce });
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
        toggleFilter,
      }}>
      {props.children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceState };
