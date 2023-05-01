import React from "react";
import myImage from "./../assets/myImage.jpg";

export default function About() {
  return (
    <div className="small-container">
      <img src={myImage} alt="fuzzy headshot" className="fuzzyHead" />

      <p>
        I am a Full Stack Developer transiting into the world of tech from
        policing the streets of Houston, TX. A forever athlete who thrives in
        competitive enviorments yet blossoms within the confines of a team.
        Skills include React, MongoDb, Javascript,MySQL!
      </p>
    </div>
  );
}
