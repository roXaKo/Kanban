import React from "react";

const Row = (label, dataset, doDragOver, doDragStart, handleDrop, archiveButton) => {
  return (
    <div onDragOver={doDragOver} onDrop={handleDrop}>
      <div className="text-center px-5">{label}</div>
      {dataset && dataset.map((item) => (
        <div
          onDragStart={e=>doDragStart(e,item)}
          draggable
          className="draggable border rounded mb-2"
          key={item._id}
        >
          <div className="m-2">
            Task: <div >{item.title}</div>
          </div>{" "}
          <div className="m-2">{item.content}</div>{" "}
          {archiveButton(item)}
        </div>
      ))}
    </div>
  );
};

export default Row;
