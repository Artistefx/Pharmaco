import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommandeDetails from './CommandeDetail'; // Import CommandeDetails component
import commandesData from './data2'; // Import commandesData from data2

function CommandePageClient() {
  const [commandes, setCommandes] = useState([]);
  const [selectedCommandeId, setSelectedCommandeId] = useState(null);

  const handleCommandeClick = (id) => {
    setSelectedCommandeId(id);
  };

  const apiUrl = 'http://127.0.0.1:8086/api/v1/commande';

  
  useEffect(() => {
    fetchCommandes();
  }, []);

  const fetchCommandes = async () => {
    try {
      const response = await fetch(`${apiUrl}/enCoursDeVerification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des fournisseurs.');
      }
      const data = await response.json();
      setCommandes(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des fournisseurs:', error);
      setMessage('Erreur lors de la récupération des fournisseurs.');
      setMessageType('danger');
    }
  };

  console.log(commandes);

  if (selectedCommandeId) {
    return <CommandeDetails commandeId={selectedCommandeId} />;
  }

  return (
    <div className="container">
      <h1 className="mt-5">Liste des commandes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Numéro de Commande</th>
            <th>Date de Commande</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande, index) => (
            <tr key={index}>
              <td>{commande.id}</td>
              <td>{commande.date}</td>
              <td>{commande.status}</td>
              <td>
                <button
                  onClick={() => handleCommandeClick(commande.id)}
                  className="btn btn-primary"
                >
                  Voir détails
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommandePageClient;
