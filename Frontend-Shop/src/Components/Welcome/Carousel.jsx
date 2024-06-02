import React from "react";
import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // This is your custom CSS file for the carousel.
import { CartContext } from "../Panier/CartProvider";

const Carousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on the number of items you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    const item1 = {
      id: item.id,
      nom: item.nom,
      quantite: 1,
      priceReduction: item.priceReduction,
      priceOriginal: item.priceOriginal,
      image: item.image1
    };
    addToCart(item1);
  };

  return (
    <Slider {...settings}>
      {products.map((item) => (
        <div key={item.id} className="carousel-item">
          <div className="card">
            <img src={item.image1} alt={item.nom} className="product-image" />
            <h3 className="product-name">{item.nom}</h3>
            {/* <p className="description">{item.description}</p> */}
            <div className="price-container">
              <span>
                <p className="new-price">{item.priceReduction} Dh</p>
                <p className="original-price">{item.priceOriginal} Dh</p>
              </span>
              <div className="discount-tag">{Math.round(((item.priceOriginal - item.priceReduction) / item.priceOriginal) * 100)}%</div>
            </div>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Ajouter au panier</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
