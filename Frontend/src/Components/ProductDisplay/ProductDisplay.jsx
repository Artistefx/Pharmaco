import { useState, useContext, useEffect } from "react";
import axios from 'axios';
import "./ProductDisplay.css";
import { CartContext } from "../Panier/CartProvider";

const ProductDisplay = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [source, setSource] = useState();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/v1/produit/find/id/11")
      .then((response) => {
        setProduct(response.data);
        setSource(response.data.image1);
        console.log(response.data.image1);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

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
      id: product.id,
      image: product.image1,
      name: product.name,
      priceReduction: product.priceReduction * 10,
      quantity: 10,
      TauxReduction: (product.priceReduction / product.priceOriginal) * 100,
    });
  };

  return (
    <div className="ProductDisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image1} alt="" onClick={handleImageClick} />
          <img src={product.image2} alt="" onClick={handleImageClick} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={source} alt="" />
        </div>
      </div>
      <div className="productdisplay-right relative">
        <h1>{product.nom}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.priceOriginal}DH
          </div>
          <div className="productdisplay-right-price-new">
            {product.priceReduction}DH
          </div>
        </div>
        <div className="productdisplay-right-description mb-3">
          <div>
            <p className="inline-block">{product.description}</p>
          </div>
          <div>
            <h3 className="inline-block">Quantité en stock : </h3>
            <p className="inline-block ml-5">{30}</p>
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
        <div className="mt-3 mb-3">
          {quantity > 0 && quantity <= 10 ? (
            <p className="text-green-500 text-lg align-bottom">En stock</p>
          ) : (
            <p className="text-red-500 text-lg">En rupture de stock</p>
          )}
        </div>
        <div className="Total">
          <h3 className="inline-block">Total :</h3>
          <p className="inline-block ml-5">
            {props.product.newPrice * quantity}DH
          </p>
        </div>
        <div className="productdisplay-right-buttons mt-1.5 absolute bottom-0 left-0">
          {quantity > 0 && quantity <= 10 ? (
            <button onClick={handleAddToCart}>Ajouter au panier</button>
          ) : (
            <button disabled>Ajouter au panier</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
