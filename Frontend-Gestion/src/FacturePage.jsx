import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FacturePage() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [montantTotal, setMontantTotal] = useState('');
  const [factures, setFactures] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedMontantTotal, setEditedMontantTotal] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddFacture = () => {
    if (!description || !date || !montantTotal) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newFacture = { id: Date.now().toString(), description, date, montantTotal };
    setFactures([...factures, newFacture]);
    setDescription('');
    setDate('');
    setMontantTotal('');
    setMessage('Facture ajoutée avec succès !');
    setMessageType('success');
  };

  const handleEditFacture = (index) => {
    const facture = factures[index];
    setEditIndex(index);
    setEditedDescription(facture.description);
    setEditedDate(facture.date);
    setEditedMontantTotal(facture.montantTotal);
  };

  const handleSaveEdit = () => {
    const updatedFactures = factures.map((facture, index) =>
      index === editIndex
        ? { ...facture, description: editedDescription, date: editedDate, montantTotal: editedMontantTotal }
        : facture
    );
    setFactures(updatedFactures);
    setEditIndex(-1);
    setMessage('Facture modifiée avec succès !');
    setMessageType('success');
  };

  const handleDeleteFacture = (index) => {
    const updatedFactures = factures.filter((_, i) => i !== index);
    setFactures(updatedFactures);
    setMessage('Facture supprimée avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter une facture</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
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
          <label htmlFor="date" className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={handleInputChange(setDate)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="montantTotal" className="form-label">Montant Total:</label>
          <input
            type="number"
            className="form-control"
            id="montantTotal"
            value={montantTotal}
            onChange={handleInputChange(setMontantTotal)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddFacture}>Ajouter la facture</button>
      </div>
      <h2 className="mt-5">Liste des factures</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Montant Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((facture, index) => (
            <tr key={index}>
              <td>{facture.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedDescription}
                  onChange={handleInputChange(setEditedDescription)}
                />
              ) : (
                facture.description
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="date"
                  className="form-control"
                  value={editedDate}
                  onChange={handleInputChange(setEditedDate)}
                />
              ) : (
                facture.date
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedMontantTotal}
                  onChange={handleInputChange(setEditedMontantTotal)}
                />
              ) : (
                facture.montantTotal
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditFacture(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteFacture(index)}>Supprimer</button>
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

export default FacturePage;
