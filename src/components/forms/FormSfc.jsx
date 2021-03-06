import React from "react";
import Input from "./input";
import Joi from "joi-browser";

export default function TableSfc(data, error, setData, setError, schema) {
  const handleChange = ({ currentTarget: input }) => {
    const err = { ...error };
    const errorMessage = validateProperty(input);
    err[input.id] = errorMessage;
    if (errorMessage) setError(err);
    else delete error[input.id];

    const change = { ...data };
    change[input.id] = input.value;
    setData(change);
  };


  const validateProperty = ({ id, value }) => {
    const test = { [id]: value };
    const tester = { [id]: schema[id] };
    let { error } = Joi.validate(test, tester);
    return error ? error.details[0].message : null;
  };

  const validate = () => {
    const options = { abortEarly: false };
    let { error } = Joi.validate(data, schema, options);

    if (!error) return null;
    error.details.map((err) => (error[err.path[0]] = err.message));

    return Object.keys(error).length === 0 ? null : error;
  };

  const renderInput = (name, label, type = "text", datalist = "") => {
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        datalist={datalist}
        onChange={handleChange}
        error={error[name]}
      />
    );
  };



  const renderButton = (label) => {
    return (
      <button
        disabled={validate()}
        type="submit"
        className="btn btn-primary m-1"
      >
        {label}
      </button>
    );
  };
  return {
    data,
    setData,
    renderButton,
    renderInput,
    handleChange,

  };
}
