import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <Link to="/pagetwo" className="flex-row footer  link">
      <span>Go to Page Two</span> <BsArrowRightShort size={30} />
    </Link>
  );
};
