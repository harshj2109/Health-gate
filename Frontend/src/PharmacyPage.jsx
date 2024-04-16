import React, { useState } from 'react';
import sample from './Pharmacies.json'; // Import your pharmacy data JSON file
import Afternav from './Component/Afternav';
import './Css/Hospitals.css'

const PharmacyPage = () => {
  // State variables for selected city and 24x7 status
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false); // State to track filter application

  // Function to handle changes in selected city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    // Reset selected status when city changes
    setSelectedStatus('');
  };

  // Function to handle changes in selected status
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Function to handle applying filters
  const applyFilters = () => {
    // Implement logic to handle filter application
    setIsFilterApplied(true);
    console.log('Filters applied');
  };

  return (
    <div >
      
      <div>
        <div className="pharmacy-select">
        {!isFilterApplied && (
          <div className="pharmacy-filters">
            <div className="homenav">

<Afternav/>
</div>
            <label data-aos="fade-up" className='form-label' htmlFor="cityFilter">City:</label>
            <select data-aos="fade-up" className='input-select' id="cityFilter" value={selectedCity} onChange={handleCityChange}>
              <option className='input-option' value="">All</option>
              {sample.city_details && sample.city_details.map(city => (
                <option className='input-option' key={city.city_name} value={city.city_name}>{city.city_name}</option>
              ))}
            </select>
            <label data-aos="fade-up" className='form-label' htmlFor="statusFilter">24x7 Status:</label>
            <select data-aos="fade-up" className='input-select' id="statusFilter" value={selectedStatus} onChange={handleStatusChange}>
              <option className='input-option' value="">All</option>
              <option className='input-option' value="24X7">24x7</option>
              <option className='input-option' value="non-24x7">Non 24x7</option>
            </select>
            <button  data-aos="fade-up " className='hospital-btn' onClick={applyFilters}>Submit</button>
          </div>
        )}
        </div>
        {isFilterApplied && (
          <div className="hospital-list">
            {sample.city_details && sample.city_details.map(city => (
              (selectedCity === '' || selectedCity === city.city_name) && (
                <div key={city.city_name}>
                  <div className="citydiv" data-aos="fade-in">
                  <div className="cityname heads">City &nbsp;- &nbsp; </div>
                  <div className='sub-heads'>{city.city_name}</div>
                  </div>
                  {Object.entries(city.pharmacies).map(([status, pharmacies]) => (
                    (selectedStatus === '' || selectedStatus === status) && (
                      <div key={status}>
                        <div className="deptdiv" data-aos="fade-in">
                        <div className="deptname heads">Department &nbsp;- &nbsp;</div>
                        <div className='sub-heads'>{status}</div>
                        </div>
                        <ul className='dept-ul'>
                          {pharmacies.map(pharmacy => (
                            <li data-aos="slide-right" className='info-list' key={pharmacy.name}>
                            <div className="hospital-img">
                              <img src={`./Images/${pharmacy.image}`} alt="" className='pharmacy-img' />
                            </div>
                            <div className="main-hosp-info">
                            <div className='hospital-name'>{pharmacy.name}</div> 
                            <div className="hosp-address"><span className="address-head">Address -</span> {pharmacy.address}</div>
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
    </div>
  );
};

export default PharmacyPage;
