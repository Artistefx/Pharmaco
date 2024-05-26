import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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

const Welcome = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/produit/find/reduction")
      .then((res) => {
        setProducts(res.data);
      });
    axios.get("http://localhost:8080/api/v1/produit/find/categorie/offre").then((res) => {
      setOffers(res.data);
    });
  }, []);

  return (
    <div className="Welcome">
      <div className="hero">
        <ShuffleHero />
      </div>
      <div className="OffreContainer1">
        <h2>Nos Offres Du Mois</h2>
        <div className="OffreContainer">
          {offers.map((offer) => (
            <WelcomeOffer
              link={`http://localhost:3000/productPage/${offer.id}`}
              img={offer.image1}
              alt={offer.nom}
              title={offer.nom}
              description={offer.description}
            />
          ))}
        </div>
      </div>
      <div className="NouveautContainer">
        <h2>Nos Réductions</h2>
        <Carousel products={products} />
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
