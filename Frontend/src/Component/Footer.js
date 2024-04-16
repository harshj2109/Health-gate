import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="footer-container">
        <div className="footer-boxes">Design and Developed by team 11</div>

        <div className="footer-boxes flex">
          <div className="names">Harsh Jain - 2241317</div>
          <div className="names">Angel Blessy - 2241356</div>
          <div className="names">Palak Kabra - 2241364</div>
          <div className="names">Shambhavi Sinha - 2241366</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
