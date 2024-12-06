import React from "react";
import "./download-coa.scss";

const DownloadCOA = () => {
  return (
    <section className="section download-coa">
      <div className="inner__wrapper">
        {/* <img src={logo} alt="Clipboard Logo " /> */}
        <h2>Clipboard for iOS and Mac OS </h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
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

export default DownloadCOA;
