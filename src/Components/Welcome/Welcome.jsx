import React from "react";
import pharmaco from "./Assets/pharmaco.webp";
import WelcomeOffer from "./WelcomeOffer";
import "./Welcome.css";
import suplement from "./Assets/Suplement.jpg";
import Carousel from "./Carousel";

const items = [
  {
    id: 1,
    image: suplement,
    name: "Product 1",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
  },
  {
    id: 2,
    image: suplement,
    name: "Product 2",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
  },
  {
    id: 3,
    image: suplement,
    name: "Product 3",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
  },
  {
    id: 4,
    image: suplement,
    name: "Product 4",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
  },
  {
    id: 5,
    image: suplement,
    name: "Product 5",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
  },
];

const Welcome = () => {
  return (
    <div className="Welcome">
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
          <WelcomeOffer
            link="http://localhost:3000/"
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link="http://localhost:3000/"
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link="http://localhost:3000/"
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link="http://localhost:3000/"
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
        </div>
      </div>
      <div className="NouveautContainer">
        <h2>Nos Nouveautés</h2>
        <Carousel items={items} />
      </div>
    </div>
  );
};

export default Welcome;
