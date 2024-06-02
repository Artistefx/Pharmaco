import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import CommandeClient from "./CommandeClient";

function CommandeDetails({ commandeId }) {
  const [commande, setCommande] = useState(null);
  const [client, setClient] = useState(null);
  const [age, setAge] = useState(null);
  const [isAccepted, setIsAccepted] = useState(false);

  const apiUrl = "http://127.0.0.1:8086/api/v1/commande";

  useEffect(() => {
    fetchCommande();
  }, []);

  const fetchCommande = async () => {
    try {
      const response = await fetch(`${apiUrl}/info/${commandeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      });
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des fournisseurs.");
      }
      const data = await response.json();
      setCommande(data[0]);
      setClient(data[1]);
    } catch (error) {
      console.error("Erreur lors de la récupération des fournisseurs:", error);
      setMessage("Erreur lors de la récupération des fournisseurs.");
      setMessageType("danger");
    }
  };

  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    if (client && client.dateNaissance) {
      const calculatedAge = calculateAge(client.dateNaissance);
      setAge(calculatedAge);
    }
  }, [client]);

  if (!commande) {
    return <div>Commande non trouvée</div>;
  }

  const handleAccept = () => {
    // put request
    fetch(`${apiUrl}/updateStatus/${commandeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour de la commande.");
        }
        console.log("Commande acceptée");
        setIsAccepted(true);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la commande:", error);
      });
  };

  const handleReject = () => {
    // put request
    fetch(`${apiUrl}/delete/${commandeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la mise à jour de la commande.");
        }
        console.log("Commande refusée");
        setIsAccepted(true);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de la commande:", error);
      });
  };

  if (isAccepted) {
    return <CommandeClient />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h1>Détails de la commande</h1>
          <p>
            <strong>Type de Commande:</strong> {commande.type}
          </p>
          <p>
            <strong>Date:</strong> {commande.date}
          </p>
          <p>
            <strong>Adresse:</strong> {commande.addresse}
          </p>
          <p>
            <strong>Téléphone:</strong> {commande.telephone}
          </p>
          <p>
            <strong>Status:</strong> {commande.status}
          </p>
          <p>
            <strong>Produits:</strong> {commande.produits}
          </p>
          <p>
            <strong>Montant Total:</strong> {commande.montantTotal} Dh
          </p>
          <p>
            <strong>Client ID:</strong> {commande.client}
          </p>
          <p>
            <strong>Client:</strong> {client.nom} {client.prenom}
          </p>
          <p>
            <strong>Client Date de Naissance:</strong> {client.dateNaissance} {}
          </p>
          <p>
            <strong>Client Age:</strong> {age !== null ? age : "N/A"}
          </p>
          <p>
            <strong>Client Email:</strong> {client.email}
          </p>
          <div className="text-center mt-3">
            <button onClick={handleAccept} className="btn btn-success mr-2">
              Accepter
            </button>
            <button onClick={handleReject} className="btn btn-danger">
              Refuser
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center">
            <a
              href={commande.urlOrdonnance}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={commande.urlOrdonnance}
                alt="Ordonnance"
                className="img-fluid"
                style={{
                  maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommandeDetails;
