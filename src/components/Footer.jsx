import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <Link to="">Terms & Conditions</Link> |
      <Link to="">Privacy Policy</Link> |
      <Link to="/contact">Contact Us</Link> |
      <Link to="/returns">Return Policy</Link>
      <div className="social-icons">
        <a href="http://instagram.com" rel="noopener noreferrer" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="instagram logo" />
        </a>
        <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
          <img src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg" alt="facebook logo" />
        </a>
        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png" alt="twitter logo" />
        </a>
      </div>
    </div>
  );
};


export default Footer;
