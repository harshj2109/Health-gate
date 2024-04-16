import React from "react";
import "../Css/Login.css";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { title, desc, linkname, secname } = props;
  return (
    <div className="main-navbar">
      <div className="main-box" data-aos="fade-out">
        <div className="login-navbar-title">{title}</div>
        <div className="login-navbar-desc">{desc}</div>
        <div className="login-navbar">
          <Link to={linkname} className="signup">
            <button className="signup-btn">{secname}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
