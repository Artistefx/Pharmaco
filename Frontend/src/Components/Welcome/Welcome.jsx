import React from "react";
/* import pharmaco from "./Assets/pharmaco.webp"; */
import WelcomeOffer from "./WelcomeOffer";
import "./Welcome.css";
import suplement from "./Assets/Suplement.jpg";
import comm1 from "./Assets/commitement1.webp";
import comm2 from "./Assets/commitement2.webp";
import comm3 from "./Assets/commitement3.webp";
import comm4 from "./Assets/commitement4.webp";
import Carousel from "./Carousel";
import AnimatedCard from "./AnimatedCard";
import ShuffleHero from "./ShuffleHero";


const items = [
  {
    id: 1,
    image: suplement,
    name: "Product 1",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
    quantite: 1,
  },
  {
    id: 2,
    image: suplement,
    name: "Product 2",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
    quantite: 1,
  },
  {
    id: 3,
    image: suplement,
    name: "Product 3",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
    quantite: 1,
  },
  {
    id: 4,
    image: suplement,
    name: "Product 4",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
    quantite: 1,
  },
  {
    id: 5,
    image: suplement,
    name: "Product 5",
    description: "Description of product 1",
    priceReduction: 100,
    priceOriginal: 200,
    TauxReduction: "50%",
    quantite: 1,
  },
];

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="hero">
        <ShuffleHero />
      </div>
      <div className="OffreContainer1">
        <h2>Nos Offres Du Mois</h2>
        <div className="OffreContainer">
          <WelcomeOffer
            link={`http://localhost:3000/productPage/${1}`}
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link={`http://localhost:3000/productPage/${2}`}
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link={`http://localhost:3000/productPage/${3}`}
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
          <WelcomeOffer
            link={`http://localhost:3000/productPage/${4}`}
            img={suplement}
            alt="pharmaco"
            title="Antibiotiques"
            description="Les antibiotiques sont des médicaments qui détruisent ou bloquent la croissance des bactéries."
          />
        </div>
      </div>
      <div className="NouveautContainer">
        <h2>Nos Réductions</h2>
        <Carousel items={items} />
      </div>
      <div className="ComitementContainer1">
        <h2>Nos Engagements</h2>
        <div className="ComitementContainer">
          <AnimatedCard
            title="Conseils Professionnels"
            description="Conseils de santé par des pharmaciens qualifiés."
            image={comm1}
          />
          <AnimatedCard
            title="Confidentialité et Sécurité"
            description=" Protection rigoureuse de vos données personnelles."
            image={comm2}
          />
          <AnimatedCard
            title="Livraison Rapide"
            description="Vos produits de santé livrés rapidement."
            image={comm3}
          />
          <AnimatedCard
            title="Service Client"
            description="Assistance attentive et réactive pour vous."
            image={comm4}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
