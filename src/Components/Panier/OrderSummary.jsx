// OrderSummary.jsx
import React from 'react';
import { useContext } from 'react';
import { CartContext } from "./CartProvider";
const OrderSummary = () => {

  const { cartItems } =useContext(CartContext);

  const items = cartItems;

  const calculateTotal = () => items.reduce((acc, item) => acc + item.priceReduction * item.quantite, 0).toFixed(2);

  const calculateQuantity = () => items.reduce((acc,item) =>  acc + item.quantite , 0);
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
