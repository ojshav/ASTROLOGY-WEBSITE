'use client'

import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/useLanguage';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { AnimatedStars } from '@/app/components/AnimatedStars';
import { MysticBackground } from '@/app/components/MysticBackground';

// Database cart item structure
interface DatabaseCartItem {
  id: number;
  quantity: number;
  price: number;
  products?: {
    id: number;
    name: string;
    price: number;
    image_url?: string;
    slug: string;
    product_media?: {
      id: number;
      media_url: string;
      is_primary: boolean;
    }[];
  } | null;
  services?: {
    id: number;
    title: string;
    price: number;
    duration?: string;
    delivery_type?: string;
    service_media?: {
      id: number;
      media_url: string;
      is_primary: boolean;
    }[];
  } | null;
}

// Local cart item structure (from CartContext)
interface LocalCartItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  image_url?: string;
  quantity: number;
}

// Union type for all possible cart items
type CartItem = DatabaseCartItem | LocalCartItem;

interface CartData {
  cart: {
    id: number;
    cart_items: DatabaseCartItem[];
  };
  totalItems: number;
  totalPrice: number;
}

export default function CartPage() {
  const { items: localItems, removeItem: removeLocalItem, updateQuantity: updateLocalQuantity, total: localTotal } = useCart();
  const { t } = useLanguage();
  const { userId, isAuthenticated } = useCurrentUser();
  
  const [cartData, setCartData] = useState<CartData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cart data from database
  useEffect(() => {
    const fetchCart = async () => {
      if (!isAuthenticated || !userId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`/api/cart?userId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setCartData(data);
        } else {
          setError('Failed to fetch cart');
        }
      } catch (err) {
        console.error('Error fetching cart:', err);
        setError('Failed to fetch cart');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, [userId, isAuthenticated]);

  // Remove item from cart (both local and database)
  const removeItem = async (cartItemId: number | string) => {
    try {
      // If it's a database cart item, remove from database
      if (typeof cartItemId === 'number') {
        const response = await fetch(`/api/cart?cartItemId=${cartItemId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Refresh cart data
          if (userId) {
            const cartResponse = await fetch(`/api/cart?userId=${userId}`);
            if (cartResponse.ok) {
              const data = await cartResponse.json();
              setCartData(data);
            }
          }
        }
      } else {
        // If it's a local item, remove from local state
        removeLocalItem(cartItemId);
      }
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  // Update item quantity (both local and database)
  const updateQuantity = async (cartItemId: number | string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(cartItemId);
      return;
    }

    try {
      // If it's a database cart item, update in database
      if (typeof cartItemId === 'number') {
        const response = await fetch('/api/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartItemId,
            quantity: newQuantity,
          }),
        });

        if (response.ok) {
          // Refresh cart data
          if (userId) {
            const cartResponse = await fetch(`/api/cart?userId=${userId}`);
            if (cartResponse.ok) {
              const data = await cartResponse.json();
              setCartData(data);
            }
          }
        }
      } else {
        // If it's a local item, update local state
        updateLocalQuantity(cartItemId, newQuantity);
      }
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  // Use database cart data if available, fallback to local items
  const items = cartData?.cart?.cart_items || localItems;
  const total = cartData?.totalPrice || localTotal;

  if (isLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
        <AnimatedStars />
        <MysticBackground />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gold"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
        <AnimatedStars />
        <MysticBackground />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Error Loading Cart</h3>
            <p className="text-neutral-600 mb-6">{error}</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
        <AnimatedStars />
        <MysticBackground />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Please Log In</h3>
            <p className="text-neutral-600 mb-6">You need to be logged in to view your cart.</p>
            <Button 
              asChild
              className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
      <AnimatedStars />
      <MysticBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        
        {items.length === 0 ? (
          <div className="max-w-md mx-auto">
            <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-neutral-400" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-neutral-900">{t('cart.empty')}</h2>
              <p className="text-neutral-600 mb-6">{t('cart.emptyDescription') || t('cart.description')}</p>
              <Button 
                asChild 
                className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-8 py-3 shadow-lg"
              >
                <Link href="/">{t('cart.continueShopping')}</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Shopping Cart
              </h1>
              <p className="text-lg text-neutral-700">
                {items.length} {items.length === 1 ? t('cart.item') : t('cart.items')} in your cart
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => {
                  // Type guard to check if item is a database cart item
                  const isDatabaseItem = 'products' in item || 'services' in item;
                  
                  // Handle both database cart items and local items
                  const itemName = isDatabaseItem 
                    ? (item as DatabaseCartItem).products?.name || (item as DatabaseCartItem).services?.title
                    : (item as LocalCartItem).name;
                  
                  const itemPrice = isDatabaseItem
                    ? (item as DatabaseCartItem).products?.price || (item as DatabaseCartItem).services?.price
                    : (item as LocalCartItem).price;
                  
                  // Improved image URL extraction
                  let itemImage: string | undefined;
                  if (isDatabaseItem) {
                    const dbItem = item as DatabaseCartItem;
                    if (dbItem.products?.product_media && dbItem.products.product_media.length > 0) {
                      const primaryImage = dbItem.products.product_media.find(media => media.is_primary);
                      itemImage = primaryImage?.media_url || dbItem.products.product_media[0].media_url;
                    } else if (dbItem.products?.image_url) {
                      itemImage = dbItem.products.image_url;
                    } else if (dbItem.services?.service_media && dbItem.services.service_media.length > 0) {
                      const primaryImage = dbItem.services.service_media.find(media => media.is_primary);
                      itemImage = primaryImage?.media_url || dbItem.services.service_media[0].media_url;
                    }
                  } else {
                    itemImage = (item as LocalCartItem).image || (item as LocalCartItem).image_url;
                  }
                  
                  const itemId = item.id;
                  const itemQuantity = item.quantity;

                  return (
                    <div key={itemId} className="bg-white/95 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        {/* Product Image */}
                        <div className="relative h-20 w-20 min-w-[80px] min-h-[80px] rounded-xl overflow-hidden bg-neutral-100">
                          {itemImage ? (
                            <img src={itemImage} alt={itemName || 'Item'} className="object-cover w-full h-full" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                              <ShoppingBag className="h-8 w-8" />
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-lg text-neutral-900 truncate">{itemName || 'Unnamed Item'}</h3>
                              <p className="text-sm text-neutral-600 capitalize">
                                {isDatabaseItem 
                                  ? ((item as DatabaseCartItem).products ? 'Product' : 'Service')
                                  : 'Item'
                                }
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(itemId)}
                              className="text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                              title={t('cart.remove')}
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>

                          {/* Quantity and Price Controls */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                              <button
                                className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg bg-white hover:bg-neutral-50 text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => updateQuantity(itemId, itemQuantity - 1)}
                                disabled={itemQuantity <= 1}
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-12 text-center text-lg font-medium text-neutral-900">{itemQuantity}</span>
                              <button
                                className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-lg bg-white hover:bg-neutral-50 text-neutral-700"
                                onClick={() => updateQuantity(itemId, itemQuantity + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-xl text-neutral-900">
                                ₹{(Number(itemPrice) * itemQuantity).toLocaleString('en-IN')}
                              </div>
                              <div className="text-sm text-neutral-600">
                                ₹{Number(itemPrice).toLocaleString('en-IN')} each
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/95 rounded-2xl p-6 shadow-lg sticky top-8">
                  <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg text-neutral-700">
                      <span>Subtotal</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-lg text-neutral-700">
                      <span>Shipping</span>
                      <div className="text-right">
                        <span className="line-through text-neutral-400 mr-2">₹9.99</span>
                        <span className="inline-block bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-medium">Free</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-lg text-neutral-700">
                      <span>Tax</span>
                      <span>₹{(total * 0.08).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="flex justify-between text-xl font-bold text-neutral-900">
                        <span>Total</span>
                        <span>₹{(total * 1.08).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      className="w-full bg-green-800 hover:bg-green-900 text-white text-lg font-semibold py-4 rounded-xl shadow-lg"
                    >
                      <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-lg font-semibold py-4 rounded-xl"
                    >
                      <Link href="/">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>

                {/* Promo Code Section */}
                <div className="bg-white/95 rounded-2xl p-6 shadow-lg mt-6">
                  <h4 className="text-lg font-semibold mb-4 text-neutral-900">Promo Code</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    />
                    <Button 
                      variant="outline" 
                      className="w-full border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-xl py-3"
                    >
                      Apply Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}