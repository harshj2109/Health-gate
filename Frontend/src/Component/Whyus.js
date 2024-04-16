import { GiHospital } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Whyus() {
  return (
    <>
      <div className="why-container">
        <div className="whyus-title">Why choose us?</div>
        <div className="why-us-box">
          <Link to="/Hospitals" className="why-us-feature" data-aos="fade-up">
            <GiHospital className="why-us-icon" />
            <div className="why-us-name">
              Confidently Choose Hospitals with our help
            </div>
            <IoIosArrowDroprightCircle className="why-us-arrow" />
          </Link>

          <Link to="/About" className="why-us-feature" data-aos="fade-up">
            <FaHeartbeat className="why-us-icon" />
            <div className="why-us-name">Get to learn more about us</div>
            <IoIosArrowDroprightCircle className="why-us-arrow" />
          </Link>

          <Link to="/Pharmacy" className="why-us-feature" data-aos="fade-up">
            <MdFamilyRestroom className="why-us-icon" />
            <div className="why-us-name">
              Pharmacy access at your fingertips
            </div>
            <IoIosArrowDroprightCircle className="why-us-arrow" />
          </Link>

          <Link to="/Consultancy" className="why-us-feature" data-aos="fade-up">
            <MdOutlineMobileFriendly className="why-us-icon" />
            <div className="why-us-name">
              Easy access to Instant consultations
            </div>
            <IoIosArrowDroprightCircle className="why-us-arrow" />
          </Link>
        </div>
      </div>
    </>
  );
}
