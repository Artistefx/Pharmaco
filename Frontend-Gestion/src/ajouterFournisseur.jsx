import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductAjout.css';

function FournisseurPage() {
  const [nomFournisseur, setNomFournisseur] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [fournisseurs, setFournisseurs] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [nomFournisseurModif, setNomFournisseurModif] = useState('');
  const [adresseModif, setAdresseModif] = useState('');
  const [emailModif, setEmailModif] = useState('');
  const [telephoneModif, setTelephoneModif] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/fournisseur';

  useEffect(() => {
    fetchFournisseurs();
  }, []);

  const fetchFournisseurs = async () => {
    try {
      const response = await fetch(`${apiUrl}/all`, {
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
      setFournisseurs(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des fournisseurs:', error);
      setMessage('Erreur lors de la récupération des fournisseurs.');
      setMessageType('danger');
    }
  };

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddFournisseur = (e) => {
    e.preventDefault();

    if (!nomFournisseur || !adresse || !email || !telephone) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newFournisseur = {
      nom: nomFournisseur,
      adresse: adresse,
      email: email,
      telephone: telephone
    };

    fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFournisseur),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Added fournisseur:', data); // Log added data
        setFournisseurs([...fournisseurs, data]);
        setNomFournisseur('');
        setAdresse('');
        setEmail('');
        setTelephone('');
        setMessage('Fournisseur ajouté avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de l\'ajout du fournisseur.');
        setMessageType('danger');
      });
  };

  const handleEditFournisseur = (index) => {
    const fournisseur = fournisseurs[index];
    setEditIndex(index);
    setNomFournisseurModif(fournisseur.nom);
    setAdresseModif(fournisseur.adresse);
    setEmailModif(fournisseur.email);
    setTelephoneModif(fournisseur.telephone);
  };

  const handleSaveEdit = () => {
    const updatedFournisseur = {
      ...fournisseurs[editIndex],
      nom: nomFournisseurModif,
      adresse: adresseModif,
      email: emailModif,
      telephone: telephoneModif
    };

    fetch(`${apiUrl}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFournisseur),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated fournisseur:', data); // Log updated data
        const updatedFournisseurs = fournisseurs.map((fournisseur, index) =>
          index === editIndex ? data : fournisseur
        );
        setFournisseurs(updatedFournisseurs);
        setEditIndex(-1);
        setMessage('Fournisseur modifié avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la modification du fournisseur.');
        setMessageType('danger');
      });
  };

  const handleDeleteFournisseur = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: 'PUT',
    })
      .then(() => {
        console.log('Deleted fournisseur ID:', id); // Log deleted ID
        const updatedFournisseurs = fournisseurs.filter((fournisseur) => fournisseur.id !== id);
        setFournisseurs(updatedFournisseurs);
        setMessage('Fournisseur supprimé avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la suppression du fournisseur.');
        setMessageType('danger');
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un fournisseur</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <form onSubmit={handleAddFournisseur}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="nomFournisseur" className="form-label">Nom du fournisseur:</label>
            <input
              type="text"
              className="form-control"
              id="nomFournisseur"
              value={nomFournisseur}
              onChange={handleInputChange(setNomFournisseur)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="adresse" className="form-label">Adresse:</label>
            <input
              type="text"
              className="form-control"
              id="adresse"
              value={adresse}
              onChange={handleInputChange(setAdresse)}
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
          <button type="submit" className="btn btn-outline-success" style={{Color:'#20c997'}}>Ajouter le fournisseur</button>
          </div>
      </form>
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
          {fournisseurs.map((fournisseur, index) => (
            <tr key={index}>
              <td>{fournisseur.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={nomFournisseurModif}
                  onChange={handleInputChange(setNomFournisseurModif)}
                />
              ) : (
                fournisseur.nom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={adresseModif}
                  onChange={handleInputChange(setAdresseModif)}
                />
              ) : (
                fournisseur.adresse
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="email"
                  className="form-control"
                  value={emailModif}
                  onChange={handleInputChange(setEmailModif)}
                />
              ) : (
                fournisseur.email
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={telephoneModif}
                  onChange={handleInputChange(setTelephoneModif)}
                />
              ) : (
                fournisseur.telephone
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEditFournisseur(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteFournisseur(fournisseur.id)}>Supprimer</button>
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

