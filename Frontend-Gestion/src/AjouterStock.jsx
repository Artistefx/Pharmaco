import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StockPage() {
  const [nom, setNom] = useState('');
  const [quantite, setQuantite] = useState('');
  const [produitId, setProduitId] = useState('');
  const [stocks, setStocks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedNom, setEditedNom] = useState('');
  const [editedQuantite, setEditedQuantite] = useState('');
  const [editedProduitId, setEditedProduitId] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/stock';

  const fetchStocks = async () => {
    try {
      const response = await fetch(`${apiUrl}/all`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des stocks');
      }
      const data = await response.json();
      console.log('Stocks:', data);
      setStocks(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des stocks:', error);
      setMessage('Erreur lors de la récupération des stocks.');
      setMessageType('danger');
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddStock = () => {
    if (!nom || !quantite || !produitId) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newStock = { nom, quantite, produitId };

    fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStock),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Stock ajouté:', data);
        setStocks([...stocks, data]);
        setNom('');
        setQuantite('');
        setProduitId('');
        setMessage('Stock ajouté avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de l\'ajout du stock.');
        setMessageType('danger');
      });
  };

  const handleEditStock = (index) => {
    const stock = stocks[index];
    setEditIndex(index);
    setEditedNom(stock.nom);
    setEditedQuantite(stock.quantite);
    setEditedProduitId(stock.produitId);
  };

  const handleSaveEdit = () => {
    const updatedStock = {
      ...stocks[editIndex],
      nom: editedNom,
      quantite: editedQuantite,
      produitId: editedProduitId
    };

    fetch(`${apiUrl}/update`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedStock),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Stock modifié:', data);
        const updatedStocks = stocks.map((stock, index) =>
          index === editIndex ? data : stock
        );
        setStocks(updatedStocks);
        setEditIndex(-1);
        setMessage('Stock modifié avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la modification du stock.');
        setMessageType('danger');
      });
  };

  const handleDeleteStock = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Stock supprimé ID:', id);
        const updatedStocks = stocks.filter((stock) => stock.id !== id);
        setStocks(updatedStocks);
        setMessage('Stock supprimé avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la suppression du stock.');
        setMessageType('danger');
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un stock</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="nom" className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={handleInputChange(setNom)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="quantite" className="form-label">Quantité:</label>
          <input
            type="number"
            className="form-control"
            id="quantite"
            value={quantite}
            onChange={handleInputChange(setQuantite)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="produitId" className="form-label">Produit ID:</label>
          <input
            type="text"
            className="form-control"
            id="produitId"
            value={produitId}
            onChange={handleInputChange(setProduitId)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddStock}>Ajouter le stock</button>
      </div>
      <h2 className="mt-5">Liste des stocks</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedNom}
                  onChange={handleInputChange(setEditedNom)}
                />
              ) : (
                stock.nom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="number"
                  className="form-control"
                  value={editedQuantite}
                  onChange={handleInputChange(setEditedQuantite)}
                />
              ) : (                stock.quantite
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditStock(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteStock(stock.id)}>Supprimer</button>
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

export default StockPage;

