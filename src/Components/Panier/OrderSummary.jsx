// OrderSummary.jsx
import React from 'react';

const OrderSummary = ({ items }) => {
  const calculateTotal = () => items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const calculateQuantity = () => items.reduce((acc,item) =>  acc + item.quantity , 0);
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="summary-item">
        <span>Total items:</span>
        <span>{calculateQuantity()}</span>
      </div>
      <div className="summary-total">
        <span>Total cost:</span>
        <span>{calculateTotal()} DH</span>
      </div>
      <button className="checkout-button" href="#">Checkout</button>
      <a href="#" className="continue-shopping-link">Continue Shopping</a>
    </div>
  );
};

export default OrderSummary;
