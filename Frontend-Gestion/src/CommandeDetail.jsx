import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import commandesData from './data2'; // Import commandesData from data2

function CommandeDetails({ commandeId }) {
  const commande = commandesData.find(commande => commande.id === parseInt(commandeId)); // Find the corresponding command in the data

  if (!commande) {
    return <div>Commande non trouvée</div>; // Handle the case where the command is not found
  }

  const handleAccept = () => {
    // Add logic to handle accept action
    console.log("Commande acceptée");
  };

  const handleReject = () => {
    // Add logic to handle reject action
    console.log("Commande refusée");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1>Détails de la commande</h1>
          <p><strong>Type de Commande:</strong> {commande.type}</p>
          <p><strong>Date:</strong> {commande.date}</p>
          <p><strong>Adresse:</strong> {commande.address}</p>
          <p><strong>Téléphone:</strong> {commande.telephone}</p>
          <p><strong>Status:</strong> {commande.status}</p>
          <p><strong>Produits:</strong> {commande.produits}</p>
          <p><strong>Montant Total:</strong> {commande.montantTotal} €</p>
          <p><strong>Client:</strong> {commande.client}</p>
          <div className="text-center mt-3">
            <button onClick={handleAccept} className="btn btn-success mr-2">Accepter</button>
            <button onClick={handleReject} className="btn btn-danger">Refuser</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <img src={commande.UrlOrdonnance} alt="Ordonnance" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandeDetails;
