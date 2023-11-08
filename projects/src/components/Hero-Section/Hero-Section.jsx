import React from "react";
import "./Hero-Section.css";
import headphone from "../../assets/headphone.png";
const HeroSection = () => {
  return (
    <div className="hero">
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          className="heroImage"
          src={headphone}
          width={212}
          alt="headphone"
        />
      </div>
    </div>
  );
};

export default HeroSection;
