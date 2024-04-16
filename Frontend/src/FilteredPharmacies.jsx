import React, { useState } from 'react';
import sample from './Pharmacies.json';
import './Css/Hospitals.css' // Import your pharmacy data JSON file

const FilteredPharmacies = () => {
  // State variables for selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* Sidebar */}
      
      {/* Main Content */}
      <div>
        <h2>Filtered Pharmacies</h2>
        {/* Filter options */}
        <div >
          <label htmlFor="pharmacyFilter">Select Option:</label>
          <select
            id="pharmacyFilter"
            value={selectedOption}
            onChange={handleOptionChange}
            style={{ margin: '0 10px' }}
          >
            <option value="">All</option>
            <option value="24x7">24x7 Pharmacies</option>
            <option value="non-24x7">Non 24x7 Pharmacies</option>
          </select>
        </div>
        {/* Display filtered pharmacies */}
        <div>
          {/* Logic to display filtered pharmacies based on selected option */}
          {sample.pharmacies
            .filter(pharmacy => selectedOption === '' || pharmacy.type === selectedOption)
            .map(pharmacy => (
              <div key={pharmacy.id} style={{ marginBottom: '20px' }}>
                <h3>{pharmacy.name}</h3>
                <p>Type: {pharmacy.type}</p>
                <p>Location: {pharmacy.location}</p>
                {/* Add more pharmacy details as needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredPharmacies;
