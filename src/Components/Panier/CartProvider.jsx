import React, { createContext, useState } from 'react';

// Create a new context for the cart
export const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
    // State to store the cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        console.log(cartItems);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(currentItems => {
            const index = currentItems.findIndex(item => item.id === itemId);
            if (index > -1) {
                const newItems = [...currentItems]; // Copy the array to avoid direct mutation
                newItems.splice(index, 1); // Remove the item by index
                return newItems;
            }
            return currentItems; // Return the original array if no item was found
        });
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Value object to be passed to the context provider
    const cartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;