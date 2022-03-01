import React, { useEffect } from "react";
import { useState } from "react";
import Row from "./Row";
import { expell } from './../../service/fakeService';

function RowElem({ label, dataSet, data, setData }) {
  // init 
  const [toDo, setToDo] = useState(
    dataSet.filter((elem) => !elem.status )
  );
  const [done, setDone] = useState(
    dataSet.filter((elem) => elem.status )
  );
  const { labelName, key } = label;
  const showDone= key==="entwicklung"||key==="testen"

  useEffect(() => {
    setToDo(dataSet.filter((elem) => !elem.status));
    setDone(dataSet.filter((elem) => elem.status ));
  }, [dataSet]);
  // drag/drop logic
  const doDragOver = (e) => {
    e.preventDefault();
  };
  const doDragStart = (e, item) => {
    e.dataTransfer.setData("data", item._id);
  };
// HTTP
  const handleDrop = (e) => {
    const item = data.find(
      (elem) => elem._id === parseInt(e.dataTransfer.getData("data"))
    );
    console.log(data);
    if (item.state === "entwicklung"||item.state ==="testen") item.status = !item.status;
    if (item.state !== key) {
      item.state = key;
      item.status = false;
    }
    console.log(item);
    const set = data.filter(
      (elem) => elem._id !== parseInt(e.dataTransfer.getData("data"))
    );
    let column = [...set, item];
    setData(column);
  };

  // archive button
  const archiveButton=(item)=>{
    if(key==="fertig")return <button className="btn btn-success  w-100" onClick={()=>handleArchive(item)}>Archive</button>
    if(key!=="fertig")return <button className="btn btn-danger w-100" onClick={()=>handleCancel(item)}>Cancel</button>
  }
// HTTP archive logic
  const handleArchive=(item)=>{
    const set = data.filter(
      (elem) => elem._id !== item._id)
    let column = [...set];
    setData(column)

    item.completed = true
    expell(item)
  }
// HTTP
  const handleCancel=(item)=>{
    const set = data.filter(
      (elem) => elem._id !== item._id)
    let column = [...set];
    setData(column)

    item.completed = false
    expell(item)
  }
// render
  if (!dataSet) return <div>"there is no data"</div>;
  return (
    <div className="col-md-auto  m-2">
      <h4 className="text-center ">{labelName}</h4>
      {!showDone  &&
        Row("toDo", toDo, doDragOver, doDragStart, handleDrop,archiveButton)}
      {showDone && (
          <div className="row">
            <div className="col-6">
              {Row("toDo", toDo, doDragOver, doDragStart, handleDrop,archiveButton)}
            </div>
            <div className="col-6">
              {Row("Done", done, doDragOver, doDragStart, handleDrop,archiveButton)}
            </div>
          </div>
      )}
    </div>
  );
}

export default RowElem;
