import React, { createContext, useState } from "react";

export type cartItem = {
  count: number;
};

export type cartType = Map<number, cartItem>;

export type CartContextType = {
  cart: cartType;
  handleAddToCart: (productId: number) => void;
  handleDeleteFromCart: (productId: number) => void;
};
type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Map<number, cartItem>>(new Map());

  const handleAddToCart = (productId: number) => {
    setCart((prevCart) => {
      const newCart = new Map(prevCart);
      if (newCart.has(productId)) {
        const item = newCart.get(productId) as cartItem;
        item.count = item.count + 1;
        newCart.set(productId, item);
      } else {
        newCart.set(productId, { count: 1 });
      }
      return newCart;
    });
    alert("Item added to cart");
  };
  const handleDeleteFromCart = (productId: number) => {
    if (confirm("Are you want to delete it?")) {
      setCart((prevCart) => {
        const newCart = new Map(prevCart);
        newCart.delete(productId);
        return newCart;
      });
      alert("Item deleted successfully...");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, handleAddToCart, handleDeleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
