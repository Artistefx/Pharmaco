import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = sessionStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [isConnected, setIsConnected] = useState(() => {
    const savedIsConnected = sessionStorage.getItem("isConnected");
    return savedIsConnected === "true";
  });

  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  

  const ToggleIsConnected = () => {
    setIsConnected((prevState) => !prevState);
  };

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
      setCartItems([...cartItems, { ...item, quantite: item.quantite }]);
    }

    setFeedbackMessage(`Added ${item.nom} to the cart`);

    // Clear the feedback message after 3 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    }, 4000);
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

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
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      console.log("Item not found in cart.");
    }

    setFeedbackMessage(`Removed ${item.nom} from the cart`);

    // Clear the feedback message after 3 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    }, 4000);
  };

  const clearCart = () => {
    setCartItems([]);
    sessionStorage.setItem("cartItems", JSON.stringify([]));

    setFeedbackMessage('Cleared the cart');
    // Clear the feedback message after 3 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    }, 4000);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.priceReduction * item.quantite,
      0
    );
  };

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    sessionStorage.setItem("isConnected", isConnected);
  }, [isConnected]);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        isConnected,
        ToggleIsConnected,
        user,
        setUser,
        feedbackMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
