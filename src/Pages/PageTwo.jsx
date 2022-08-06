import React from "react";
import { Link } from "react-router-dom";

export const PageTwo = () => {
  return (
    <div className="page-two">
      <h2 className="page-two-h2">Page 2</h2>

      <img
        className="profile-img"
        alt="profile-img"
        src="https://res.cloudinary.com/bhakti1801/image/upload/v1658061287/WhatsApp_Image_2022-03-12_at_20.43.49__1_-removebg-preview-removebg-preview_qmu99l.png"
      ></img>
      <div className="intro-text">
        Hello, I'm Bhakti Kharatkar. I am a frontend developer who loves
        building web apps and writing blogs.
      </div>
      <div className="intro-text">
        I completed my BTech graduation in 2021 in computer engineering. I
        started my web development journey with neogcamp, during this bootcamp I
        have worked on various skills which includes JavaScript, ReactJS, Redux,
        NodeJS, HTML, and CSS and also build some fully functioned web apps.
      </div>
      <div className="intro-text">
        Apart from coding I love to travel and explore food. When not traveling,
        I enjoy going on a road trip with my friends.
      </div>
      <Link to="/" className="back-btn link">
        Back
      </Link>
    </div>
  );
};
