import React from "react";
import Sidebar from "./Sidebar";
import "./Css/Sidebar.css";
import "./Css/Hospitals.css";
import "./Css/Consultancy.css";
import Afternav from "./Component/Afternav";
import { Routes, Route } from "react-router-dom";
import PathalogyPage from "./PathalogyPage";
import FilteredPathalogy from "./FilteredPathalogy";
const Pathology = () => {
  return (
    <div className="Hospital-container">
      <div className="consultancy-mainpart">
        {/* <div className="consultancy-back-home">
          <Afternav/>
        </div> */}

        <div className="consultancy-form">
          <Routes>
            <Route path="/" element={<PathalogyPage />} />
            <Route path="/filtered-pathalogy" element={<FilteredPathalogy />} />
          </Routes>
        </div>
      </div>
      <div className="sidebar-container">
        <Sidebar
          title="GET ACCESS TO SPECIALIZED HOSPITALS FOR YOUR ISSUES"
          serv1="Hospitals"
          serv2="Pharmacy"
          link1="/Hospitals"
          link2="/Pharmacy"
        />
      </div>
    </div>
  );
};

export default Pathology;
