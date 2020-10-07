import React from "react";
import "../styles/Views.css";

function About() {
  return (
    <div className="aboutMain">
      <div className="aboutDoubleInner aboutDoubleInner-single">
        <h2>About Smoked!</h2>
        <p>
          Smoked Fish and Turkey was inspired by the taste it produced after
          smoking the meat for several hours. We started
          <b>
            <i> Smoked </i>
          </b>
          as a side hobby, not knowing the response would be unbelievably great.
        </p>
      </div>
      <div className="aboutDouble">
        <div className="aboutDoubleInner aboutDoubleInner-1">
          <h3>Why Smoked?</h3>
          <p>
            Smoked products have a natural benefit when it comes to consuption.
            Among the following benefits are included but are not limited to ...
          </p>
          <ul>
            <li>Making it last longer before use.</li>
            <li>It help the meat to look and taste fresh.</li>
            <li>The releasing of excess oil from the meat. </li>
          </ul>
        </div>
        <div className="aboutDoubleInner aboutDoubleInner-2">
          <h3>Try Smoked?</h3>
          <p>
            We think you should try our products and let the quality, freshness,
            and taste speak for itself.
            <br />
            Try something new today to understand the smoked and fresh tasting
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
