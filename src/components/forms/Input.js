import React from "react";

const Input = ({ label, handleChange, name, placeholder, error }) => {
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
        className="input placeholder-text1"
        type="text"
        onChange={handleChange}
        name={name}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
};

export default Input;
