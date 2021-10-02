import React from "react";
import { motion } from "framer-motion";
import { FieldArray, Formik } from "formik";
import { initialFormValues } from "./data";
import Input from "./Input";
import Terms from "./Terms";
import ItemList from "./ItemList";
import DatePicker from "./DatePicker";
import * as Yup from "yup";

const CreateInvoiceForm = ({ setShowForm }) => {
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

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.6,
        }}
        className="overlay"
        onClick={() => setShowForm(false)}></motion.div>
      <motion.div
        className="formBody"
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}>
        <div className="max-w-container2 m-auto h-full">
          <h2 className="text-text1 font-bold text-lg2 mb-12">New Invoice</h2>
          <Formik
            initialValues={initialFormValues}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}>
            {(props) => (
              <form
                className="h-full overflow-y-auto pr-3"
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  props.handleSubmit();
                }}>
                <div className="mb-12">
                  <p className="text-purple font-bold text-xs mb-6">
                    Bill From
                  </p>
                  <Input
                    label={"Street Adress"}
                    handleChange={props.handleChange("from.address")}
                    name={"address"}
                    error={props.touched.from && props.errors.from}
                  />
                  <div className="grid grid-cols-3 gap-6">
                    <Input
                      label={"City"}
                      handleChange={props.handleChange("from.city")}
                      name={"city"}
                      error={props.touched.from && props.errors.from}
                    />
                    <Input
                      label={"Post Code"}
                      handleChange={props.handleChange("from.postCode")}
                      name={"postCode"}
                      error={props.touched.from && props.errors.from}
                    />
                    <Input
                      label={"Country"}
                      handleChange={props.handleChange("from.country")}
                      name={"country"}
                      error={props.touched.from && props.errors.from}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-purple font-bold text-xs mb-6">Bill To</p>
                  <Input
                    label={"Client Name"}
                    handleChange={props.handleChange("to.name")}
                    name={"name"}
                    error={props.touched.to && props.errors.to}
                  />
                  <Input
                    label={"Client Mail"}
                    handleChange={props.handleChange("to.mail")}
                    name={"email"}
                    placeholder="e.g. email@example.com"
                    error={props.touched.to && props.errors.to}
                  />
                  <Input
                    label={"Street Adress"}
                    handleChange={props.handleChange("to.address")}
                    name={"address"}
                    error={props.touched.to && props.errors.to}
                  />
                  <div className="grid grid-cols-3 gap-6">
                    <Input
                      label={"City"}
                      handleChange={props.handleChange("to.city")}
                      name={"city"}
                      error={props.touched.to && props.errors.to}
                    />
                    <Input
                      label={"Post Code"}
                      handleChange={props.handleChange("to.postCode")}
                      name={"postCode"}
                      error={props.touched.to && props.errors.to}
                    />
                    <Input
                      label={"Country"}
                      handleChange={props.handleChange("to.country")}
                      name={"country"}
                      error={props.touched.to && props.errors.to}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  <DatePicker props={props} />
                  <Terms props={props} />
                </div>
                <div className="mb-8">
                  <Input
                    label={"Project Description"}
                    handleChange={props.handleChange("desc")}
                    name={"description"}
                    error={props.touched.desc && props.errors.desc}
                  />
                </div>
                <p className="text-gray5 text-lg1 font-bold">Item List</p>
                <ul className="text-gray4 text-xs grid grid-cols-itemList gap-2 mb-2">
                  <li>Item Name</li>
                  <li>Qty.</li>
                  <li>Price</li>
                  <li>Total</li>
                </ul>
                <FieldArray
                  name="itemList"
                  render={(arrayHelpers) => (
                    <ItemList props={props} arrayHelpers={arrayHelpers} />
                  )}
                />
                {props.touched.itemList &&
                  typeof props.errors.itemList === "string" && (
                    <p className="text-xxs font-semibold text-red mt-8">
                      - {props.errors.itemList}
                    </p>
                  )}
                <div className="text-xs flex justify-between items-center sticky bottom-0 left-0 w-full bg-bg2 h-28 shadow-shadow1">
                  <button
                    className="font-bold text-purple bg-purple-light rounded-3xl py-4 px-6"
                    type="button">
                    Discard
                  </button>
                  <div>
                    <button
                      className="font-bold text-text2 bg-bg3 rounded-3xl py-4 px-6 mr-2"
                      type="button">
                      Save as Draft
                    </button>
                    <button
                      className="font-bold text-text1-dark bg-purple rounded-3xl py-4 px-6"
                      type="submit">
                      Save & Send
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateInvoiceForm;
