import React from "react";
import companyLogo from "../Assets/companyLogo.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={companyLogo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>Registered Office</span>
          <span>HIG / B-26, Madhav Baug Colony,</span>
          <span>P.O: Azad Nagar,</span>
          <span>Mango, Jamshedpur – 832 110.</span>
          <span>Telephone : +91 - 657 – 2360507</span>
          <span>Mobile :+91– 9431185447 / 7209433313</span>
          <span>Email : agrawal_rajat@yahoo.com</span>
        </div>
        <div className="footer-section-columns">
          {/*}
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          */}
        </div>
      </div>
    </div>
  );
};

export default Footer;