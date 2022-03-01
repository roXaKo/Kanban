import React from "react";

const Select = ({ error, name, options, label, value, paginate, ...rest }) => {
  const className = paginate ? "form-group":"form-group m-1"
  return (
    <div className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <select {...rest} className="form-select">
        {!value && <option value=""></option>}
        {options.map((opt) => (
          <option key={opt.name} value={opt._id}>
            {opt.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger ">{error}</div>}
    </div>
  );
};

export default Select;
