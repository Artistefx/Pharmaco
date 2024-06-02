import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FacturePage() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [montantTotal, setMontantTotal] = useState('');
  const [commandeId, setCommandeId] = useState('');
  const [factures, setFactures] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDate, setEditedDate] = useState('');
  const [editedMontantTotal, setEditedMontantTotal] = useState('');
  const [editedCommandeId, setEditedCommandeId] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/facture';

  const fetchFactures = async () => {
    try {
      const response = await fetch(`${apiUrl}/all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des factures');
      }
      const data = await response.json();
      setFactures(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des factures:', error);
      setMessage('Erreur lors de la récupération des factures.');
      setMessageType('danger');
    }
  };

  useEffect(() => {
    fetchFactures();
  }, []);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddFacture = async () => {
    if (!description || !date || !montantTotal || !commandeId) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newFacture = { description, date, montantTotal, commandeId };

    try {
      const response = await fetch(`${apiUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFacture),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout de la facture');
      }
      const data = await response.json();
      setFactures([...factures, data]);
      setDescription('');
      setDate('');
      setMontantTotal('');
      setCommandeId('');
      setMessage('Facture ajoutée avec succès !');
      setMessageType('success');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la facture:', error);
      setMessage('Erreur lors de l\'ajout de la facture.');
      setMessageType('danger');
    }
  };

  const handleEditFacture = (index) => {
    const facture = factures[index];
    setEditIndex(index);
    setEditedDescription(facture.description);
    setEditedDate(facture.date);
    setEditedMontantTotal(facture.montantTotal);
    setEditedCommandeId(facture.commandeId);
  };

  const handleSaveEdit = async () => {
    const updatedFacture = {
      ...factures[editIndex],
      description: editedDescription,
      date: editedDate,
      montantTotal: editedMontantTotal,
      commandeId: editedCommandeId,
    };

    try {
      const response = await fetch(`${apiUrl}/update/${updatedFacture.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFacture),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la modification de la facture');
      }
      const data = await response.json();
      const updatedFactures = factures.map((facture, index) =>
        index === editIndex ? data : facture
      );
      setFactures(updatedFactures);
      setEditIndex(-1);
      setMessage('Facture modifiée avec succès !');
      setMessageType('success');
    } catch (error) {
      console.error('Erreur lors de la modification de la facture:', error);
      setMessage('Erreur lors de la modification de la facture.');
      setMessageType('danger');
    }
  };

  const handleDeleteFacture = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/delete/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression de la facture');
      }
      const updatedFactures = factures.filter((facture) => facture.id !== id);
      setFactures(updatedFactures);
      setMessage('Facture supprimée avec succès !');
      setMessageType('success');
    } catch (error) {
      console.error('Erreur lors de la suppression de la facture:', error);
      setMessage('Erreur lors de la suppression de la facture.');
      setMessageType('danger');
    }
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
        <div className="col-md-6">
          <label htmlFor="commandeId" className="form-label">ID de la commande:</label>
          <input
            type="text"
            className="form-control"
            id="commandeId"
            value={commandeId}
            onChange={handleInputChange(setCommandeId)}
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
                    <button className="btn btn-danger" onClick={() => handleDeleteFacture(facture.id)}>Supprimer</button>
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
