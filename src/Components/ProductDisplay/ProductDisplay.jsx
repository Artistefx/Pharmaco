import React, { useState } from "react";
import source1 from "./Assets/commitement1.webp";
import source2 from "./Assets/commitement2.webp";
import source3 from "./Assets/commitement3.webp";
import source4 from "./Assets/commitement4.webp";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const [quantity, setQuantity] = useState(1);
  const [source, setSource] = useState(source1);

  const handleImageClick = (e) => {
    setSource(e.target.src);
  }

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={source1} alt="" onClick={handleImageClick} />
          <img src={source2} alt="" onClick={handleImageClick}/>
          <img src={source3} alt="" onClick={handleImageClick}/>
          <img src={source4} alt="" onClick={handleImageClick}/>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={source} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>product name</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">100$</div>
          <div className="productdisplay-right-price-new">90$</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, odio ac vestibulum bibendum, nunc nisi tincidunt metus,
          eget tempor purus felis nec justo. Sed nec ex nec eros pharetra
          accumsan.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, odio ac vestibulum bibendum, nunc nisi tincidunt metus,
          eget tempor purus felis nec justo. Sed nec ex nec eros pharetra
          accumsan.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, odio ac vestibulum bibendum, nunc nisi tincidunt metus,
          eget tempor purus felis nec justo. Sed nec ex nec eros pharetra
          accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, odio ac vestibulum bibendum, nunc nisi tincidunt metus,
          eget tempor purus felis nec justo. Sed nec ex nec eros pharetra
          accumsan.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, odio ac vestibulum bibendum, nunc nisi tincidunt metus,
          eget tempor purus felis nec justo. Sed nec ex nec eros pharetra
          accumsan.
        </div>
        <div className="productdisplay-right-quantite">
            <h3>Sélectionner Quantité :</h3>
          <div className="productdisplay-right-quantite-selector">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <div className="productdisplay-right-buttons">
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
