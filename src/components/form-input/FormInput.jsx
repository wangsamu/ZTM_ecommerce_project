import React from "react";
import "./form-input.styles.scss";

function FormInput({ label, inputOptions }) {
  return (
    <div className="group">
      <input className="form-input" required {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
