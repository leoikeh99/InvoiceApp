import moment from "moment";
import * as Yup from "yup";

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
  terms: 1,
  desc: "",
  itemList: [],
};

const terms = [1, 7, 14, 30];

const validationSchema = Yup.object().shape({
  from: Yup.object().shape({
    address: Yup.string().required("*required"),
    city: Yup.string().required("*required"),
    postCode: Yup.string().required("*required"),
    country: Yup.string().required("*required"),
  }),
  to: Yup.object().shape({
    address: Yup.string().required("*required"),
    city: Yup.string().required("*required"),
    postCode: Yup.string().required("*required"),
    country: Yup.string().required("*required"),
    name: Yup.string().required("*required"),
    mail: Yup.string().email("Invalid email").required("*required"),
  }),
  desc: Yup.string().required("*required"),
  itemList: Yup.array()
    .min(1, "An item must be added")
    .of(
      Yup.object().shape({
        itemName: Yup.string().required("*required"),
        qty: Yup.number("").required("*required"),
        price: Yup.number("").required("*required"),
      })
    ),
});

export { initialFormValues, terms, validationSchema };
