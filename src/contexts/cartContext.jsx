import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  addToHistory: () => {},
  history: [],
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    if (productToAdd) setCartItem(addCartItem(cartItems, productToAdd));
  };

  const addToHistory = (OrderPlacedData) => {
    setHistory([...history, OrderPlacedData]);
    setCartItem([]);
  };

  const removeItemFromCart = (productToRemove) => {
    if (productToRemove)
      setCartItem(removeCartItem(cartItems, productToRemove));
  };
  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    addToHistory,
    history,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
