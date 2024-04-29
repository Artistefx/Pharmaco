import ProductDisplay from "./ProductDisplay";
import ProductReview from "./ProductReview";
import ProductDescription from "./ProductDescription";

const ProductPage = () => {
  const product = {
    name: "product name",
    oldPrice: 100,
    newPrice: 90,
    category: "category",
    supplier: "Fournisseur",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, quae quia",
    stock: 10,
  };

  return (
    <div className="ProductPage mb-0">
      <div className="Price">
        <ProductDisplay product={product} />
      </div>
      <div className="Description">
        <ProductDescription product={product} />
      </div>
      <div className="Review mt-6">
        <ProductReview />
      </div>
    </div>
  );
};

export default ProductPage;
