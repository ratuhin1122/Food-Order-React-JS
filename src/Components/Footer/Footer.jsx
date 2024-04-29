import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            aliquam nam ipsum soluta possimus ab.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Contact US</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+8801322297157</li>
            <li>ruhulamintuhin715@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright-text">
        Copyrights 2024 &copy; All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
