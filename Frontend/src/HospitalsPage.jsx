import React, { useState } from 'react';
import sample from './Database_hospitals.json'; // Import your hospital data JSON file
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Css/Hospitals.css'
import './Component/Afternav';
import Afternav from './Component/Afternav';
const HospitalsPage = () => {
  // State variables for selected city and department
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false); // State to track filter application

  // Function to handle changes in selected city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    // Reset selected department when city changes
    setSelectedDepartment('');
  };

  // Function to handle changes in selected department
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Function to handle applying filters
  const applyFilters = () => {
    // Implement logic to handle filter application
    setIsFilterApplied(true);
    console.log('Filters applied');
  };

  return (
      
    <div className="HospitalsPage-container">
      
      {/* Main Content */}
      <div className="content-container">
        {!isFilterApplied && (
          <div className="hospital-filters">
            <div className="homenav">

          <Afternav/>
          </div>
            <label className='form-label' htmlFor="cityFilter" data-aos='fade-up'>City</label>
            <select data-aos='fade-up' className='input-select' id="cityFilter" value={selectedCity} onChange={handleCityChange}>
              <option className='input-option' value="">All</option>
              {sample.city_details.map(city => (
                <option className='input-option' key={city.city_name} value={city.city_name}>{city.city_name}</option>
              ))}
            </select>
            <label data-aos='fade-up' className='form-label' htmlFor="departmentFilter">Department</label>
            <select data-aos='fade-up' className='input-select' id="departmentFilter" value={selectedDepartment} onChange={handleDepartmentChange}>
              <option className='input-option' value="">All</option>
              {sample.city_details
                .filter(city => selectedCity === '' || selectedCity === city.city_name)
                .flatMap(city => Object.keys(city.hospitals))
                .map(department => (
                  <option key={department} value={department}>{department}</option>
                ))}
            </select>
            <button data-aos='fade-up' className='hospital-btn' onClick={applyFilters}>Submit</button>
          </div>
        )}
        {isFilterApplied && (
          <div className="hospital-list">
            {sample.city_details.map(city => (
              (selectedCity === '' || selectedCity === city.city_name) && (
                <div key={city.city_name}>
                  <div className="citydiv" data-aos="fade-in">
                  <div className="cityname heads">City &nbsp;- &nbsp; </div>
                  <div className='sub-heads'>{city.city_name}</div>
                  </div>
                  {Object.entries(city.hospitals).map(([specialization, hospitals]) => (
                    (selectedDepartment === '' || selectedDepartment === specialization) && (
                      <div key={specialization}>
                        <div className="deptdiv" data-aos="fade-in">
                        <div className="deptname heads">Department &nbsp;- &nbsp;</div>
                        <div className='sub-heads'>{specialization}</div>
                        </div>
                        <ul className='dept-ul'>
                          {hospitals.map(hospital => (
                            <li className='info-list' key={hospital.name} data-aos="slide-right">
                              <div className="hospital-img">
                                <img src={`./Images/${hospital.image_name}`} alt="" className='hosp-image'/>
                              </div>
                              <div className="main-hosp-info">
                              <div className='hospital-name'>{hospital.name}</div> 
                              <div className="hosp-address"><span className="address-head">Address -</span> {hospital.address}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  ))}
                </div>
              )
            ))}
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="sidebar-container">
        <Sidebar
          title="GET ACCESS TO SPECIALIZED HOSPITALS FOR YOUR ISSUES"
          serv1="Pharmacies"
          serv2="Pathology"
          link1="/Pharmacy"
          link2="/Pathology"
          className="sidebar-container"
        />
      </div>
    </div>
  );
};

export default HospitalsPage;
