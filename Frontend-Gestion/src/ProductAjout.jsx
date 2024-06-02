import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductAjout.css";

function ProductPage() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isReduced, setIsReduced] = useState(false);
  const [productType, setProductType] = useState("");
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedProductName, setEditedProductName] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedSupplier, setEditedSupplier] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedOriginalPrice, setEditedOriginalPrice] = useState(0);
  const [editedPriceAfterDiscount, setEditedPriceAfterDiscount] = useState(0);
  const [editedIsReduced, setEditedIsReduced] = useState(false);
  const [editedProductType, setEditedProductType] = useState("");
  const [editedImage1, setEditedImage1] = useState(null);
  const [editedImage2, setEditedImage2] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const apiUrl = "http://127.0.0.1:8086/api/v1/produit";

  useEffect(() => {
    fetch(`${apiUrl}/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Erreur lors de la récupération des produits.");
        setMessageType("danger");
      });
  }, []);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      !productName ||
      !category ||
      !supplier ||
      !description ||
      originalPrice <= 0 ||
      priceAfterDiscount <= 0
    ) {
      setMessage("Veuillez remplir tous les champs correctement.");
      setMessageType("danger");
      return;
    }

    const newProduct = {
      nom: productName,
      categorie_id: category,
      fournisseur_id: supplier,
      description: description,
      priceOriginal: originalPrice,
      priceReduction: priceAfterDiscount,
      type: productType,
      isReduction: isReduced,
      image1: image1,
      image2: image2,
    };

    fetch(`${apiUrl}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Added product:", data);
        setProducts([...products, data]);
        setProductName("");
        setCategory("");
        setSupplier("");
        setDescription("");
        setOriginalPrice(0);
        setPriceAfterDiscount(0);
        setIsReduced(false);
        setProductType("");
        setImage1(null);
        setImage2(null);
        setMessage("Produit ajouté avec succès !");
        setMessageType("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Erreur lors de l'ajout du produit.");
        setMessageType("danger");
      });
  };

  const handleEditProduct = (index) => {
    const product = products[index];
    setEditIndex(index);
    setEditedProductName(product.nom);
    setEditedCategory(product.categorie_id);
    setEditedSupplier(product.fournisseur_id);
    setEditedDescription(product.description);
    setEditedOriginalPrice(product.priceOriginal);
    setEditedPriceAfterDiscount(product.priceReduction);
    setEditedIsReduced(product.isReduction);
    setEditedProductType(product.type);
    setEditedImage1(product.image1);
    setEditedImage2(product.image2);
  };

  const handleSaveEdit = () => {
    const updatedProduct = {
      ...products[editIndex],
      nom: editedProductName,
      categorie_id: editedCategory,
      fournisseur_id: editedSupplier,
      description: editedDescription,
      priceOriginal: editedOriginalPrice,
      priceReduction: editedPriceAfterDiscount,
      isReduction: editedIsReduced,
      type: editedProductType,
      image1: editedImage1,
      image2: editedImage2,
    };

    fetch(`${apiUrl}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated product:", data);
        const updatedProducts = products.map((product, index) =>
          index === editIndex ? data : product
        );
        setProducts(updatedProducts);
        setEditIndex(-1);
        setMessage("Produit modifié avec succès !");
        setMessageType("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Erreur lors de la modification du produit.");
        setMessageType("danger");
      });
  };

  const handleDeleteProduct = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: "PUT",
    })
      .then(() => {
        console.log("Deleted product ID");
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        setMessage("Produit supprimé avec succès !");
        setMessageType("success");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Erreur lors de la suppression du produit.");
        setMessageType("danger");
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un produit</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">
            Nom du produit:
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={handleInputChange(setProductName)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Catégorie:
          </label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={handleInputChange(setCategory)}
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="1">Antidiabétiques</option>
            <option value="2">Hormones thyroïdiennes</option>
            <option value="3">Analgésiques</option>
            <option value="4">Antihypertenseurs</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="supplier" className="form-label">
            Fournisseur:
          </label>
          <input
            type="text"
            className="form-control"
            id="supplier"
            value={supplier}
            onChange={handleInputChange(setSupplier)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={handleInputChange(setDescription)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="originalPrice" className="form-label">
            Prix original:
          </label>
          <input
            type="number"
            className="form-control"
            id="originalPrice"
            value={originalPrice}
            onChange={handleInputChange(setOriginalPrice)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="priceAfterDiscount" className="form-label">
            Prix après réduction:
          </label>
          <input
            type="number"
            className="form-control"
            id="priceAfterDiscount"
            value={priceAfterDiscount}
            onChange={handleInputChange(setPriceAfterDiscount)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isReduced"
              checked={isReduced}
              onChange={(e) => setIsReduced(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="isReduced">
              Réduction activée
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="productType" className="form-label">
            Type de produit:
          </label>
          <input
            type="text"
            className="form-control"
            id="productType"
            value={productType}
            onChange={handleInputChange(setProductType)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="image1" className="form-label">
            Image 1 du produit:
          </label>
          <input
            type="file"
            className="form-control"
            id="image1"
            onChange={handleFileChange(setImage1)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image2" className="form-label">
            Image 2 du produit:
          </label>
          <input
            type="file"
            className="form-control"
            id="image2"
            onChange={handleFileChange(setImage2)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddProduct}>
          Ajouter le produit
        </button>
      </div>
      <h2 className="mt-5">Liste des produits</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix original</th>
            <th>Prix après réduction</th>
            <th>Est réduit</th>
            <th>Type de produit</th>
            <th>Image 1</th>
            <th>Image 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editedProductName}
                    onChange={handleInputChange(setEditedProductName)}
                  />
                ) : (
                  product.nom
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editedDescription}
                    onChange={handleInputChange(setEditedDescription)}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    className="form-control"
                    value={editedOriginalPrice}
                    onChange={handleInputChange(setEditedOriginalPrice)}
                  />
                ) : (
                  product.priceOriginal
                )} Dh
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    className="form-control"
                    value={editedPriceAfterDiscount}
                    onChange={handleInputChange(setEditedPriceAfterDiscount)}
                  />
                ) : (
                  product.priceReduction
                )} Dh
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={editedIsReduced}
                    onChange={(e) => setEditedIsReduced(e.target.checked)}
                  />
                ) : product.is_reduction ? (
                  "Oui"
                ) : (
                  "Non"
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <select
                    className="form-control"
                    value={editedProductType}
                    onChange={handleInputChange(setEditedProductType)}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="1">Antidiabétiques</option>
                    <option value="2">Hormones thyroïdiennes</option>
                    <option value="3">Analgésiques</option>
                    <option value="4">Antihypertenseurs</option>
                  </select>
                ) : (
                  product.type
                )}
              </td>
              <td>{product.image1}</td>
              <td>{product.image2}</td>
              <td>
                {editIndex === index ? (
                  <>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={handleSaveEdit}
                    >
                      Enregistrer
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-1"
                      onClick={() => setEditIndex(-1)}
                    >
                      Annuler
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditProduct(index)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-1"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Supprimer
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
