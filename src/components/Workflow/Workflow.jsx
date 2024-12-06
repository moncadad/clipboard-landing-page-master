import React from "react";
import "./workflow.scss";
import blacklist from "../../assets/images/icon-blacklist.svg";
import text from "../../assets/images/icon-text.svg";
import preview from "../../assets/images/icon-preview.svg";

const Workflow = () => {
  text;
  return (
    <div>
      <section className="section workflow">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
        <ul className="options__wrapper">
          <li className="option">
            <img src={blacklist} alt="Blacklist Icon" className="icon" />
            <h3> Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </li>
          <li>
            <img src={text} alt="Text Icon" className="icon" />
            <h3>Plain text snippets </h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </li>

          <li>
            <img src={preview} alt="Preview Icon" className="icon" />
            <h3>Sneak preview </h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Workflow;
