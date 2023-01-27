import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <Link to="/terms">Terms & Conditions</Link> |
      <Link to="/privacy">Privacy Policy</Link> |
      <Link to="/contact">Contact Us</Link> |
      <Link to="/returns">Return Policy</Link>
      <div className="social-icons">
        <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
          <img src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg" alt="instagram logo" />
        </a>
        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
          <img src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg" alt="facebook logo" />
        </a>
        <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
          <img src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/1f/25/9e/1f259e4c-6362-711f-6b2a-7624b0d4684f/Icon-Production-0-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png" alt="twitter logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
