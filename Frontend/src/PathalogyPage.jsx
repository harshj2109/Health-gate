import React, { useState } from 'react';
import sample from './pathalogy.json'; // Import your pathology data JSON file
import Sidebar from './Sidebar'; // Import the Sidebar component
import Afternav from './Component/Afternav';

const  PathalogyPage = () => {
  // State variables for selected city and specialty
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false); // State to track filter application

  // Function to handle changes in selected city
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    // Reset selected specialty when city changes
    setSelectedSpecialty('');
  };

  // Function to handle changes in selected specialty
  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
  };

  // Function to handle applying filters
  const applyFilters = () => {
    // Implement logic to handle filter application
    setIsFilterApplied(true);
    console.log('Filters applied');
  };

  return (
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
            <label data-aos="fade-up" className='form-label' htmlFor="specialtyFilter">Specialty:</label>
            <select data-aos="fade-up" className='input-select' id="specialtyFilter" value={selectedSpecialty} onChange={handleSpecialtyChange}>
              <option className='input-option' value="">All</option>
              <option className='input-option' value="Blood Tests">Blood Tests</option>
              <option className='input-option' value="Urine Tests">Urine Tests</option>
            
              <option className='input-option' value="Histopathology">Histopathology</option>
              <option className='input-option' value="Microbiology">Microbiology</option>
              <option className='input-option' value="Hematology">Hematology</option>
              <option className='input-option' value="Serology">Serology</option>
              <option className='input-option' value="X-rays">X-rays</option>
              <option className='input-option' value="CT scans">CT scans</option>
              <option className='input-option' value="MRI">MRI</option>
            </select>
            <button data-aos="fade-up" className='hospital-btn' onClick={applyFilters}>Submit</button>
          </div>
        )}
        {isFilterApplied && (
          <div className="hospital-list">
            {sample.city_details && sample.city_details.map(city => (
              (selectedCity === '' || selectedCity === city.city_name) && (
                <div key={city.city_name}>
                  <div className="citydiv" data-aos="fade-in">
                  <div className="cityname heads">City &nbsp;- &nbsp; </div>
                  <div className='sub-heads'>{city.city_name}</div>
                  </div>
                  {Object.entries(city.pathalogy).map(([specialty, pathalogyList]) => (
                    (selectedSpecialty === '' || selectedSpecialty === specialty) && (
                      <div key={specialty}>
                        <div className="deptdiv" data-aos="fade-in">
                        <div className="deptname heads">Speciality &nbsp;- &nbsp;</div>
                        <div className='sub-heads'>{specialty}</div>
                        </div>
                        <ul>
                          {pathalogyList.map(pathalogy => (
                            <li className='info-list' key={pathalogy.name} data-aos="slide-right">
                             <div className="hospital-img">
                              <img src={pathalogy.image} alt="" className='pharmacy-img' />
                            </div>
                            <div className="main-hosp-info">
                            <div className='hospital-name'>{pathalogy.name}</div> 
                            <div className="hosp-address"><span className="address-head">Address -</span> {pathalogy.address}</div>
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

export default PathalogyPage;