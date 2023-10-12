import React from 'react';
import omdenaLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="omdena__footer section__padding">
    <div className="omdena__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="omdena__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="omdena__footer-links">
      <div className="omdena__footer-links_logo">
        <img src={omdenaLogo} alt="omdena_logo" />
        <p>Bhopal,India <br /> All Rights Reserved</p>
      </div>
      <div className="omdena__footer-links_div">
        <h4>Links</h4>
        <p>Projects</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="omdena__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="omdena__footer-links_div">
        <h4>Get in touch</h4>
        <p>Bhopal,India</p>
        <p>1234567890</p>
        <p>omdena@vitbhopal.ac.in</p>
      </div>
    </div>

    <div className="omdena__footer-copyright">
      <p>@2023 Omdena VIT Bhopal Local Chapter. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;