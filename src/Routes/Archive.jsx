import React, { useState } from "react";
import { getArchive, saveArchive, retrive } from "../service/fakeService";

function Archive(props) {
    // init
  const [data, setData] = useState(getArchive());

// HTTP retrive
  const handleRetrive = (item) => {
    item.state = "backlock";
    item.status = false;
    delete item.completed;
    retrive(item);
    let buffer = data.filter((el) => el._id !== item._id);
    setData(buffer);
  };

// HTTP change .completed property
  const handleComplete = (item) => {
    item.completed = !item.completed;
    let buffer = data.findIndex(el=>(el._id===item._id));
    let updated = [...data];
    updated[buffer]= item
    setData(updated);
    saveArchive(updated);
  };

// complete buttons
  const isComplete = (item) => {
    if (item.completed)
      return (
        <button
          className="btn btn-success m-2 col"
          onClick={() => handleComplete(item)}
        >
          Completed
        </button>
      );
    if (!item.completed)
      return (
        <button
          className="btn btn-danger m-2 col"
          onClick={() => handleComplete(item)}
        >
          Canceld
        </button>
      );
  };

// render
  return (
    <div className="container position-absolute start-50 translate-middle-x scroller">
      <row className="row">
          {data.map((item) => (
            <div className=" col-md-auto border rounded m-2 " key={item._id}>
              <div className="m-2">
                Task: <div>{item.title}</div>
              </div>{" "}
              <div className="m-2">{item.content}</div>{" "}
              <div className="row">
                {isComplete(item)}
                <button
                  className="btn btn-primary m-2 col"
                  onClick={() => handleRetrive(item)}
                >
                  Retrive
                </button>
              </div>
            </div>
          ))}
      </row>
    </div>
  );
}

export default Archive;
