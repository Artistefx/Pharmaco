import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductAjout.css';

function FournisseurPage() {
  const [supplierName, setSupplierName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [suppliers, setSuppliers] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedSupplierName, setEditedSupplierName] = useState('');
  const [editedAddress, setEditedAddress] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedTelephone, setEditedTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddSupplier = () => {
    if (!supplierName || !address || !email || !telephone) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newSupplier = { id: Date.now().toString(), name: supplierName, address, email, telephone };
    setSuppliers([...suppliers, newSupplier]);
    setSupplierName('');
    setAddress('');
    setEmail('');
    setTelephone('');
    setMessage('Fournisseur ajouté avec succès !');
    setMessageType('success');
  };

  const handleEditSupplier = (index) => {
    const supplier = suppliers[index];
    setEditIndex(index);
    setEditedSupplierName(supplier.name);
    setEditedAddress(supplier.address);
    setEditedEmail(supplier.email);
    setEditedTelephone(supplier.telephone);
  };

  const handleSaveEdit = () => {
    const updatedSuppliers = suppliers.map((supplier, index) =>
      index === editIndex
        ? { ...supplier, name: editedSupplierName, address: editedAddress, email: editedEmail, telephone: editedTelephone }
        : supplier
    );
    setSuppliers(updatedSuppliers);
    setEditIndex(-1);
    setMessage('Fournisseur modifié avec succès !');
    setMessageType('success');
  };

  const handleDeleteSupplier = (index) => {
    const updatedSuppliers = suppliers.filter((_, i) => i !== index);
    setSuppliers(updatedSuppliers);
    setMessage('Fournisseur supprimé avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un fournisseur</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="supplierName" className="form-label">Nom du fournisseur:</label>
          <input
            type="text"
            className="form-control"
            id="supplierName"
            value={supplierName}
            onChange={handleInputChange(setSupplierName)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">Adresse:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={handleInputChange(setAddress)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="telephone" className="form-label">Téléphone:</label>
          <input
            type="text"
            className="form-control"
            id="telephone"
            value={telephone}
            onChange={handleInputChange(setTelephone)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddSupplier}>Ajouter le fournisseur</button>
      </div>
      <h2 className="mt-5">Liste des fournisseurs</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedSupplierName}
                  onChange={handleInputChange(setEditedSupplierName)}
                />
              ) : (
                supplier.name
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedAddress}
                  onChange={handleInputChange(setEditedAddress)}
                />
              ) : (
                supplier.address
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="email"
                  className="form-control"
                  value={editedEmail}
                  onChange={handleInputChange(setEditedEmail)}
                />
              ) : (
                supplier.email
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedTelephone}
                  onChange={handleInputChange(setEditedTelephone)}
                />
              ) : (
                supplier.telephone
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditSupplier(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteSupplier(index)}>Supprimer</button>
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

export default FournisseurPage;
