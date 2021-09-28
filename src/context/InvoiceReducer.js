import {
  CREATE_INVOICE,
  EDIT_INVOICE,
  DELETE_INVOICE,
  TOGGLE_FILTER,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
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
