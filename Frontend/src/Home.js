import React from "react";
import "./Css/Home.css";
import Homenav from "./Component/Homenav";
import Herosection from "./Component/Herosection";
import FrequentlySearch from "./Component/FrequentlySearch";
import Whyus from "./Component/Whyus";
import Footer from "./Component/Footer";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <Homenav />
        <Herosection />
      </div>
      <div className="home-second-container">
        <FrequentlySearch />
        <Whyus />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
