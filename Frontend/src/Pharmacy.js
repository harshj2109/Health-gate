import React from "react";
import Sidebar from "./Sidebar";
import "./Css/Sidebar.css";
import "./Css/Pharmacy.css";
import "./Css/Hospitals.css";
import Afternav from "./Component/Afternav";
import PharmacyPage from "./PharmacyPage";
import FilteredPharmacies from "./FilteredPharmacies";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const Pharmacy = () => {
  return (
    <div className="Hospital-container">
      <div className="pharmacy-part">
        <div className="pharmacy-main-conatiner">
          <Routes>
            <Route path="/" element={<PharmacyPage />} />
            <Route
              path="/filtered-pharmacies"
              element={<FilteredPharmacies />}
            />
          </Routes>
        </div>
      </div>
      <div className="sidebar-container">
        <Sidebar
          title="GET ACCESS TO SPECIALIZED HOSPITALS FOR YOUR ISSUES"
          serv1="Hospitals"
          serv2="Pathology"
          link1="/Hospitals"
          link2="/Pathology"
        />
      </div>
    </div>
  );
};

export default Pharmacy;
