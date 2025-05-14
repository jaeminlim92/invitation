import React from "react";
import photo1 from "../assets/images/Photo1.png";
import photo2 from "../assets/images/Photo2.png";
import photo3 from "../assets/images/Comic_Photo.png";
import "../css/Photo1Section.css";

const Photo1Section = () => {
  return (
    <div className="photo-main">
      <img className="photo" src={photo1} alt="photo1" />
      <img className="photo" src={photo2} alt="photo2" />
      <img className="photo" src={photo3} alt="photo3" />
    </div>
  );
}
export default Photo1Section;
