import React from "react";
import "../Features/Features.css";

function Features(props) {
  return (
    <div className="features">
      <div>
        <p className="number">{props.number}</p>
      </div>
      <div>
        <h3 className="feature-title">{props.title}</h3>
        <p className="feature-text">{props.children}</p>
      </div>
    </div>
  );
}

export default Features;
