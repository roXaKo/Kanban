import React, { useState } from "react";
import { usePopper } from "react-popper";

const Row = (
  label,
  dataset,
  doDragOver,
  doDragStart,
  handleDrop,
  archiveButton
) => {
  const isDone =()=> {
    return label==="Done"?"true":"false"
  }
  const hight =()=> {
    return dataset.length===0?{height:"500px"}:{height:"auto"}
  }

  return (
    <div>
      <div style={hight()} className="text-center px-custom" status={isDone()} onDragOver={doDragOver} onDrop={handleDrop}>{label}</div>
      {dataset &&
        dataset.map((item) => (
          <div
            _id={item._id}
            onDragStart={(e) => doDragStart(e, item)}
            draggable
            className="draggable border rounded mb-2"
            key={item._id}
            onDragOver={doDragOver} onDrop={handleDrop}
          >
            <div className="m-2">{item.title}</div>
            <div className="m-2">{item.content}</div> {archiveButton(item)}
          </div>
        ))}
    </div>
  );
};

export default Row;
