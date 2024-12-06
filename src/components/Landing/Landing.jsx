import React from "react";
import "./landing.scss";
import "../../App.scss";
import logo from "../../assets/images/logo.svg";

const Landing = () => {
  return (
    <section className="section landing">
      <div className="inner__wrapper">
        <img src={logo} alt="Clipboard Logo " />
        <h1>A history of everything you copy </h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="buttons">
          <a href="#" className="btn btn--ios">
            Download for iOS
          </a>
          <a
            href="#"
            className="btn btn--mac"
            style={{ background: "$Strong-Cyan" }}
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
