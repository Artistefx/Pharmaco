import React, { useState } from "react";
import source1 from "./Assets/commitement1.webp";
import source2 from "./Assets/commitement2.webp";
import source3 from "./Assets/commitement3.webp";
import source4 from "./Assets/commitement4.webp";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [source, setSource] = useState(source1);

  const handleImageClick = (e) => {
    setSource(e.target.src);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={source1} alt="" onClick={handleImageClick} />
          <img src={source2} alt="" onClick={handleImageClick} />
          <img src={source3} alt="" onClick={handleImageClick} />
          <img src={source4} alt="" onClick={handleImageClick} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={source} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{props.product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{props.product.oldPrice}DH</div>
          <div className="productdisplay-right-price-new">{props.product.newPrice}DH</div>
        </div>
        <div className="productdisplay-right-description mb-3">
          <div>
            <h3 className="inline-block">Catégorie : </h3>
            <p className="inline-block ml-5">{props.product.category}</p>
          </div>
          <div>
            <h3 className="inline-block">Fournisseur : </h3>
            <p className="inline-block ml-5">{props.product.supplier}</p>
          </div>
          <div className="flex items-center">
            <h3 className="text-center text-nowrap">Description : </h3>
            <p className="ml-5 mb-2">
              {props.product.description}
            </p>
          </div>
          <div>
            <h3 className="inline-block">Quantité en stock : </h3>
            <p className="inline-block ml-5">{props.product.stock}</p>
          </div>
        </div>
        <div className="productdisplay-right-quantite flex items-center">
          <h3>Sélectionner Quantité :</h3>
          <div className="productdisplay-right-quantite-selector ml-5">
            <button onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
        <div className="mt-3">
          {quantity > 0 && quantity < 10 ? <p className="text-green-500 text-lg">En stock</p> : <p className="text-red-500 text-lg">En rupture de stock</p>}
        </div>
        <div className="productdisplay-right-buttons mt-2">
          {quantity > 0 && quantity < 10 ? <button onClick={handleAddToCart}>Ajouter au panier</button> : null }
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
