import React from "react";
import "../Testimonial/Testimonial.css";

function Testimonial(props) {
  return (
    <>
      <div className="testimonial-bg">
        <div>
          <img
            className="avatar"
            src={require(`../../img/${props.avatar}.png`)}
            alt=""
          />
          <h4 className="avatar-name">{props.avatarName}</h4>
        </div>
        <div>
          <p className="testimonial-text">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
