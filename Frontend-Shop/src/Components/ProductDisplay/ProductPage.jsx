import ProductDisplay from "./ProductDisplay";
import ProductDescription from "./ProductDescription";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8086/api/v1/produit/find/id/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [productId]);

  return (
    <div className="ProductPage">
      <div className="Price">
        <ProductDisplay product={product} />
      </div>
      <div className="Description mb-28">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
