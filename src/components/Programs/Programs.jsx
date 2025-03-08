import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <section className="programs">
      <div className="programs-container">
        <div className="program">
          <div className="program-img-container">
            <img src={program_1} alt="Image of school program" />
          </div>
          <div className="caption">
            <img src={program_icon_1} alt="Icon" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <div className="program-img-container">
            <img src={program_2} alt="Image of school program" />
          </div>
          <div className="caption">
            <img src={program_icon_2} alt="Icon" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <div className="program-img-container">
            <img src={program_3} alt="Image of school program" />
          </div>
          <div className="caption">
            <img src={program_icon_3} alt="Icon" />
            <p>Graduation Degree</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
