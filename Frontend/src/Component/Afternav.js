import React from "react";
import { Link } from "react-router-dom";
import "../Css/Afternav.css";
const Afternav = () => {
  return (
    <div className="home-btn" data-aos="fade-in">
      <Link to="/home">
        <img src="./Images/Logo1.png" className="home-back-logo" alt="" />
      </Link>
    </div>
  );
};

export default Afternav;
