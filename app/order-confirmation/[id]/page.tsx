// File: app/order-confirmation/[id]/page.tsx
"use client"
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { AnimatedStars } from '@/app/components/AnimatedStars'
import { MysticBackground } from '@/app/components/MysticBackground'
import { toast } from 'sonner'
import { CheckCircle, Copy, Calendar, MapPin, CreditCard, Clock, Sparkles } from 'lucide-react'

interface ConfirmItem {
  id: number;
  name: string;
  unit_price: number;
  quantity: number;
  total_price: number;
}

interface ConfirmOrder {
  id: number;
  order_number: string;
  order_date: string;
  order_status: string;
  payment_method: string | null;
  payment_status: string;
  estimated_delivery: string;
  items: ConfirmItem[];
  subtotal: number;
  total: number;
  shipping_address?: {
    fullName?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: string;
    phone?: string;
  };
}

interface ApiOrderItem {
  id: number;
  name?: string;
  unit_price?: number;
  quantity?: number;
  total_price?: number;
  products?: {
    name?: string;
  };
  services?: {
    title?: string;
  };
}

interface ApiOrder {
  id: number;
  order_number: string;
  created_at: string;
  status: string;
  payment_method?: string;
  payment_status: string;
  subtotal?: number;
  total_amount?: number;
  order_items?: ApiOrderItem[];
  shipping_address?: {
    fullName?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    pincode?: string;
    phone?: string;
  };
}

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { userId, isAuthenticated } = useCurrentUser();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<ConfirmOrder | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Redirect if not authenticated
    if (status === 'unauthenticated') {
      router.push('/signin?redirect=order-confirmation');
      return;
    }

    const fetchOrderData = async () => {
      try {
        if (!isAuthenticated || !userId) {
          throw new Error('User not authenticated');
        }

        // Fetch user's orders and pick this one by id
        const res = await fetch(`/api/orders?userId=${userId}`);
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch orders');
        }
        const data = await res.json();
        const orders = (data.orders || []) as ApiOrder[];
        const raw = orders.find((o: ApiOrder) => String(o.id) === String(params.id));
        if (!raw) {
          throw new Error('Order not found');
        }

        const mapped: ConfirmOrder = {
          id: raw.id,
          order_number: raw.order_number,
          order_date: raw.created_at,
          order_status: raw.status,
          payment_method: raw.payment_method ?? null,
          payment_status: raw.payment_status,
          estimated_delivery: '',
          items: (raw.order_items || []).map((it: ApiOrderItem) => ({
            id: it.id,
            name: it.name || it.products?.name || it.services?.title || 'Item',
            unit_price: Number(it.unit_price ?? 0),
            quantity: it.quantity ?? 1,
            total_price: Number(it.total_price ?? (Number(it.unit_price ?? 0) * (it.quantity ?? 1))),
          })),
          subtotal: Number(raw.subtotal ?? 0),
          total: Number(raw.total_amount ?? raw.subtotal ?? 0),
          shipping_address: raw.shipping_address ?? undefined,
        };

        setOrder(mapped);
      } catch (err) {
        console.error('Error fetching order:', err);
        toast.error(err instanceof Error ? err.message : "Failed to load order information");
      } finally {
        setLoading(false);
      }
    };
    
    if (status === 'authenticated') {
      fetchOrderData();
    }
  }, [status, router, params.id, isAuthenticated, userId]);

  const copyOrderNumber = () => {
    if (order?.order_number) {
      navigator.clipboard.writeText(order.order_number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Order number copied to clipboard");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
  <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
      <AnimatedStars />
      <MysticBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gold"></div>
          </div>
        ) : order ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex justify-center items-center p-4 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-16 w-16 text-green-800" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
                Order Confirmed!
              </h1>
              <p className="text-lg text-neutral-700">
                Thank you for your purchase. We&apos;ve received your order and will process it shortly.
              </p>
            </div>
            
            {/* Order Header Card */}
            <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Order Details</h2>
                  <div className="flex items-center">
                    <span className="text-neutral-700 mr-2">Order #{order.order_number}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6 text-neutral-500 hover:text-green-800 hover:bg-green-100"
                      onClick={copyOrderNumber}
                    >
                      {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button 
                  onClick={() => router.push('/orders')}
                  className="mt-4 md:mt-0 bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
                >
                  View All Orders
                </Button>
              </div>
            </div>

            {/* Order Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Order Date</h3>
                    <p className="text-neutral-700">{formatDate(order.order_date)}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Estimated Delivery</h3>
                    <p className="text-neutral-700">
                      {order.estimated_delivery || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <CreditCard className="h-5 w-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Payment Method</h3>
                    <p className="text-neutral-700">{order.payment_method ?? 'Cash on Delivery'}</p>
                    <p className="text-sm text-neutral-600">Status: {order.payment_status}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-green-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Shipping Address</h3>
                    {order.shipping_address ? (
                      <div className="text-neutral-700 space-y-1">
                        {order.shipping_address.fullName && (
                          <p>{order.shipping_address.fullName}</p>
                        )}
                        {order.shipping_address.addressLine1 && (
                          <p className="text-sm">{order.shipping_address.addressLine1}</p>
                        )}
                        {order.shipping_address.addressLine2 && (
                          <p className="text-sm">{order.shipping_address.addressLine2}</p>
                        )}
                        {(order.shipping_address.city || order.shipping_address.state || order.shipping_address.pincode) && (
                          <p className="text-sm">
                            {[order.shipping_address.city, order.shipping_address.state, order.shipping_address.pincode].filter(Boolean).join(', ')}
                          </p>
                        )}
                        {order.shipping_address.phone && (
                          <p className="text-sm">Phone: {order.shipping_address.phone}</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-neutral-600">No shipping address available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Items Card */}
            <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-neutral-900">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3 border-b border-neutral-100 last:border-b-0">
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-900">{item.name}</h4>
                      <p className="text-sm text-neutral-600">₹{item.unit_price.toLocaleString('en-IN')} × {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      ₹{item.total_price.toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
                
                <div className="border-t border-neutral-200 pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-neutral-700">
                    <span>Subtotal</span>
                    <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-700">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                    <span>Total</span>
                    <span>₹{order.total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
              
            {/* Preparation Status Card */}
            <div className="bg-white/95 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6 text-green-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Preparation in Progress</h3>
                  <p className="text-neutral-700">
                    Our expert gemologists are preparing your items with utmost care. Each item is cleansed, energized, and blessed following ancient rituals to enhance their natural healing properties before being shipped to you.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <Button 
                  onClick={() => router.push(`/order-tracking/${order.id}`)}
                  className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
                >
                  Track Order
                </Button>
                <Button 
                  onClick={() => router.push('/shop')}
                  variant="outline"
                  className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-xl px-6 py-3"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Order not found</h3>
            <p className="text-neutral-600 mb-6">We couldn&apos;t find the order you&apos;re looking for.</p>
            <Button 
              onClick={() => router.push('/orders')}
              className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-6 py-3 shadow-lg"
            >
              View Your Orders
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}