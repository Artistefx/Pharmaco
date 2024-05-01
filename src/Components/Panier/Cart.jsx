// Cart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem'; // Update the import path as needed
import './Cart.css';
const Cart = ({ items, onItemsUpdate,onItemRemove }) => {
  const handleUpdateQuantity = (itemId, newQuantity) => {
    onItemsUpdate(itemId, newQuantity);
  };
 



  return (
    <div className="cart-container">
      <h2 className="cart-title">PANIER</h2>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} onUpdate={handleUpdateQuantity} onRemove={onItemRemove}
          />
        ))}
      </div>
      
      {/* Other UI Elements as needed */}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemsUpdate: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired

};

export default Cart;
