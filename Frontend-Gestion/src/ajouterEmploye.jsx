import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductAjout.css';

function EmployeePage() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [username, setUsername] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [role, setRole] = useState('');
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedNom, setEditedNom] = useState('');
  const [editedPrenom, setEditedPrenom] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedTelephone, setEditedTelephone] = useState('');
  const [editedUsername, setEditedUsername] = useState('');
  const [editedMotDePasse, setEditedMotDePasse] = useState('');
  const [editedRole, setEditedRole] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddEmployee = () => {
    if (!nom || !prenom || !email || !telephone || !username || !motDePasse || !role) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newEmployee = { id: Date.now().toString(), nom, prenom, email, telephone, username, motDePasse, role };
    setEmployees([...employees, newEmployee]);
    setNom('');
    setPrenom('');
    setEmail('');
    setTelephone('');
    setUsername('');
    setMotDePasse('');
    setRole('');
    setMessage('Employé ajouté avec succès !');
    setMessageType('success');
  };

  const handleEditEmployee = (index) => {
    const employee = employees[index];
    setEditIndex(index);
    setEditedNom(employee.nom);
    setEditedPrenom(employee.prenom);
    setEditedEmail(employee.email);
    setEditedTelephone(employee.telephone);
    setEditedUsername(employee.username);
    setEditedMotDePasse(employee.motDePasse);
    setEditedRole(employee.role);
  };

  const handleSaveEdit = () => {
    const updatedEmployees = employees.map((employee, index) =>
      index === editIndex
        ? { ...employee, nom: editedNom, prenom: editedPrenom, email: editedEmail, telephone: editedTelephone, username: editedUsername, motDePasse: editedMotDePasse, role: editedRole }
        : employee
    );
    setEmployees(updatedEmployees);
    setEditIndex(-1);
    setMessage('Employé modifié avec succès !');
    setMessageType('success');
  };

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
    setMessage('Employé supprimé avec succès !');
    setMessageType('success');
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un employé</h1>
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
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="username" className="form-label">Nom d'utilisateur:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleInputChange(setUsername)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="motDePasse" className="form-label">Mot de passe:</label>
          <input
            type="password"
            className="form-control"
            id="motDePasse"
            value={motDePasse}
            onChange={handleInputChange(setMotDePasse)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="role" className="form-label">Rôle:</label>
          <input
            type="text"
            className="form-control"
            id="role"
            value={role}
            onChange={handleInputChange(setRole)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-success" onClick={handleAddEmployee}>Ajouter l'employé</button>
      </div>
      <h2 className="mt-5">Liste des employés</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Nom d'utilisateur</th>
            <th>Mot de passe</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedNom}
                  onChange={handleInputChange(setEditedNom)}
                />
              ) : (
                employee.nom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedPrenom}
                  onChange={handleInputChange(setEditedPrenom)}
                />
              ) : (
                employee.prenom
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="email"
                  className="form-control"
                  value={editedEmail}
                  onChange={handleInputChange(setEditedEmail)}
                />
              ) : (
                employee.email
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedTelephone}
                  onChange={handleInputChange(setEditedTelephone)}
                />
              ) : (
                employee.telephone
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedUsername}
                  onChange={handleInputChange(setEditedUsername)}
                />
              ) : (
                employee.username
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="password"
                  className="form-control"
                  value={editedMotDePasse}
                  onChange={handleInputChange(setEditedMotDePasse)}
                />
              ) : (
                employee.motDePasse
              )}</td>
              <td>{editIndex === index ? (
                <input
                  type="text"
                  className="form-control"
                  value={editedRole}
                  onChange={handleInputChange(setEditedRole)}
                />
              ) : (
                employee.role
              )}</td>
              <td>
                {editIndex === index ? (
                  <button className="btn btn-success" onClick={handleSaveEdit}>Enregistrer</button>
                ) : (
                  <>
                    <button className="btn btn-info" onClick={() => handleEditEmployee(index)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteEmployee(index)}>Supprimer</button>
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

export default EmployeePage;
