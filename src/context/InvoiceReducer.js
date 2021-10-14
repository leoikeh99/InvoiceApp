import {
  CREATE_INVOICE,
  EDIT_INVOICE,
  DELETE_INVOICE,
  TOGGLE_FILTER,
} from "./types";

const InvoiceReducer = (state, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      localStorage.setItem(
        "invoices",
        JSON.stringify([action.payload, ...state.invoices])
      );
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
      };

    case EDIT_INVOICE:
      localStorage.setItem(
        "invoices",
        JSON.stringify(
          state.invoices.map((invoice) =>
            invoice.id === action.payload.id ? action.payload : invoice
          )
        )
      );
      return {
        ...state,
        invoices: state.invoices.map((invoice) =>
          invoice.id === action.payload.id ? action.payload : invoice
        ),
      };

    case DELETE_INVOICE:
      localStorage.setItem(
        "invoices",
        JSON.stringify(
          state.invoices.filter((invoice) => invoice.id !== action.payload)
        )
      );
      return {
        ...state,
        invoices: state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        ),
      };

    case TOGGLE_FILTER:
      return {
        ...state,
        filter: state.filter === action.payload ? null : action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default InvoiceReducer;
