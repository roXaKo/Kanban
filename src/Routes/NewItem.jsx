import React, { useState } from "react";
import FormSfc from "../components/forms/FormSfc";
import Joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import { saveItem } from "./../service/fakeService";

function NewItem(props) {
  // generate fake id
  let id = parseInt(Math.random() * 10000);
  id = id.toString();
  // init
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    content: "",
    _id: id,
    state: "backlock",
    status: false,
  });
  const [error, setError] = useState({ title: "", content: "" });
  const schema = {
    title: Joi.string().required(),
    content: Joi.string().required(),
    _id: Joi.string().required(),
    state: Joi.string().required(),
    status: Joi.required(),
  };

  const { renderInput, renderButton } = FormSfc(
    data,
    error,
    setData,
    setError,
    schema
  );

  // subimt
  const doSubmit = (e) => {
    e.preventDefault();
    saveItem(data);
    navigate("/");
  };
  // render
  return (
    <div className="w-25 container position-absolute start-50 translate-middle-x scroller">
      <form onSubmit={doSubmit}>
        {renderInput("title", "Title")}
        {renderInput("content", "Content")}
        {renderButton("Submit")}
      </form>
    </div>
  );
}

export default NewItem;
