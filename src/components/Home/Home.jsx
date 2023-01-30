import React from "react";
import "../Home/Home.css";
import Started from "../StartedButton/Started";
import Ilustration from "../../img/illustration-intro.svg";

function Home() {
  return (
    <div className="home">
      <div className="information-home">
        <div>
          <h1 className="title-home">
            Bring everyone <br /> together to build <br /> better products.
          </h1>
          <p className="text-home">
            Manage makes it simple for software teams <br /> to paln day-to-day
            tasks while keeping the <br /> larger team goals in view.
          </p>
        </div>
        <div>
          <Started />
        </div>
      </div>
      <div className="ilustration-img">
        <img className="ilustration" src={Ilustration} alt="" />
      </div>
    </div>
  );
}

export default Home;
