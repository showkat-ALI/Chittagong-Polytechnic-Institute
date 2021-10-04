import React from "react";
import "./Footer.css";
// footer-bulider
const Footer = () => {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-items">
          <h1>Chittagong polytechnic Institute</h1>
          <p>Go for the quest of knowledge</p>
        </div>

        <div className="footer-items">
          <h3>Quick Links</h3>
          <div className="border1"></div>
          <ul>
            <a href="/">
              <li>Governmentof Bangladeh</li>
            </a>
            <a href="/">
              <li>Prime ministars Office</li>
            </a>
            <a href="/">
              <li>Ministry of education</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h3>All Authority</h3>
          <div className="border1"></div>
          <ul>
            <a href="/">
              <li>Directorate of Tech. Edu.</li>
            </a>
            <a href="/">
              <li>BTEB</li>
            </a>
            <a href="/">
              <li>DUET</li>
            </a>
          </ul>
        </div>

        <div className="footer-items">
          <h3>Contact us</h3>
          <div className="border1"></div>
          <ul>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>123456789
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com
            </li>
          </ul>

          <div className="social-media">
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fab fa-google-plus-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright &copy; Chittagong polytechnic Institute
      </div>
    </div>
  );
};

export default Footer;
