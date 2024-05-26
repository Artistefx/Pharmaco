import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductAjout.css';

function ProductPage() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [supplier, setSupplier] = useState('');
  const [description, setDescription] = useState('');
  const [originalPrice, setOriginalPrice] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedProductName, setEditedProductName] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedQuantity, setEditedQuantity] = useState(0);
  const [editedSupplier, setEditedSupplier] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedOriginalPrice, setEditedOriginalPrice] = useState(0);
  const [editedPriceAfterDiscount, setEditedPriceAfterDiscount] = useState(0);
  const [editedImage1, setEditedImage1] = useState(null);
  const [editedImage2, setEditedImage2] = useState(null);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);
  const handleFileChange = (setter) => (e) => setter(e.target.files[0]);

  const handleAddProduct = () => {
    if (!productName || !category || quantity <= 0 || !supplier || !description || originalPrice <= 0 || priceAfterDiscount <= 0) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newProduct = { id: Date.now().toString(), name: productName, category, quantity, supplier, description, originalPrice, priceAfterDiscount, image1, image2 };
    setProducts([...products, newProduct]);
    setProductName('');
    setCategory('');
    setQuantity(0);
    setSupplier('');
    setDescription('');
    setOriginalPrice(0);
    setPriceAfterDiscount(0);
    setImage1(null);
    setImage2(null);
    setMessage('Produit ajouté avec succès !');
    setMessageType('success');
  };

  const handleEditProduct = (index) => {
    const product = products[index];
    setEditIndex(index);
    setEditedProductName(product.name);
    setEditedCategory(product.category);
    setEditedQuantity(product.quantity);
    setEditedSupplier(product.supplier);
    setEditedDescription(product.description);
    setEditedOriginalPrice(product.originalPrice);
    setEditedPriceAfterDiscount(product.priceAfterDiscount);
    setEditedImage1(product.image1);
    setEditedImage2(product.image2);
  };

  const handleSaveEdit = () => {
    const updatedProducts = products.map((product, index) =>
      index === editIndex
        ? { ...product, name: editedProductName, category: editedCategory, quantity: editedQuantity, supplier: editedSupplier, description: editedDescription, originalPrice: editedOriginalPrice, priceAfterDiscount: editedPriceAfterDiscount, image1: editedImage1, image2: editedImage2 }
        : product
    );
    setProducts(updatedProducts);
    setEditIndex(-1);
    setMessage('Produit modifié avec succès !');
    setMessageType('success');
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setMessage('Produit supprimé avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un produit</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Nom du produit:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={handleInputChange(setProductName)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Catégorie:</label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={handleInputChange(setCategory)}
          >
            <option value="">Sélectionnez une catégorie</option>
            <option value="Antidiabétiques">Antidiabétiques</option>
            <option value="Hormones thyroïdiennes">Hormones thyroïdiennes</option>
            <option value="Analgésiques">Analgésiques</option>
            <option value="Antihypertenseurs">Antihypertenseurs</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="quantity" className="form-label">Quantité:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={handleInputChange(setQuantity)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="supplier" className="form-label">Fournisseur:</label>
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
          <label htmlFor="description" className="form-label">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={handleInputChange(setDescription)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="originalPrice" className="form-label">Prix original:</label>
          <input
            type="number"
            className="form-control"
            id="originalPrice"
            value={originalPrice}
            onChange={handleInputChange(setOriginalPrice)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="priceAfterDiscount" className="form-label">Prix après réduction:</label>
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
          <label htmlFor="image1" className="form-label">Image 1 du produit:</label>
          <input
            type="file"
            className="form-control"
            id="image1"
            onChange={handleFileChange(setImage1)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image2" className="form-label">Image 2 du produit:</label>
          <input
            type="file"
            className="form-control"
            id="image2"
            onChange={handleFileChange(setImage2)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddProduct}>Ajouter le produit</button>
      </div>
      <h2 className="mt-5">Liste des produits</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Quantité</th>
            <th>Fournisseur</th>
            <th>Description</th>
            <th>Prix original</th>
            <th>Prix après réduction</th>
            <th>Image 1</th>
            <th>Image 2</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedProductName}
                  onChange={handleInputChange(setEditedProductName)}
                />
              ) : (
                product.name
              )}</td>
              <td>{editIndex === index ? (
                <select
                  className="form-control"
                  value={editedCategory}
                  onChange={handleInputChange(setEditedCategory)}
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="Antidiabétiques">Antidiabétiques</option>
                  <option value="Hormones thyroïdiennes">Hormones thyroïdiennes</option>
                  <option value="Analgésiques">Analgésiques</option>
                  <option value="Antihypertenseurs">Antihypertenseurs</option>
                </select>
              ) : (
                product.category
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedQuantity}
                  onChange={handleInputChange(setEditedQuantity)}
                />
              ) : (
                product.quantity
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedSupplier}
                  onChange={handleInputChange(setEditedSupplier)}
                />
              ) : (
                product.supplier
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedDescription}
                  onChange={handleInputChange(setEditedDescription)}
                />
              ) : (
                product.description
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedOriginalPrice}
                  onChange={handleInputChange(setEditedOriginalPrice)}
                />
              ) : (
                product.originalPrice
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedPriceAfterDiscount}
                  onChange={handleInputChange(setEditedPriceAfterDiscount)}
                />
              ) : (
                product.priceAfterDiscount
              )}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange(setEditedImage1)}
                  />
                ) : (
                  product.image1 && <img src={URL.createObjectURL(product.image1)} alt={product.name} width="50" />
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange(setEditedImage2)}
                  />
                ) : (
                  product.image2 && <img src={URL.createObjectURL(product.image2)} alt={product.name} width="50" />
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditProduct(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteProduct(index)}>Supprimer</button>
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
