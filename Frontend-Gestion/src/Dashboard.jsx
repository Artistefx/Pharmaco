import React, { useState } from 'react';
import './Dashboard.css';
import ProductPage from './ProductAjout';
import ClientPage from './AjouterClient';
import CommandePage from './CommandePage';
import FacturePage from './FacturePage';
import EmployeePage from './ajouterEmploye'
import FournisseurPage from './ajouterFournisseur';
function Dashboard() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Dashboard');

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const renderPage = () => {
    switch (selectedMenuItem) {
      case 'Produits':
        return <ProductPage />;
        case 'Fournisseurs':
          return <FournisseurPage />;
      case 'Clients':
        return <ClientPage />;
      case 'Commandes':
        return <CommandePage />;
      case 'Factures':
        return <FacturePage />;
        case 'Fournisseurs':
        return <ajouterFournisseur />;
        case 'Employes':
        return <EmployeePage />;
      default:
        return <DashboardStats />; // Affiche les statistiques et informations générales par défaut
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Pharmaco</h2>
        <ul>
          <li className={selectedMenuItem === 'Dashboard' ? 'active' : ''} onClick={() => handleMenuItemClick('Dashboard')}>
            Dashboard
          </li>
          <li className={selectedMenuItem === 'Dashboard' ? 'active' : ''} onClick={() => handleMenuItemClick('Fournisseurs')}>
            Fournisseurs
          </li>
          <li className={selectedMenuItem === 'Produits' ? 'active' : ''} onClick={() => handleMenuItemClick('Produits')}>
            Produits
          </li>
          <li className={selectedMenuItem === 'Clients' ? 'active' : ''} onClick={() => handleMenuItemClick('Clients')}>
            Clients
          </li>
          <li className={selectedMenuItem === 'Commandes' ? 'active' : ''} onClick={() => handleMenuItemClick('Commandes')}>
            Commandes
          </li>
          <li className={selectedMenuItem === 'Factures' ? 'active' : ''} onClick={() => handleMenuItemClick('Factures')}>
            Factures
          </li>
          <li className={selectedMenuItem === 'Employes' ? 'active' : ''} onClick={() => handleMenuItemClick('Employes')}>
            Employes
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h2>{selectedMenuItem}</h2>
        {renderPage()}
      </div>
    </div>
  );
}

// Composant pour afficher des statistiques et des informations générales sur la pharmacie
function DashboardStats() {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-title">Total Products</div>
        <div className="card-value">120</div>
      </div>
      <div className="card">
        <div className="card-title">Total Clients</div>
        <div className="card-value">80</div>
      </div>
      <div className="card">
        <div className="card-title">Total Orders</div>
        <div className="card-value">150</div>
      </div>
      <div className="card">
        <div className="card-title">Total Revenue</div>
        <div className="card-value">$12,000</div>
      </div>
    </div>
  );
}

export default Dashboard;