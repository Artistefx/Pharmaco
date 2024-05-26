import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CommandePage() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [montantTotal, setMontantTotal] = useState('');
  const [commandes, setCommandes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedType, setEditedType] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [editedMontantTotal, setEditedMontantTotal] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddCommande = () => {
    if (!type || !date || !status || !montantTotal) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newCommande = { id: Date.now().toString(), type, date, status, montantTotal };
    setCommandes([...commandes, newCommande]);
    setType('');
    setDate('');
    setStatus('');
    setMontantTotal('');
    setMessage('Commande ajoutée avec succès !');
    setMessageType('success');
  };

  const handleEditCommande = (index) => {
    const commande = commandes[index];
    setEditIndex(index);
    setEditedType(commande.type);
    setEditedDate(commande.date);
    setEditedStatus(commande.status);
    setEditedMontantTotal(commande.montantTotal);
  };

  const handleSaveEdit = () => {
    const updatedCommandes = commandes.map((commande, index) =>
      index === editIndex
        ? { ...commande, type: editedType, date: editedDate, status: editedStatus, montantTotal: editedMontantTotal }
        : commande
    );
    setCommandes(updatedCommandes);
    setEditIndex(-1);
    setMessage('Commande modifiée avec succès !');
    setMessageType('success');
  };

  const handleDeleteCommande = (index) => {
    const updatedCommandes = commandes.filter((_, i) => i !== index);
    setCommandes(updatedCommandes);
    setMessage('Commande supprimée avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter une commande</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="type" className="form-label">Type:</label>
          <select
            className="form-control"
            id="type"
            value={type}
            onChange={handleInputChange(setType)}
          >
            <option value="">Sélectionnez le type</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
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
          <label htmlFor="status" className="form-label">Status:</label>
          <select
            className="form-control"
            id="status"
            value={status}
            onChange={handleInputChange(setStatus)}
          >
            <option value="">Sélectionnez le status</option>
            <option value="livrée">Livrée</option>
            <option value="en cours">En cours</option>
            <option value="en attente">En attente</option>
          </select>
        </div>
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
        <button className="btn btn-outline-success" onClick={handleAddCommande}>Ajouter la commande</button>
      </div>
      <h2 className="mt-5">Liste des commandes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Montant Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande, index) => (
            <tr key={index}>
              <td>{commande.id}</td>
              <td>{editIndex === index ? (
                <select
                  className="form-control"
                  value={editedType}
                  onChange={handleInputChange(setEditedType)}
                >
                  <option value="">Sélectionnez le type</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              ) : (
                commande.type
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="date"
                  className="form-control"
                  value={editedDate}
                  onChange={handleInputChange(setEditedDate)}
                />
              ) : (
                commande.date
              )}</td>
              <td>{editIndex === index ? (
                <select
                  className="form-control"
                  value={editedStatus}
                  onChange={handleInputChange(setEditedStatus)}
                >
                  <option value="">Sélectionnez le status</option>
                  <option value="livrée">Livrée</option>
                  <option value="en cours">En cours</option>
                  <option value="en attente">En attente</option>
                </select>
              ) : (
                commande.status
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedMontantTotal}
                  onChange={handleInputChange(setEditedMontantTotal)}
                />
              ) : (
                commande.montantTotal
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditCommande(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteCommande(index)}>Supprimer</button>
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

export default CommandePage;
