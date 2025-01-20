"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: { [key: string]: CartItem };
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<{ [key: string]: CartItem }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart[item.id];
      return {
        ...prevCart,
        [item.id]: existingItem
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : { ...item, quantity: 1 },
      };
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id].quantity > 1) {
        newCart[id] = { ...newCart[id], quantity: newCart[id].quantity - 1 };
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const clearCart = () => setCart({});

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isCartOpen,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
