import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import HospitalsPage from "./HospitalsPage"; // Import HospitalsPage component
import Pharmacy from "./Pharmacy";

import About from "./About";
import Pathology from "./Pathalogy";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // State to store fetched user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 150,
      delay: 200,
    });
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        {/* Pass userData as prop to HospitalsPage component */}
        <Route path="/About" element={<About />} />
        <Route
          path="/Hospitals"
          element={<HospitalsPage userData={userData} />}
        />
        <Route path="/Pharmacy" element={<Pharmacy />} />
        <Route path="/Pathology" element={<Pathology />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
