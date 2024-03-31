import React from "react";
import pharmaco from "./Assets/pharmaco.webp";
import WelcomeOffer from "./WelcomeOffer";
import "./Welcome.css";
import suplement from "./Assets/Suplement.jpg";

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
      <div className="OffreContainer">
        <WelcomeOffer link="http://localhost:3000/" img={suplement} alt="pharmaco" title="Antibiotiques" description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries." />
        <WelcomeOffer link="http://localhost:3000/" img={suplement} alt="pharmaco" title="Antibiotiques" description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries." />
        <WelcomeOffer link="http://localhost:3000/" img={suplement} alt="pharmaco" title="Antibiotiques" description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries." />
        <WelcomeOffer link="http://localhost:3000/" img={suplement} alt="pharmaco" title="Antibiotiques" description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries." />
      </div>
    </div>
  );
};

export default Welcome;
