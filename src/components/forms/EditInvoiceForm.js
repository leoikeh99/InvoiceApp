import React, { useContext } from "react";
import { InvoiceContext } from "../../context/InvoiceContext";
import { motion } from "framer-motion";
import { FieldArray, Formik } from "formik";
import { validationSchema } from "./data";
import Input from "./Input";
import Terms from "./Terms";
import ItemList from "./ItemList";
import DatePicker from "./DatePicker";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import arrowLeft from "../../images/icon-arrow-left.svg";

const CreateInvoiceForm = ({ setShowForm, invoice }) => {
  const invoiceContext = useContext(InvoiceContext);
  const { editInvoice } = invoiceContext;

  const saveInvoice = (values) => {
    editInvoice(values);
    setShowForm(false);
  };

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
        className="formBody formHeight1"
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}>
        <div className="mobile3:max-w-container2 m-auto h-full">
          <button
            to="/"
            className="text-text1 dark:text-text1-dark font-bold text-xs flex items-center gap-7 mb-6 mobile2:hidden pl-3"
            onClick={() => setShowForm(false)}>
            <img src={arrowLeft} alt="" className="mb-1" /> Go back
          </button>
          <h2 className="text-text1 dark:text-text1-dark font-bold text-lg2 mb-5 mobile2:mb-12 pl-3">
            Edit <span className="text-text2 dark:text-text2-dark">#</span>
            {invoice.id}
          </h2>

          <Formik
            initialValues={invoice}
            onSubmit={(values) => saveInvoice(values)}
            validationSchema={validationSchema}>
            {(props) => (
              <SimpleBar style={{ maxHeight: "100%" }}>
                <form
                  className="h-full overflow-y-auto px-3 mb-5"
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
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
                      value={props.values.from.address}
                    />
                    <div className="mobile3:grid grid-cols-3 gap-6">
                      <div className="col-span-2 grid grid-cols-2 gap-6">
                        <Input
                          label={"City"}
                          handleChange={props.handleChange("from.city")}
                          name={"city"}
                          error={props.touched.from && props.errors.from}
                          value={props.values.from.city}
                        />
                        <Input
                          label={"Post Code"}
                          handleChange={props.handleChange("from.postCode")}
                          name={"postCode"}
                          error={props.touched.from && props.errors.from}
                          value={props.values.from.postCode}
                        />
                      </div>
                      <Input
                        label={"Country"}
                        handleChange={props.handleChange("from.country")}
                        name={"country"}
                        error={props.touched.from && props.errors.from}
                        value={props.values.from.country}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-purple font-bold text-xs mb-6">
                      Bill To
                    </p>
                    <Input
                      label={"Client Name"}
                      handleChange={props.handleChange("to.name")}
                      name={"name"}
                      error={props.touched.to && props.errors.to}
                      value={props.values.to.name}
                    />
                    <Input
                      label={"Client Mail"}
                      handleChange={props.handleChange("to.mail")}
                      name={"email"}
                      placeholder="e.g. email@example.com"
                      error={props.touched.to && props.errors.to}
                      value={props.values.to.mail}
                    />
                    <Input
                      label={"Street Adress"}
                      handleChange={props.handleChange("to.address")}
                      name={"address"}
                      error={props.touched.to && props.errors.to}
                      value={props.values.to.address}
                    />
                    <div className="mobile3:grid grid-cols-3 gap-6">
                      <div className="col-span-2 grid grid-cols-2 gap-6">
                        <Input
                          label={"City"}
                          handleChange={props.handleChange("to.city")}
                          name={"city"}
                          error={props.touched.to && props.errors.to}
                          value={props.values.to.city}
                        />
                        <Input
                          label={"Post Code"}
                          handleChange={props.handleChange("to.postCode")}
                          name={"postCode"}
                          error={props.touched.to && props.errors.to}
                          value={props.values.to.postCode}
                        />
                      </div>
                      <Input
                        label={"Country"}
                        handleChange={props.handleChange("to.country")}
                        name={"country"}
                        error={props.touched.to && props.errors.to}
                        value={props.values.to.country}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-4">
                    <DatePicker
                      props={props}
                      invoiceDate={invoice.invoiceDate}
                    />
                    <Terms props={props} />
                  </div>
                  <div className="mb-8">
                    <Input
                      label={"Project Description"}
                      handleChange={props.handleChange("desc")}
                      name={"description"}
                      error={props.touched.desc && props.errors.desc}
                      value={props.values.desc}
                    />
                  </div>
                  <p className="text-gray5 text-lg1 font-bold">Item List</p>
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
                </form>
                <div className="text-xs flex justify-end items-center gap-2 sticky bottom-0 pb-3.5 left-0 w-full bg-bg2 dark:bg-bg1-dark h-20 mobile2:h-28 shadow-shadow1 px-3">
                  <button
                    className="font-bold text-purple bg-purple-light rounded-3xl py-4 mobile2:px-6 px-4 mobile1:text-xs text-xxs"
                    type="button"
                    onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button
                    className="font-bold text-text1-dark bg-purple rounded-3xl py-4 mobile2:px-6 px-4 mobile1:text-xs text-xxs"
                    type="button"
                    onClick={() => props.handleSubmit()}>
                    Save Changes
                  </button>
                </div>
              </SimpleBar>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateInvoiceForm;
