const ProductDescription = (props) => {
  return (
    <div className="mx-40 mt-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
      <h3 className="text-2xl font-bold text-[#333] text-center">
        Infos sur Produit
      </h3>
      <ul className="mt-6 space-y-6 text-[#333]">
        <li className="text-sm">
          NOM <span className="ml-4 float-right">{props.product.nom}</span>
        </li>
        <li className="text-sm">
          TYPE <span className="ml-4 float-right">{props.product.type}</span>
        </li>
        <li className="text-sm">
          DESCRIPTION{" "}
          <span className="ml-4 float-right">{props.product.description}</span>
        </li>
        <li className="text-sm">
          CATEGORIE{" "}
          <span className="ml-4 float-right">
            {props.product.categorie
              ? props.product.categorie.nom
              : "Loading..."}
          </span>
        </li>
        <li className="text-sm">
          DESCRIPTION CATEGORIE{" "}
          <span className="ml-4 float-right">
            {props.product.categorie
              ? props.product.categorie.description
              : "Loading..."}
          </span>
        </li>
        <li className="text-sm">
          FOURNISSEUR{" "}
          <span className="ml-4 float-right">
            {props.product.fournisseur
              ? props.product.fournisseur.nom
              : "Loading..."}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDescription;
