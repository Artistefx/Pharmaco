import React, { useState, useEffect } from 'react';
import CommandePage from './CommandePage'; // Importer la page de commande
import './StockAlertPage.css';

function StockAlertPage() {
  const [stockData, setStockData] = useState([]);
  const [redirectProductId, setRedirectProductId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8088/api/v1/stock/all', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setStockData(data))
      .catch(error => console.error('Error fetching stock data:', error));
  }, []);

  // Fonction pour rediriger vers la page de commande avec l'ID du produit
  const redirectToCommandPage = (productId) => {
    setRedirectProductId(productId);
  };

  // Si un ID de produit est défini pour redirection, afficher la page de commande
  if (redirectProductId) {
    return <CommandePage productId={redirectProductId} />;
  }

  return (
    <div className="stock-alerts container">
      <h2 className="mt-5">Stock Alerts</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock Quantity</th>
            <th>Alert</th>
            <th>Action</th> {/* Ajouter une colonne pour le bouton Commander */}
          </tr>
        </thead>
        <tbody>
          {stockData.map((product) => (
            <tr key={product.nom}>
              <td>{product.nom}</td>
              <td>{product.quantite}</td>
              <td>
                {product.quantite < 10 ? (
                  <span className="text-danger font-weight-bold">Low Stock!</span>
                ) : (
                  'Stock OK'
                )}
              </td>
              <td>
                {/* Utiliser une fonction pour rediriger vers la page de commande avec l'ID du produit */}
                <button
                  onClick={() => redirectToCommandPage(product.id)}
                  className="btn btn-primary"
                >
                  Commander
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockAlertPage;