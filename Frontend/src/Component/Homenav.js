import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";

export default function Homenav() {
  const [ham, setham] = useState("ham-menu");
  const [btn, setbtn] = useState(true);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  function hamburger() {
    setham((oldvalue) => {
      return oldvalue === "ham-menu" ? "ham-menu active" : "ham-menu";
    });
    setbtn((oldvalue) => {
      return !oldvalue;
    });
  }

  return (
    <div className="home-nav" data-aos="fade-in">
      <div className="home-nav-img">
        <Link to="/Home">
          <img src="./Images/Logo.png" alt="" className="home-nav-logo" />
        </Link>{" "}
      </div>

      <div className="home-nav-items">
        <Link to="/Hospitals" className="nav-links">
          Hospitals
        </Link>
        <Link to="/Pharmacy" className="nav-links">
          Pharmacy
        </Link>
        <Link to="/Pathology" className="nav-links">
          Pathology
        </Link>
        <Link to="/About" className="nav-links">
          About Us
        </Link>
      </div>

      <Link className="profile-btn">
        <FaRegUserCircle className="usericon" />
        <div className="greeting-user">Welcome, {username}</div>
      </Link>

      <div className="hamburger-menu">
        {/* < onClick={hamburger}  className="hamburger-click"/> */}

        {btn ? (
          <GiHamburgerMenu className="hamburger-click" onClick={hamburger} />
        ) : (
          <GiSplitCross className="hamburger-click" onClick={hamburger} />
        )}
      </div>

      <div className={ham}>
        <div className="insider-ham">
          <Link className="ham-user-profile">
            <FaRegUserCircle className="usericon" />
            <div className="ham-user-title">Welcome,user</div>
          </Link>

          <div className="ham-links">
            <Link onClick={hamburger} className="ham-insider-link">
              Hospitals
            </Link>
            <Link onClick={hamburger} className="ham-insider-link">
              Pharmacy
            </Link>
            <Link onClick={hamburger} className="ham-insider-link">
              Consultations
            </Link>
            <Link onClick={hamburger} className="ham-insider-link">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
