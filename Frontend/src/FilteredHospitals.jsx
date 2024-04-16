// FilteredHospitals.jsx
import React from 'react';

const FilteredHospitals = ({ filteredHospitals }) => {
  return (
    <div className="filtered-hospitals-container">
      <h2>Filtered Hospitals</h2>
      {filteredHospitals.length > 0 ? (
        // Display filtered hospitals
        filteredHospitals.map(hospital => (
          <div key={hospital.name}>
            <strong>{hospital.name}</strong> - {hospital.address}
          </div>
        ))
      ) : (
        // If no hospitals found, display nothing
        null
      )}
    </div>
  );
};

export default FilteredHospitals;
