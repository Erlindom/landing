import React from "react";
import "../About/About.css";
import Features from "../Features/Features";

function About() {
  return (
    <section className="about-section">
      <div>
        <h2 className="about-title">
          What's different about <br /> Manage?
        </h2>
        <p className="about-text">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our <br /> software is tailor-made for modern digital
          <br />
          product teams.
        </p>
      </div>
      <div>
        <Features number="01" title="Track company-wide progress">
          See how your day-to-day tasks fit into the winder vision. <br /> Go
          from tracking progress at the milestone level all the <br /> way donde
          to the smallest of details. Never lose sight of <br /> the bigger
          picture again.
        </Features>
        <Features number="02" title="Advanced built-in reports">
          Set internal delivery estimates and track progress toward <br />
          company goals. Our customisable dashboard helps you <br /> build out
          the reports you need to keep key stakeholders <br /> informed.
        </Features>
        <Features number="03" title="Everything you need in one place">
          Stop jumping from one service to another to <br /> communicate, store
          files, track tasks amd share <br /> documents. Manage offers an
          all-in-one team <br /> productivity solution.
        </Features>
      </div>
    </section>
  );
}

export default About;
