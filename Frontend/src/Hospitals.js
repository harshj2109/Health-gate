import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Css/Hospitals.css';
import Sidebar from './Sidebar';
import './Css/Sidebar.css';
import HospitalsPage from './HospitalsPage'; // Import the HospitalsPage component
import FilteredHospitals from './FilteredHospitals'; // Import the FilteredHospitals component
import Afternav from './Component/Afternav';

const Hospitals = () => {
  return (
    <div className="Hospital-container">
      <Router>
        {/* <Afternav/> */}
        <div className="hospital-content">
          <Routes>
            {/* Define routes for HospitalsPage and FilteredHospitals */}
            <Route path="/" element={<HospitalsPage />} />
            <Route path="/filtered-hospitals" element={<FilteredHospitals />} />
          </Routes>
        </div>
       
      </Router>
    </div>
  );
};

export default Hospitals;
