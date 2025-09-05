"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AnimatedStars } from '@/app/components/AnimatedStars'
import { MysticBackground } from '@/app/components/MysticBackground'
import { toast } from 'sonner'

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  total_amount: number;
  status: string;
  created_at: string;
  items: OrderItem[];
}

interface ApiOrderItem {
  name?: string;
  quantity?: number;
  total_price?: number;
  unit_price?: number;
  products?: {
    name?: string;
  };
  services?: {
    title?: string;
  };
}

interface ApiOrder {
  id: number;
  total_amount?: number;
  subtotal?: number;
  status: string;
  created_at: string;
  order_items?: ApiOrderItem[];
}

import { useCurrentUser } from '@/hooks/useCurrentUser'

export default function OrdersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const { userId, isAuthenticated } = useCurrentUser()
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState<Order[]>([])
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null)
  
  useEffect(() => {
    // Redirect if not authenticated
    if (status === 'unauthenticated') {
      router.push('/signin?redirect=orders');
      return;
    }
    
    const fetchOrders = async () => {
      try {
        setLoading(true);
        
        if (!isAuthenticated || !userId) {
          throw new Error('User not authenticated');
        }

        // Fetch order history from existing route
        const ordersRes = await fetch(`/api/orders?userId=${userId}`);
        if (!ordersRes.ok) {
          const errData = await ordersRes.json().catch(() => ({}));
          throw new Error(errData.error || 'Failed to fetch orders');
        }

        const data = await ordersRes.json();
        const apiOrders = (data.orders || []) as ApiOrder[];
        const mapped: Order[] = apiOrders.map((o: ApiOrder) => ({
          id: o.id,
          total_amount: Number(o.total_amount ?? o.subtotal ?? 0),
          status: o.status,
          created_at: o.created_at,
          items: (o.order_items || []).map((it: ApiOrderItem) => ({
            name: it.name || it.products?.name || it.services?.title || 'Item',
            quantity: it.quantity ?? 1,
            price: Number(it.total_price ?? (Number(it.unit_price ?? 0) * (it.quantity ?? 1)))
          }))
        }));

        setOrders(mapped);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        toast.error("Failed to load order history");
      } finally {
        setLoading(false);
      }
    };
    
    if (status === 'authenticated') {
      fetchOrders();
    }
  }, [status, router, isAuthenticated, userId]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const formatDateWithTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  const toggleOrderDetails = (orderId: number) => {
    setActiveOrderId(activeOrderId === orderId ? null : orderId);
  };
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'pending':
      case 'processing':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  if (status === 'loading' || loading) {
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
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
      <AnimatedStars />
      <MysticBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900">
            My Orders
          </h1>
          <p className="text-lg text-neutral-700">Track and view details of all your orders</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Order Status Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/95 rounded-xl p-2 shadow-lg">
              <div className="flex space-x-1">
                <button className="px-6 py-3 rounded-lg bg-green-800 text-white font-medium shadow-sm">
                  On Shipping
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {orders.filter(o => o.status === 'processing' || o.status === 'pending').length}
                  </span>
                </button>
                <button className="px-6 py-3 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium">
                  Arrived
                  <span className="ml-2 text-neutral-400 text-xs">
                    {orders.filter(o => o.status === 'completed').length}
                  </span>
                </button>
                <button className="px-6 py-3 rounded-lg text-neutral-600 hover:bg-neutral-50 font-medium">
                  Cancelled
                  <span className="ml-2 text-neutral-400 text-xs">
                    {orders.filter(o => o.status === 'cancelled').length}
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Orders List */}
          <div className="space-y-6">
            {orders.length === 0 ? (
              <div className="bg-white/95 rounded-2xl p-12 text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-neutral-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">No orders yet</h3>
                <p className="text-neutral-600 mb-6">You haven&apos;t placed any orders yet. Start exploring our products!</p>
                <Button 
                  onClick={() => router.push('/shop')}
                  className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-xl shadow-lg"
                >
                  Explore Products
                </Button>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-white/95 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Order Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-neutral-900 text-lg">Order #{order.id}</h3>
                            <p className="text-neutral-600 text-sm">{formatDate(order.created_at)}</p>
                          </div>
                        </div>
                        <div className="ml-14">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                              {order.status === 'processing' || order.status === 'pending' ? 'On Delivery' : 
                               order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                            <span className="text-neutral-600 text-sm">
                              {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                            </span>
                          </div>
                          {(order.status === 'processing' || order.status === 'pending') && (
                            <p className="text-sm text-neutral-600 mt-2">
                              Estimated arrival: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-neutral-900 mb-1">
                          ₹{order.total_amount.toLocaleString('en-IN')}
                        </div>
                        <button className="text-green-800 hover:text-green-900 text-sm font-medium">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="px-6 pb-4">
                    <div className="flex space-x-3 overflow-x-auto">
                      {order.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex-shrink-0 bg-neutral-50 rounded-lg p-3 min-w-[200px]">
                          <div className="w-12 h-12 bg-neutral-200 rounded-lg mb-2"></div>
                          <h4 className="font-medium text-neutral-900 text-sm mb-1 truncate">{item.name}</h4>
                          <p className="text-neutral-600 text-xs">Qty: {item.quantity}</p>
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="flex-shrink-0 bg-neutral-50 rounded-lg p-3 min-w-[120px] flex items-center justify-center">
                          <span className="text-neutral-600 text-sm">+{order.items.length - 3} more</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Order Details */}
                  {activeOrderId === order.id && (
                    <div className="border-t border-neutral-100 p-6 bg-neutral-50/50">
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-4">Order Details</h4>
                        <div className="space-y-3">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2">
                              <div className="flex-1">
                                <h5 className="font-medium text-neutral-900">{item.name}</h5>
                                <p className="text-neutral-600 text-sm">Quantity: {item.quantity}</p>
                              </div>
                              <span className="font-medium text-neutral-900">
                                ₹{item.price.toLocaleString('en-IN')}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-neutral-200 mt-4 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-neutral-900">Total</span>
                            <span className="font-bold text-xl text-neutral-900">
                              ₹{order.total_amount.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          variant="outline" 
                          className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-xl"
                          onClick={() => router.push(`/order-confirmation/${order.id}`)}
                        >
                          View Full Details
                        </Button>
                        {(order.status === 'pending' || order.status === 'processing') && (
                          <Button 
                            variant="outline" 
                            className="border-red-200 text-red-600 hover:bg-red-50 rounded-xl"
                            onClick={async (e) => {
                              e.stopPropagation();
                              try {
                                const res = await fetch('/api/orders', {
                                  method: 'PATCH',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ orderId: order.id, userId, action: 'cancel' })
                                })
                                const data = await res.json()
                                if (!res.ok || !data.success) throw new Error(data.error || 'Failed to cancel order')
                                setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, status: 'cancelled' } : o))
                                toast.success('Order cancelled')
                              } catch (err) {
                                toast.error(err instanceof Error ? err.message : 'Failed to cancel order')
                              }
                            }}
                          >
                            Cancel Order
                          </Button>
                        )}
                        {order.status === 'completed' && (
                          <Button 
                            className="bg-green-800 hover:bg-green-900 text-white rounded-xl shadow-lg"
                          >
                            Buy Again
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Bottom Navigation */}
          {orders.length > 0 && (
            <div className="mt-12 bg-white/95 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <Button 
                  variant="outline" 
                  className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 rounded-xl px-6 py-3"
                  onClick={() => router.push('/profile')}
                >
                  ← Back to Profile
                </Button>
                <Button 
                  className="bg-green-800 hover:bg-green-900 text-white rounded-xl px-8 py-3 shadow-lg"
                  onClick={() => router.push('/shop')}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}