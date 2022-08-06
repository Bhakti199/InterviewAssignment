import React, { useState, useEffect } from "react";
import "./Page.css";
import { Footer, Navbar, FloatingBlock } from "../Components";

export const PageOne = () => {
  const [floatingBlockPosition, setFloatingBlockPosition] = useState("center");
  const [styleForBlock, setStyleForBlock] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape")
        setStyleForBlock({
          display: "none",
        });
      if (e.key === "Enter")
        setStyleForBlock({
          display: "flex",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        });
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const drop = (e) => {
    setFloatingBlockPosition("floating");
    if (
      e.pageY > 190 &&
      e.pageY < 410 &&
      e.pageX <= window.innerWidth &&
      e.pageX >= 192
    ) {
      setStyleForBlock({
        top: `${e.pageY - 90}px `,
        left: `${e.pageX - 190}px`,
      });
    }
  };

  return (
    <>
      <Navbar
        floatingBlockPosition={floatingBlockPosition}
        setFloatingBlockPosition={setFloatingBlockPosition}
        setStyleForBlock={setStyleForBlock}
      />

      <div
        className="draganddrop-div"
        onDragOver={(e) => e.preventDefault()}
        onDrop={drop}
      >
        <FloatingBlock
          styleForBlock={styleForBlock}
          floatingBlockPosition={floatingBlockPosition}
        />
      </div>
      <Footer />
    </>
  );
};
