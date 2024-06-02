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

  // Utilisation des données fictives commandesData
  useEffect(() => {
    setCommandes(commandesData);
  }, []);

  if (selectedCommandeId) {
    return <CommandeDetails commandeId={selectedCommandeId} />;
  }

  return (
    <div className="container">
      <h1 className="mt-5">Liste des commandes</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Numéro de Commande</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((commande, index) => (
            <tr key={index}>
              <td>{commande.id}</td>
              <td>{commande.numCommande}</td>
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
