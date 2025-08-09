'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper functions for localStorage cart persistence
const CART_STORAGE_KEY = 'cartItems';

function loadCartFromStorage(): CartItem[] {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (!stored) return [];
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      // Validate each item
      return parsed.filter(
        (item: unknown): item is CartItem => {
          if (typeof item !== 'object' || item === null) return false;
          const obj = item as Record<string, unknown>;
          return (
            typeof obj.id === 'string' &&
            typeof obj.name === 'string' &&
            typeof obj.price === 'number' &&
            typeof obj.quantity === 'number'
          );
        }
      );
    }
    return [];
  } catch {
    return [];
  }
}

function saveCartToStorage(items: CartItem[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    setItems(loadCartFromStorage());
    setLoading(false);
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!loading) {
      saveCartToStorage(items);
    }
  }, [items, loading]);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      let newItems;
      if (existingItem) {
        newItems = currentItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        newItems = [...currentItems, { ...item, quantity }];
      }
      if (!loading) saveCartToStorage(newItems);
      return newItems;
    });
  };

  const removeItem = (id: string) => {
    setItems(items => {
      const newItems = items.filter(item => item.id !== id);
      if (!loading) saveCartToStorage(newItems);
      return newItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(items => {
      const newItems = items.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
      if (!loading) saveCartToStorage(newItems);
      return newItems;
    });
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) return null; // Prevent rendering until cart is loaded

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};