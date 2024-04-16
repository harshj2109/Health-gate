import React, { useState } from 'react';
import sample from './pathalogy.json'; // Import your pathology data JSON file

const FilteredPathalogy = () => {
  // State variables for selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}

      {/* Main Content */}
      <div style={{ flex: '1', padding: '20px' }}>
        <h2>Filtered Pathalogy</h2>
        {/* Filter options */}
        <div>
          <label htmlFor="pathalogyFilter">Select Option:</label>
          <select
            id="pathalogyFilter"
            value={selectedOption}
            onChange={handleOptionChange}
            style={{ margin: '0 10px' }}
          >
            <option value="">All</option>
            <option value="Blood Tests">Blood Tests</option>
            <option value="Urine Tests">Urine Tests</option>
            <option value="Immunology Tests">Immunology Tests</option>
            <option value="Histopathology">Histopathology</option>
            <option value="Microbiology">Microbiology</option>
            <option value="Hematology">Hematology</option>
            <option value="Serology">Serology</option>
            <option value="X-rays">X-rays</option>
            <option value="CT scans">CT scans</option>
            <option value="MRI">MRI</option>
          </select>
        </div>
        {/* Display filtered pathologies */}
        <div>
          {/* Logic to display filtered pathologies based on selected option */}
          {sample.pathalogy
            .filter(pathalogy => selectedOption === '' || pathalogy.specialty === selectedOption)
            .map(pathalogy => (
              <div key={pathalogy.id} style={{ marginBottom: '20px' }}>
                <h3>{pathalogy.name}</h3>
                <p>Speciality: {pathalogy.specialty}</p>
                <p>Location: {pathalogy.location}</p>
                {/* Add more pathology details as needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredPathalogy;
