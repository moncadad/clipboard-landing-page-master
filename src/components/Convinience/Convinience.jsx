import React from "react";
import "./convinience.scss";
import device from "../../assets/images/image-devices.png";
const Convinience = () => {
  return (
    <section className="section convinience">
      <div className="inner__wrapper">
        <h2> Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={device} alt="Device Tablet and Cellphone" />
      </div>
    </section>
  );
};

export default Convinience;
