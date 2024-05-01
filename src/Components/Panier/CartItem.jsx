// CartItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, onUpdate, onRemove }) => {
  const handleQuantityChange = (newQuantity) => {
    onUpdate(item.id, newQuantity);
  };
  const handleRemoveClick = () => {
    onRemove(item.id);
  };


  return (
    <div className="cart-item">
      <img src={item.imageSrc} alt={item.imageAlt} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.name}</h4>
        <div className="cart-item-actions">
          <div className="cart-item-quantity-selector">
            <button className="quantity-btn decrease" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <input type="number" className="quantity-input" value={item.quantity} readOnly />
            <button className="quantity-btn increase" onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
            <p className="cart-item-price">{item.price} DH</p>
          <button className="cart-item-remove" onClick={handleRemoveClick}>×</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired

};

export default CartItem;
