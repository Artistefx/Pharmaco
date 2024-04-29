import React, { useState } from 'react';

import image1 from './PanierAssets/Medicament1.jpg';
import image2 from './PanierAssets/Medicament2.jpg'
import Cart from './Cart.jsx';

const products = [
  {
    id: 1,
    name: 'Doliprane',
    href: '#',
    Description: 'Antibiotique',
    price: 9.00,
    quantity: 1,
    imageSrc: image1,
    imageAlt: 'DolipraneImage',
  },
  {
    id: 2,
    name: 'Doligrippe',
    href: '#',
    Description: 'Antibiotique',
    price: 32.00,
    quantity: 1,
    imageSrc:image2,
    imageAlt:
      'Doligrippe Image',
  },
  // More products...
]

const Panier = () => {
    const [items, setItems] = useState(products);
  
    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
      };


    const updateItems = (itemId, newQuantity) => {
      const updatedItems = items.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
      setItems(updatedItems);
    };
    
    return (
        <div className="app">
          <Cart items={items} onItemsUpdate={updateItems} onItemRemove={handleRemoveItem}
          />
        </div>
      );
    };

    export default Panier;