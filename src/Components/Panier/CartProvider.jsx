import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantite: cartItem.quantite + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantite: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    console.log(cartItems);

    if (isItemInCart) {
      let updatedCartItems;
      if (isItemInCart.quantite === 1) {
        updatedCartItems = cartItems.filter(
          (cartItem) => cartItem.id !== item.id
        );
      } else {
        updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantite: cartItem.quantite - 1 }
            : cartItem
        );
      }

      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      console.log("Item not found in cart.");
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.priceReduction * item.quantite,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
      >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
    
