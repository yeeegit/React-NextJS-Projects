import React from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../../assets/socials/instagram.svg';
import Facebook from '../../assets/socials/facebook.svg';
import Linkedin from '../../assets/socials/linkedin.svg';
import Twitter from '../../assets/socials/twitter.svg';
import github from '../../assets/socials/github.svg';
import '../../styles/homePageStyles/footer.css';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="main-footer">

        <div className="left-section">
          <h2>Logo</h2>
          <Link className="links" to="/about-us">
            Who We Are
          </Link>
          <Link className="links" to="/about-us">
            Contact Us
          </Link>
        </div>
        <div className="middle-section">
          <h2>Our Socials</h2>
          <div className="footer-imgs">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="right-section">
          <h2>FAQ</h2>
          <ul>
            <li>
              <Link className="links" to="/help/delivery">
                Delivery Date
              </Link>
            </li>
            <li>
              <Link className="links" to="/help/payment">
                Payment Security and Methods
              </Link>
            </li>
            <li>
              <Link className="links" to="/help/warranty">
                Product Warranties
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-bottom">
        <p>Copyright &copy; 2023 - All rights reserved</p>
        <a
          className="links"
          target="_blank"
          href="https://github.com/latids"
        >
          made by <img src={github} alt="github icon" />
        </a>
      </div>
      
    </div>
  );
};

export default Footer;
