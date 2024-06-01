import { useState, useContext, useEffect } from "react";
import "./ProductDisplay.css";
import { CartContext } from "../Panier/CartProvider";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(0);
  const [source, setSource] = useState();
  const { addToCart , feedbackMessage } = useContext(CartContext);

  useEffect(() => {
    if (props.product.image1) {
      setSource(props.product.image1);
    }
  }, [props.product.image1]);

  useEffect(() => {
    if (props.product.stock) {
      setStock(props.product.stock);
    }
  }, [props.product.stock]);

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
    addToCart({
      id: props.product.id,
      image: props.product.image1,
      nom: props.product.nom,
      quantite: quantity,
      priceReduction: props.product.priceReduction,
      TauxReduction: Math.round((1 - props.product.priceReduction / props.product.priceOriginal) * 100),
    });
  };

  return (
    <div className="ProductDisplay">
      {feedbackMessage && (
        <div className="fixed top-16 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50">
          {feedbackMessage}
        </div>
      )}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={props.product.image1} alt="" onClick={handleImageClick} />
          <img src={props.product.image2} alt="" onClick={handleImageClick} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={source} alt="" />
        </div>
      </div>
      <div className="productdisplay-right relative">
        <h1>{props.product.nom}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {props.product.priceOriginal}DH
          </div>
          <div className="productdisplay-right-price-new">
            {props.product.priceReduction}DH
          </div>
        </div>
        <div className="productdisplay-right-description mb-3">
          <div>
            <p className="inline-block">{props.product.description}</p>
          </div>
          <div>
            <h3 className="inline-block">Quantité en stock : </h3>
            <p className="inline-block ml-5">{stock.quantite}</p>
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
        <div>
          {quantity > 0 && quantity <= stock.quantite ? (
            <p className="text-green-500 text-lg align-bottom">En stock</p>
          ) : (
            <p className="text-red-500 text-lg">En rupture de stock</p>
          )}
        </div>
        <div className="Total">
          <h3 className="inline-block">Total :</h3>
          <p className="inline-block ml-5">
            {
              props.product.priceReduction * quantity
            }DH
          </p>
        </div>
        <div className="productdisplay-right-buttons mt-1.5 absolute bottom-0 left-0">
          {quantity > 0 && quantity <= stock.quantite ? (
            <button onClick={handleAddToCart}>Ajouter au panier</button>
          ) : (null)}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
