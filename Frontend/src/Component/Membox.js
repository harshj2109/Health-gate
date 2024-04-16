import React from "react";
import "../Css/About.css";
const Membox = (props) => {
  return (
    <div className="team-mem-box" data-aos="flip-left">
      <div className="mem-img-div">
        <img src={props.img} alt="" className={props.imgclass} />
      </div>

      <div className="mem-box-flex">
        <div className="heads">
          <div className="team">{props.work}</div>
        </div>
        <div className="contact-div">
          <a href={props.link}>
            <img src="./Images/linkedin.png" alt="" className="linkedin-img " />
          </a>
        </div>
      </div>
      <div className="mem-name">{props.memname}</div>
      <div className="mem-desc">{props.desc}</div>
    </div>
  );
};

export default Membox;
