import React from "react";
import Homenav from "./Component/Homenav";
import "./Css/About.css";
import Membox from "./Component/Membox";
import Footer from "./Component/Footer";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-nav">
        <Homenav />
      </div>

      <div className="about-main-container">
        <div className="team-info" data-aos="zoom-out">
          Our team
        </div>
        <div className="team-desc" data-aos="zoom-out">
          Discover our team to know more about us
        </div>

        <div className="team-mem">
          <Membox
            link="https://www.linkedin.com/in/jainharsh0907/"
            imgclass="mem-img"
            img="./Images/p1.png"
            work="Frontend"
            memname="Harsh Jain"
            desc="Creating responsive and user-friendly interfaces, implementing designs provided by the UI/UX team, and optimizing website performance."
          />
          <Membox
            link="https://www.linkedin.com/in/angel-blessy-223947221/"
            imgclass="female-size"
            img="./Images/p2.png"
            work="Data collection"
            memname="Angel Blessy"
            desc=""
          />
          <Membox
            link="https://www.linkedin.com/in/palak-kabra-1a4011247/"
            imgclass="female-size"
            img="./Images/p2.png"
            work="Ui/Ux"
            memname="Palak Kabra"
            desc=" Creating wireframes, mockups, and prototypes for web and mobile interfaces, conducting user research, and ensuring a seamless user experience."
          />
          <Membox
            link="https://www.linkedin.com/in/shambhavi-sinha-28509324a/"
            imgclass="female-size"
            img="./Images/p2.png"
            work="Backend"
            memname="Shambhavi Sinha"
            desc="Developing server-side logic, database design, API integration, and ensuring backend functionality aligns with project requirements."
          />
        </div>
        <div className="team-quote">
          <i>
            "The nice thing about teamwork is that you always have others on
            your side"
          </i>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
