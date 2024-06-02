import React, { useState, useEffect } from "react";
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
  const [nomModif, setNomModif] = useState('');
  const [prenomModif, setPrenomModif] = useState('');
  const [emailModif, setEmailModif] = useState('');
  const [telephoneModif, setTelephoneModif] = useState('');
  const [usernameModif, setUsernameModif] = useState('');
  const [motDePasseModif, setMotDePasseModif] = useState('');
  const [roleModif, setRoleModif] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const apiUrl = 'http://127.0.0.1:8086/api/v1/employe';

  useEffect(() => {
    fetch(`${apiUrl}/all`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: null,
    }).then(response => response.json())
      .then(data => {
        console.log('Employees:', data);
        setEmployees(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la récupération des employés.');
        setMessageType('danger');
      });
  }, []);

  const handleInputChange = (setter) => (e) => setter(e.target.value);

  const handleAddEmployee = (e) => {
    e.preventDefault();

    if (!nom || !prenom || !email || !telephone || !username || !motDePasse || !role) {
      setMessage('Veuillez remplir tous les champs correctement.');
      setMessageType('danger');
      return;
    }

    const newEmployee = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      username: username,
      motDePasse: motDePasse,
      role: role
    };

    fetch(`${apiUrl}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Added employee:', data);
        setEmployees([...employees, data]);
        setNom('');
        setPrenom('');
        setEmail('');
        setTelephone('');
        setUsername('');
        setMotDePasse('');
        setRole('');
        setMessage('Employé ajouté avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de l\'ajout de l\'employé.');
        setMessageType('danger');
      });
  };

  const handleEditEmployee = (index) => {
    const employee = employees[index];
    setEditIndex(index);
    setNomModif(employee.nom);
    setPrenomModif(employee.prenom);
    setEmailModif(employee.email);
    setTelephoneModif(employee.telephone);
    setUsernameModif(employee.username);
    setMotDePasseModif(employee.motDePasse);
    setRoleModif(employee.role);
  };

  const handleSaveEdit = () => {
    const updatedEmployee = {
      ...employees[editIndex],
      nom: nomModif,
      prenom: prenomModif,
      email: emailModif,
      telephone: telephoneModif,
      username: usernameModif,
      motDePasse: motDePasseModif,
      role: roleModif
    };

    fetch(`${apiUrl}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Updated employee:', data);
        const updatedEmployees = employees.map((employee, index) =>
          index === editIndex ? data : employee
        );
        setEmployees(updatedEmployees);
        setEditIndex(-1);
        setMessage('Employé modifié avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la modification de l\'employé.');
        setMessageType('danger');
      });
  };

  const handleDeleteEmployee = (id) => {
    fetch(`${apiUrl}/delete/${id}`, {
      method: 'PUT',
    })
      .then(() => {
        console.log('Deleted employee ID:', id);
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
        setMessage('Employé supprimé avec succès !');
        setMessageType('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Erreur lors de la suppression de l\'employé.');
        setMessageType('danger');
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Ajouter un employé</h1>
      {message && <div className={`alert alert-${messageType}`}>{message}</div>}
      <form onSubmit={handleAddEmployee}>
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
          <button type="submit" className="btn btn-outline-success">Ajouter l'employé</button>
        </div>
      </form>
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
            editIndex === index ? (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td><input type="text" value={nomModif} onChange={handleInputChange(setNomModif)} /></td>
                <td><input type="text" value={prenomModif} onChange={handleInputChange(setPrenomModif)} /></td>
                <td><input type="email" value={emailModif} onChange={handleInputChange(setEmailModif)} /></td>
                <td><input type="text" value={telephoneModif} onChange={handleInputChange(setTelephoneModif)} /></td>
                <td><input type="text" value={usernameModif} onChange={handleInputChange(setUsernameModif)} /></td>
                <td><input type="password" value={motDePasseModif} onChange={handleInputChange(setMotDePasseModif)} /></td>
                <td><input type="text" value={roleModif} onChange={handleInputChange(setRoleModif)} /></td>
                <td>
                  <button onClick={handleSaveEdit} className="btn btn-success">Enregistrer</button>
                </td>
              </tr>
            ) : (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.nom}</td>
                <td>{employee.prenom}</td>
                <td>{employee.email}</td>
                <td>{employee.telephone}</td>
                <td>{employee.username}</td>
                <td>{employee.motDePasse}</td>
                <td>{employee.role}</td>
                <td>
                  <button onClick={() => handleEditEmployee(index)} className="btn btn-primary me-2">Modifier</button>
                  <button onClick={() => handleDeleteEmployee(employee.id)} className="btn btn-danger">Supprimer</button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePage;
