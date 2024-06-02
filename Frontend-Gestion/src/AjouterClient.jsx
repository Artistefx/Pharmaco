import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductAjout.css';

function ClientPage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [date_naissance, setDateNaissance] = useState('');
  const [sexe, setSexe] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [email, setEmail] = useState('');
  const [clients, setClients] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [nomModif, setNomModif] = useState('');
  const [prenomModif, setPrenomModif] = useState('');
  const [dateNaissanceModif, setDateNaissanceModif] = useState('');
  const [sexeModif, setSexeModif] = useState('');
  const [motDePasseModif, setMotDePasseModif] = useState('');
  const [emailModif, setEmailModif] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/client';

  useEffect(() => {
    fetch(`${apiUrl}/all`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    }).then(response => response.json())
      .then(data => {
        console.log('Clients:', data); 
        setClients(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la récupération des clients.');
        setMessageType('danger');
      });
  }, []);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddClient = (e) => {
    e.preventDefault();

    if (!nom || !prenom || !date_naissance || !sexe || !mot_de_passe || !email) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newClient = {
      nom: nom,
      prenom: prenom,
      dateNaissance: date_naissance,
      sexe: sexe,
      motDePasse: mot_de_passe,
      email: email
    };

    fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Added client:', data); // Log added data
        setClients([...clients, data]);
        setNom('');
        setPrenom('');
        setDateNaissance('');
        setSexe('');
        setMotDePasse('');
        setEmail('');
        setMessage('Client ajouté avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de l\'ajout du client.');
        setMessageType('danger');
      });
  };

  const handleEditClient = (index) => {
    const client = clients[index];
    setEditIndex(index);
    setNomModif(client.nom);
    setPrenomModif(client.prenom);
    setDateNaissanceModif(client.dateNaissance);
    setSexeModif(client.sexe);
    setMotDePasseModif(client.motDePasse);
    setEmailModif(client.email);
  };

  const handleSaveEdit = () => {
    const updatedClient = {
      ...clients[editIndex],
      nom: nomModif,
      prenom: prenomModif,
      dateNaissance: dateNaissanceModif,
      sexe: sexeModif,
      motDePasse: motDePasseModif,
      email: emailModif
    };

    fetch(`${apiUrl}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedClient),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated client:', data); // Log updated data
        const updatedClients = clients.map((client, index) =>
          index === editIndex ? data : client
        );
        setClients(updatedClients);
        setEditIndex(-1);
        setMessage('Client modifié avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la modification du client.');
        setMessageType('danger');
      });
  };

  const handleDeleteClient = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: 'PUT',
    })
      .then(() => {
        console.log('Deleted client ID:', id); // Log deleted ID
        const updatedClients = clients.filter((client) => client.id !== id);
        setClients(updatedClients);
        setMessage('Client supprimé avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la suppression du client.');
        setMessageType('danger');
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un client</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <form onSubmit={handleAddClient}>
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
            <label htmlFor="prenom" className="form-label">Prénom:</label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              value={prenom}
              onChange={handleInputChange(setPrenom)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="dateNaissance" className="form-label">Date de naissance:</label>
            <input
              type="date"
              className="form-control"
              id="dateNaissance"
              value={date_naissance}
              onChange={handleInputChange(setDateNaissance)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="sexe" className="form-label">Sexe:</label>
            <select
              className="form-control"
              id="sexe"
              value={sexe}
              onChange={handleInputChange(setSexe)}
            >
              <option value="">Sélectionner le sexe</option>
              <option value="M">Masculin</option>
              <option value="F">Féminin</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
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
          <div className="col-md-6">
            <label htmlFor="motDePasse" className="form-label">Mot de passe:</label>
            <input
              type="password"
              className="form-control"
              id="motDePasse"
              value={mot_de_passe}
              onChange={handleInputChange(setMotDePasse)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-outline-success">Ajouter le client</button>
        </div>
      </form>
      <h2 className="mt-5">Liste des clients</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date de naissance</th>
            <th>Sexe</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={nomModif}
                  onChange={handleInputChange(setNomModif)}
                />
              ) : (
                client.nom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={prenomModif}
                  onChange={handleInputChange(setPrenomModif)}
                />
              ) : (
                client.prenom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="date"
                  className="form-control"
                  value={dateNaissanceModif}
                  onChange={handleInputChange(setDateNaissanceModif)}
                />
              ) : (
                client.dateNaissance
              )}</td>
              <td>{editIndex === index ? (
                <select
                  className="form-control"
                  value={sexeModif}
                  onChange={handleInputChange(setSexeModif)}
                >
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                </select>
              ) : (
                client.sexe
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="email"
                  className="form-control"
                  value={emailModif}
                  onChange={handleInputChange(setEmailModif)}
                />
              ) : (
                client.email
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-primary" onClick={() => handleEditClient(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteClient(client.id)}>Supprimer</button>
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

export default ClientPage;

