import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="side-nav-bar" data-aos="slide-left">
      <div className="inside-nav-box">
        <div className="side-nav-title">{props.title}</div>

        <div className="other-service">
          <div className="fixed-line">Our other services</div>
          <Link to={props.link1}>
            <button className="services-btn">{props.serv1}</button>
          </Link>

          <Link to={props.link2}>
            <button className="services-btn">{props.serv2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
