import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CommandePage() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [montantTotal, setMontantTotal] = useState('');
  const [clientId, setClientId] = useState('');
  const [fournisseurId, setFournisseurId] = useState('');
  const [commandes, setCommandes] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedType, setEditedType] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [editedMontantTotal, setEditedMontantTotal] = useState('');
  const [editedClientId, setEditedClientId] = useState('');
  const [editedFournisseurId, setEditedFournisseurId] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/commande';

  const fetchCommandes = async () => {
    try {
      const response = await fetch(`${apiUrl}/enCoursDeTraitement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des commandes');
      }
      const data = await response.json();
      setCommandes(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des commandes:', error);
      setMessage('Erreur lors de la récupération des commandes.');
      setMessageType('danger');
    }
  };

  useEffect(() => {
    fetchCommandes();
  }, []);

  console.log(commandes);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddCommande = () => {
    if (!type || !date || !status || !montantTotal || !clientId || !fournisseurId) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newCommande = { type, date, status, montantTotal, clientId, fournisseurId };

    fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCommande),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Added commande:', data);
        setCommandes([...commandes, data]);
        setType('');
        setDate('');
        setStatus('');
        setMontantTotal('');
        setClientId('');
        setFournisseurId('');
        setMessage('Commande ajoutée avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de l\'ajout de la commande.');
        setMessageType('danger');
      });
  };

  const handleEditCommande = (index) => {
    const commande = commandes[index];
    setEditIndex(index);
    setEditedType(commande.type);
    setEditedDate(commande.date);
    setEditedStatus(commande.status);
    setEditedMontantTotal(commande.montantTotal);
    setEditedClientId(commande.clientId);
    setEditedFournisseurId(commande.fournisseurId);
  };

  const handleSaveEdit = () => {
    const updatedCommande = {
      ...commandes[editIndex],
      type: editedType,
      date: editedDate,
      status: editedStatus,
      montantTotal: editedMontantTotal,
      clientId: editedClientId,
      fournisseurId: editedFournisseurId
    };

    fetch(`${apiUrl}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCommande),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated commande:', data);
        const updatedCommandes = commandes.map((commande, index) =>
          index === editIndex ? data : commande
        );
        setCommandes(updatedCommandes);
        setEditIndex(-1);
        setMessage('Commande modifiée avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la modification de la commande.');
        setMessageType('danger');
      });
  };

  const handleDeleteCommande = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Deleted commande ID:', id);
        const updatedCommandes = commandes.filter((commande) => commande.id !== id);
        setCommandes(updatedCommandes);
        setMessage('Commande supprimée avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la suppression de la commande.');
        setMessageType('danger');
      });
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
            <option value="">Type de la commande</option>
            <option value="A">Client</option>
            <option value="B">Fournisseur</option>
           
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
           
            <option value="en cours">En cours de verification</option>
            <option value="en attente">En Cours de Traitement</option>
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
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="clientId" className="form-label">Client ID:</label>
          <input
            type="text"
            className="form-control"
            id="clientId"
            value={clientId}
            onChange={handleInputChange(setClientId)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="fournisseurId" className="form-label">Fournisseur ID:</label>
          <input
            type="text"
            className="form-control"
            id="fournisseurId"
            value={fournisseurId}
            onChange={handleInputChange(setFournisseurId)}
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
                  <option value="en cours">En Cours de Traitement</option>
                  <option value="en attente">En cours de verification</option>
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
                    <button className="btn btn-danger" onClick={() => handleDeleteCommande(commande.id)}>Supprimer</button>
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
