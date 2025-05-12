import React from "react";
import imageTitle from "../assets/images/image_title.png";
import "../css/SectionMain.css";

const SectionMain = () => {
  return (
    <div className="section-main">
      <div className="overlap-group">
        <img className="image-title" alt="Image title" src={imageTitle} />
      </div>
    </div>
  );
}
export default SectionMain