import { CREATE_INVOICE, EDIT_INVOICE, DELETE_INVOICE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};
