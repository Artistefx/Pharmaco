import ProductDisplay from "./ProductDisplay";
import ProductReview from "./ProductReview";
import "./ProductPage.css";


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
      <ProductDisplay product={product} />
      <div className="Details">
      <div class="mt-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 class="text-2xl font-bold text-[#333] text-center">Infos sur Produit</h3>
          <ul class="mt-6 space-y-6 text-[#333]">
            <li class="text-sm">TYPE <span class="ml-4 float-right">LAPTOP</span></li>
            <li class="text-sm">RAM <span class="ml-4 float-right">16 BG</span></li>
            <li class="text-sm">SSD <span class="ml-4 float-right">1000 BG</span></li>
            <li class="text-sm">PROCESSOR TYPE <span class="ml-4 float-right">INTEL CORE I7-12700H</span></li>
            <li class="text-sm">PROCESSOR SPEED <span class="ml-4 float-right">2.3 - 4.7 GHz</span></li>
            <li class="text-sm">DISPLAY SIZE INCH <span class="ml-4 float-right">16.0</span></li>
            <li class="text-sm">DISPLAY SIZE SM <span class="ml-4 float-right">40.64 cm</span></li>
            <li class="text-sm">DISPLAY TYPE <span class="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span></li>
            <li class="text-sm">DISPLAY RESOLUTION <span class="ml-4 float-right">2880x1620</span></li>
          </ul>
        </div>
      </div>
        <div className="Review">
            <ProductReview />
        </div>
    </div>
  );
};

export default ProductPage;
