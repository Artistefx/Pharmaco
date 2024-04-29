// Cart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem'; // Update the import path as needed
import './Cart.css';
const Cart = ({ items, onItemsUpdate,onItemRemove }) => {
  const handleUpdateQuantity = (itemId, newQuantity) => {
    onItemsUpdate(itemId, newQuantity);
  };
 

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
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
      <div className="cart-summary">
        <div className="cart-summary-info">
          <p className="summary-items">{items.length} article{items.length > 1 ? 's' : ''}</p>
          <p className="summary-total">Total TTC: {calculateTotal()} Dhs</p>
          <button className="checkout-button">Continuer au checkout</button>

        </div>
        <a href="#" className="continue-shopping-link">Continuer mes achats</a>

      </div>
      {/* Other UI Elements as needed */}
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemsUpdate: PropTypes.func.isRequired
};

export default Cart;
