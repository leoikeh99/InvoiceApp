import { Field } from "formik";
import React from "react";

const FieldInput = ({ name, error }) => {
  return (
    <Field name={name} className={`${!error ? "input2" : "input2Error"}`} />
  );
};

export default FieldInput;
