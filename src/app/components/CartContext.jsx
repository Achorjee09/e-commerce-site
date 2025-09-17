"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Cart count (badge এর জন্য)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // ✅ Subtotal সহ প্রতিটি item (name, quantity, subtotal)
  const cartDetails = cartItems.map((item) => ({
    id: item.id,
    name: item.name, // product name
    quantity: item.quantity,
    price: item.price, // একক দাম
    subtotal: item.price * item.quantity, // subtotal হিসাব
  }));

  // ✅ Grand total (সব subtotal যোগফল)
  const grandTotal = cartDetails.reduce((total, item) => total + item.subtotal, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartDetails, // এখানে name, qty, subtotal পাবা
        grandTotal, // পুরো cart এর দাম
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
