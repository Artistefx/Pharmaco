import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // This is your custom CSS file for the carousel.

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on the number of items you want to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          <div className="card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="description">{item.description}</p>
            <div className="price-container">
              <span>
                <p className="new-price">{item.priceReduction} Dh</p>
                <p className="original-price">{item.priceOriginal} Dh</p>
              </span>
              <div className="discount-tag">{item.TauxReduction}</div>
            </div>
            <button className="add-to-cart-btn">Ajouter au panier</button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
