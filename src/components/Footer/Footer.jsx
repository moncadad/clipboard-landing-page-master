import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="container__wrapper footer">
      <div className="inner__wrapper">
        <img src={logo} alt="Clipboard" className="logo-clipboard" />
        <div className="inside__links">
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Press Kit</a>
            </li>
          </ul>
          <ul>
            <a href="#">Install Guide</a>
          </ul>
        </div>
        <div className="outside__links">
          <a href="https://www.facebook.com" target="_blank">
            <FaSquareFacebook alt="Facebook.com" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter alt="Twitter.com" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram alt="Instagram.com" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
