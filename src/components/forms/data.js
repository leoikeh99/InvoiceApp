import moment from "moment";
const initialFormValues = {
  from: { address: "", city: "", postCode: "", country: "" },
  to: {
    mail: "",
    name: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
  },
  invoiceDate: moment().format("DD MM yyyy"),
  terms: "Next 1 Day",
  desc: "",
  itemList: [],
};

const terms = ["Next 1 Day", "Next 7 Days", "Next 14 Days", "Next 30 Days"];

export { initialFormValues, terms };
