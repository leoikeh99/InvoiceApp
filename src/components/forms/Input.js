import React from "react";

const Input = ({ label, handleChange, name, placeholder, error, value }) => {
  return (
    <div>
      <label
        className={`${
          error && typeof error === "string"
            ? "labelError"
            : error && error[name === "email" ? "mail" : name]
            ? "labelError"
            : "label"
        }`}>
        <span>{label}</span>
        <span className="font-semibold text-xxs">
          {error && typeof error === "string"
            ? error
            : error && error[name === "email" ? "mail" : name]}
        </span>
      </label>
      <input
        className={`${
          error && typeof error === "string"
            ? "inputError"
            : error && error[name === "email" ? "mail" : name]
            ? "inputError"
            : "input"
        } placeholder-text1 dark:placeholder-text1-dark`}
        type="text"
        onChange={handleChange}
        name={name}
        placeholder={placeholder && placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
