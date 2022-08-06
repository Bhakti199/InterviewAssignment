import React from "react";

export const FloatingBlock = ({ styleForBlock, floatingBlockPosition }) => {
  return (
    <div draggable style={styleForBlock} className="floating-block flex-col">
      <p>{floatingBlockPosition}</p>
      <p className="drag-text">Drag me around...</p>
    </div>
  );
};
