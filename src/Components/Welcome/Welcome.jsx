import React from "react";
import pharmaco from "../Images/pharmaco.webp";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="WelcomeImg">
      <div className="ImageContainer">
        <img src={pharmaco} alt="pharmaco" />
      </div>
      <div className="ButtonContainer">
        <a href="http://localhost:3000/">Antibiotiques</a>
        <a href="http://localhost:3000/">Anti-inflammatoires</a>
        <a href="http://localhost:3000/">suppléments</a>
        <a href="http://localhost:3000/">Equipement</a>
      </div>
    </div>
  );
};

export default Welcome;
