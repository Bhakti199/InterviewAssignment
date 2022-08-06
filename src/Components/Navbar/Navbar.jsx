import React from "react";
import { DigitalClock } from "../index.js";
import "./Navbar.css";
export const Navbar = ({
  floatingBlockPosition,
  setFloatingBlockPosition,
  setStyleForBlock,
}) => {
  return (
    <div className="navbar flex-row">
      <div className="flex-row navbar-part-one">
        <div className="navbar-inputs flex-row">
          <span>Position : </span>
          <label>
            <input
              type="radio"
              name="position"
              checked={floatingBlockPosition === "center"}
              onChange={() => {
                setFloatingBlockPosition("center");
                setStyleForBlock({
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                });
              }}
            />
            Center
          </label>
          <label>
            <input
              type="radio"
              name="position"
              checked={floatingBlockPosition === "lower-right"}
              onChange={() => {
                setFloatingBlockPosition("lower-right");
                setStyleForBlock({
                  position: "fixed",
                  top: "auto",
                  left: "auto",
                  bottom: "3.6rem",
                  right: "0",
                });
              }}
            />
            Lower Right
          </label>
        </div>

        <div className="navbar-note">
          Press ESCAPE key to hide the floating block, press ENTER to show it
          again.
        </div>
      </div>

      <div className="clock flex-row">
        <DigitalClock />
      </div>
    </div>
  );
};
