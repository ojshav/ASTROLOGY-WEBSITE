"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { AnimatedStars } from '@/app/components/AnimatedStars'
import { MysticBackground } from '@/app/components/MysticBackground'
import { toast } from 'sonner'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useCart } from '../contexts/CartContext'

// Database cart item structure (matching cart page)
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
type CheckoutItem = DatabaseCartItem | LocalCartItem;

interface CartData {
  cart: {
    id: number;
    cart_items: DatabaseCartItem[];
  };
  totalItems: number;
  totalPrice: number;
}

interface AddressInfo {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export default function CheckoutPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const { userId, isAuthenticated } = useCurrentUser()
  const { items: localItems, removeItem: removeLocalItem, updateQuantity: updateLocalQuantity, total: localTotal } = useCart()
  
  const [loading, setLoading] = useState(true)
  const [cartData, setCartData] = useState<CartData | null>(null)
  const [address, setAddress] = useState<AddressInfo>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  })
  const [savedAddresses, setSavedAddresses] = useState<AddressInfo[]>([])
  const [paymentMethod, setPaymentMethod] = useState('online')
  const [isUpdatingCart, setIsUpdatingCart] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  useEffect(() => {
    const fetchCheckoutData = async () => {
      if (!isAuthenticated || !userId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Fetch cart data from database (same as cart page)
        const cartRes = await fetch(`/api/cart?userId=${userId}`);
        if (cartRes.ok) {
          const data = await cartRes.json();
          setCartData(data);
        } else {
          console.error('Failed to fetch cart');
        }
        
        // Fetch saved addresses if available
        try {
          const addressRes = await fetch(`/api/user/addresses?userId=${userId}`);
          if (addressRes.ok) {
            const addressData = await addressRes.json();
            setSavedAddresses(addressData.addresses || []);
            
            // Set default address if available
            if (addressData.addresses && addressData.addresses.length > 0) {
              setAddress(addressData.addresses[0]);
            }
          }
        } catch (err) {
          console.error("Could not fetch addresses:", err);
          // Continue with checkout even if addresses can't be fetched
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load checkout information");
      } finally {
        setLoading(false);
      }
    };
    
    fetchCheckoutData();
  }, [userId, isAuthenticated]);
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectAddress = (addressId: string) => {
    const selected = savedAddresses.find((addr, index) => index.toString() === addressId);
    if (selected) {
      setAddress(selected);
    }
  };

  const handleRemoveItem = async (cartItemId: number | string) => {
    setIsUpdatingCart(true);
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
          toast.success("Item removed from cart");
        }
      } else {
        // If it's a local item, remove from local state
        removeLocalItem(cartItemId);
        toast.success("Item removed from cart");
      }
    } catch (err) {
      console.error('Error removing item:', err);
      toast.error("Failed to remove item from cart");
    } finally {
      setIsUpdatingCart(false);
    }
  };

  const handleUpdateQuantity = async (cartItemId: number | string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }

    setIsUpdatingCart(true);
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
          toast.success("Cart updated");
        }
      } else {
        // If it's a local item, update local state
        updateLocalQuantity(cartItemId, newQuantity);
        toast.success("Cart updated");
      }
    } catch (err) {
      console.error('Error updating quantity:', err);
      toast.error("Failed to update cart");
    } finally {
      setIsUpdatingCart(false);
    }
  };
  
  // Use database cart data if available, fallback to local items
  const items = cartData?.cart?.cart_items || localItems;
  const total = cartData?.totalPrice || localTotal;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    
    // Validate address information
    const requiredFields = ['fullName', 'addressLine1', 'city', 'state', 'pincode', 'phone'];
    for (const field of requiredFields) {
      if (!address[field as keyof AddressInfo]) {
        toast.error(`Please provide your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }
    
    // Validate phone number (basic validation)
    if (!/^\d{10}$/.test(address.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    
    try {
      setIsSubmitting(true);
      // Save the address first if API endpoint exists
      try {
        await fetch("/api/user/addresses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId,
            address: {
              fullName: address.fullName,
              phone: address.phone,
              addressLine1: address.addressLine1,
              addressLine2: address.addressLine2,
              city: address.city,
              state: address.state,
              pincode: address.pincode,
              country: 'India',
              addressType: 'home'
            },
            setDefault: true
          }),
        });
      } catch (err) {
        console.warn("Could not save address:", err);
        // Continue with order creation even if address saving fails
      }
      
      // Check if user is authenticated and has userId
      if (!isAuthenticated || !userId) {
        toast.error("Please log in to place an order");
        router.push('/signin?redirect=checkout');
        return;
      }
      
      // Process payment based on method
      if (paymentMethod === 'online') {
        // For online payments, we still need to create the order first
        // Then redirect to payment gateway
        const orderRes = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId,
            shippingAddress: address,
            billingAddress: address, // Using same address for billing
            paymentMethod: 'online',
            notes: `Payment method: Online payment`
          }),
        });
        
        const orderData = await orderRes.json();
        
        if (orderData.success) {
          // Now redirect to payment gateway with order info
          const paymentRes = await fetch("/api/checkout/finalize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              orderId: orderData.orderId,
              orderNumber: orderData.orderNumber,
              shippingAddress: address,
              billingAddress: address
            }),
          });
          
          const paymentData = await paymentRes.json();
          
          if (paymentData.redirectUrl) {
            router.push(paymentData.redirectUrl); // Handle dummy checkout redirect
          } else {
            throw new Error("Payment initialization failed");
          }
        } else {
          throw new Error("Order creation failed");
        }
      } else {
        // COD processing using new orders API
        const res = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId,
            shippingAddress: address,
            billingAddress: address, // Using same address for billing
            paymentMethod: 'cod',
            notes: `Payment method: Cash on Delivery`
          }),
        });
        
        const data = await res.json();
        
        if (data.success) {
          toast.success("Order placed successfully!");
          router.push(`/order-confirmation/${data.orderId}`);
        } else {
          throw new Error("Order placement failed");
        }
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to complete checkout. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculateTotalPrice = (item: CheckoutItem) => {
    // Type guard to check if item is a database cart item
    const isDatabaseItem = 'products' in item || 'services' in item;
    
    if (isDatabaseItem) {
      const dbItem = item as DatabaseCartItem;
      return Number(dbItem.price) * dbItem.quantity;
    } else {
      const localItem = item as LocalCartItem;
      return Number(localItem.price) * localItem.quantity;
    }
  };
  
  const subtotal = items.reduce((sum, item) => sum + calculateTotalPrice(item), 0);
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
      <AnimatedStars />
      <MysticBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
            Checkout
          </h1>
          <p className="text-lg text-neutral-700">
            Review and complete your order
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Your cart is empty</h3>
            <p className="text-neutral-600 mb-6">Add some products to continue with checkout.</p>
            <Button 
              onClick={() => router.push('/shop')}
              className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Order Items Review */}
                <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Review Your Items</h3>
                  <div className="space-y-4">
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
                      
                      const itemId = item.id;
                      const itemQuantity = item.quantity;

                      return (
                        <div key={itemId} className="flex justify-between items-center py-4 border-b border-neutral-100 last:border-b-0">
                          <div className="flex-1">
                            <h4 className="font-medium text-neutral-900">{itemName || 'Unnamed Item'}</h4>
                            <p className="text-sm text-neutral-600">₹{Number(itemPrice).toLocaleString('en-IN')} each</p>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-lg border-neutral-300 hover:bg-neutral-50"
                                onClick={() => handleUpdateQuantity(itemId, itemQuantity - 1)}
                                disabled={isUpdatingCart || itemQuantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              
                              <span className="text-neutral-900 min-w-8 text-center font-medium">
                                {itemQuantity}
                              </span>
                              
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-lg border-neutral-300 hover:bg-neutral-50"
                                onClick={() => handleUpdateQuantity(itemId, itemQuantity + 1)}
                                disabled={isUpdatingCart}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="text-right min-w-20">
                              <span className="font-semibold text-neutral-900">
                                ₹{calculateTotalPrice(item).toLocaleString('en-IN')}
                              </span>
                            </div>
                            
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                              onClick={() => handleRemoveItem(itemId)}
                              disabled={isUpdatingCart}
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200">
                    <Button 
                      variant="outline"
                      className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-xl"
                      onClick={() => router.push('/shop')}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Shipping Address */}
                  <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Shipping Address</h3>
                    
                    {savedAddresses.length > 0 && (
                      <div className="mb-6">
                        <Label className="text-neutral-700 mb-2 block">Select a saved address</Label>
                        <Select onValueChange={handleSelectAddress}>
                          <SelectTrigger className="bg-white border-neutral-300 text-neutral-900 rounded-xl">
                            <SelectValue placeholder="Choose address..." />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-neutral-300 rounded-xl">
                            {savedAddresses.map((addr, index) => (
                              <SelectItem key={index} value={index.toString()} className="text-neutral-900 hover:bg-neutral-50">
                                {addr.fullName}, {addr.addressLine1}, {addr.city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-neutral-700">Full Name</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={address.fullName}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-neutral-700">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={address.phone}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="addressLine1" className="text-neutral-700">Address Line 1</Label>
                        <Input
                          id="addressLine1"
                          name="addressLine1"
                          value={address.addressLine1}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                          placeholder="House no., Building name"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="addressLine2" className="text-neutral-700">Address Line 2 (Optional)</Label>
                        <Input
                          id="addressLine2"
                          name="addressLine2"
                          value={address.addressLine2}
                          onChange={handleAddressChange}
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                          placeholder="Street, Locality"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-neutral-700">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={address.city}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-neutral-700">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={address.state}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pincode" className="text-neutral-700">PIN Code</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={address.pincode}
                          onChange={handleAddressChange}
                          required
                          className="bg-white border-neutral-300 text-neutral-900 rounded-xl focus:ring-green-800 focus:border-green-800"
                          placeholder="6-digit PIN code"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method */}
                  <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 text-neutral-900">Payment Method</h3>
                    
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                        <RadioGroupItem 
                          value="online" 
                          id="online" 
                          className="border-green-800 text-green-800"
                        />
                        <Label htmlFor="online" className="text-neutral-700 cursor-pointer flex-1">
                          Online Payment (Credit/Debit Card, UPI, Net Banking)
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50">
                        <RadioGroupItem 
                          value="cod" 
                          id="cod" 
                          className="border-green-800 text-green-800"
                        />
                        <Label htmlFor="cod" className="text-neutral-700 cursor-pointer flex-1">
                          Cash on Delivery (COD)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </form>
              </div>
              
              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/95 rounded-2xl p-6 shadow-lg sticky top-8">
                  <h3 className="text-2xl font-semibold mb-6 text-neutral-900 text-center">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg text-neutral-700">
                      <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'items'})</span>
                      <span className="font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-lg text-neutral-700">
                      <span>Shipping</span>
                      <span className="font-medium text-green-800">Free</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="flex justify-between text-xl font-bold text-neutral-900">
                        <span>Total</span>
                        <span>₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-green-800 hover:bg-green-900 text-white text-lg font-semibold py-4 rounded-xl shadow-lg"
                    disabled={items.length === 0 || isUpdatingCart || isSubmitting}
                  >
                    {isSubmitting
                      ? (paymentMethod === 'online' ? 'Processing…' : 'Placing…')
                      : (paymentMethod === 'online' ? 'Proceed to Payment' : 'Place Order')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}