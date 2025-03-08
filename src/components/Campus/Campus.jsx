import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <div className="gallery-container">
          <img
            src={gallery_1}
            alt="Photo of the school library with students making use of it"
          />
        </div>
        <div className="gallery-container">
          <img src={gallery_2} alt="Photo of the teachers room" />
        </div>
        <div className="gallery-container">
          <img src={gallery_3} alt="Photos of three graduating students" />
        </div>
        <div className="gallery-container">
          <img src={gallery_4} alt="Photo of the best graduating student" />
        </div>
      </div>
      <a href="#" className="btn dark-btn">
        See more here <img src={white_arrow} alt="An arrow icon" />
      </a>
    </div>
  );
};

export default Campus;
