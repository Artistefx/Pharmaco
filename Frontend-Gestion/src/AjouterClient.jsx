import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ClientPage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [sexe, setSexe] = useState('');
  const [clients, setClients] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedNom, setEditedNom] = useState('');
  const [editedPrenom, setEditedPrenom] = useState('');
  const [editedDateNaissance, setEditedDateNaissance] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedMotDePasse, setEditedMotDePasse] = useState('');
  const [editedSexe, setEditedSexe] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddClient = () => {
    if (!nom || !prenom || !dateNaissance || !email || !motDePasse || !sexe) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newClient = { id: Date.now().toString(), nom, prenom, dateNaissance, email, motDePasse, sexe };
    setClients([...clients, newClient]);
    setNom('');
    setPrenom('');
    setDateNaissance('');
    setEmail('');
    setMotDePasse('');
    setSexe('');
    setMessage('Client ajouté avec succès !');
    setMessageType('success');
  };

  const handleEditClient = (index) => {
    const client = clients[index];
    setEditIndex(index);
    setEditedNom(client.nom);
    setEditedPrenom(client.prenom);
    setEditedDateNaissance(client.dateNaissance);
    setEditedEmail(client.email);
    setEditedMotDePasse(client.motDePasse);
    setEditedSexe(client.sexe);
  };

  const handleSaveEdit = () => {
    const updatedClients = clients.map((client, index) =>
      index === editIndex
        ? { ...client, nom: editedNom, prenom: editedPrenom, dateNaissance: editedDateNaissance, email: editedEmail, motDePasse: editedMotDePasse, sexe: editedSexe }
        : client
    );
    setClients(updatedClients);
    setEditIndex(-1);
    setMessage('Client modifié avec succès !');
    setMessageType('success');
  };

  const handleDeleteClient = (index) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
    setMessage('Client supprimé avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un client</h1>
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
          <label htmlFor="dateNaissance" className="form-label">Date de Naissance:</label>
          <input
            type="date"
            className="form-control"
            id="dateNaissance"
            value={dateNaissance}
            onChange={handleInputChange(setDateNaissance)}
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
          <label htmlFor="motDePasse" className="form-label">Mot de Passe:</label>
          <input
            type="password"
            className="form-control"
            id="motDePasse"
            value={motDePasse}
            onChange={handleInputChange(setMotDePasse)}
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
            <option value="">Sélectionnez le sexe</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddClient}>Ajouter le client</button>
      </div>
      <h2 className="mt-5">Liste des clients</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date de Naissance</th>
            <th>Email</th>
            <th>Sexe</th>
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
                  value={editedNom}
                  onChange={handleInputChange(setEditedNom)}
                />
              ) : (
                client.nom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedPrenom}
                  onChange={handleInputChange(setEditedPrenom)}
                />
              ) : (
                client.prenom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="date"
                  className="form-control"
                  value={editedDateNaissance}
                  onChange={handleInputChange(setEditedDateNaissance)}
                />
              ) : (
                client.dateNaissance
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="email"
                  className="form-control"
                  value={editedEmail}
                  onChange={handleInputChange(setEditedEmail)}
                />
              ) : (
                client.email
              )}</td>
              <td>{editIndex === index ? (
                <select
                  className="form-control"
                  value={editedSexe}
                  onChange={handleInputChange(setEditedSexe)}
                >
                  <option value="">Sélectionnez le sexe</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              ) : (
                client.sexe
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditClient(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteClient(index)}>Supprimer</button>
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
