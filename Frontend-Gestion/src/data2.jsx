// data.jsx

const commandesData = [
    { 
      id: 1, 
      type: 'Commande client', 
      date: '2024-06-02',
      address: '123 Rue de Paris',
      telephone: '0123456789',
      status: 'En attente',
      produits: 'Produit A, Produit B',
      montantTotal: 150.00,
      client: 'Nom Client 1',
      UrlOrdonnance: 'fig.1.jpg'
    },
    { 
      id: 2, 
      type: 'Commande client', 
      date: '2024-06-03',
      address: '456 Avenue de Lyon',
      telephone: '0987654321',
      status: 'En attente',
      produits: 'Produit C, Produit D',
      montantTotal: 200.00,
      client: 'Nom Client 2',
      UrlOrdonnance: 'lien_vers_limage2.jpg'
    },
    // Add more commands as needed
];

export default commandesData;
