"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AnimatedStars } from '@/app/components/AnimatedStars'
import { MysticBackground } from '@/app/components/MysticBackground'
import { toast } from 'sonner'

interface OrderItem {
  product_name: string;
  quantity: number;
  carats?: number;
  price: number;
  is_stone: boolean;
  is_service: boolean;
}

interface Order {
  id: number;
  total_amount: number;
  status: string;
  created_at: string;
  items: OrderItem[];
}

export default function OrdersPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
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
        
        // Fetch order history
        const ordersRes = await fetch('/api/user/orders');
        if (ordersRes.ok) {
          const ordersData = await ordersRes.json();
          setOrders(ordersData.orders || []);
        } else {
          throw new Error('Failed to fetch orders');
        }
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
  }, [status, router]);
  
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
        return 'bg-green-500/20 text-green-500';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'processing':
        return 'bg-blue-500/20 text-blue-500';
      case 'cancelled':
        return 'bg-red-500/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };
  
  if (status === 'loading' || loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-golden-amber-dark via-sunburst-yellow to-golden-amber-dark">
        <AnimatedStars />
        <MysticBackground />
        <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
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
      <div className="container mx-auto pt-32 px-4 py-16 relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center text-neutral-900">
          Your Orders
        </h1>
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/90 border border-gold/30">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-neutral-900">Order History</CardTitle>
              <CardDescription className="text-neutral-700">
                Track and view details of all your previous orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length === 0 ? (
                <div className="text-center p-8">
                  <p className="text-lg text-neutral-700 mb-4">You haven&apos;t placed any orders yet</p>
                  <Button 
                    onClick={() => router.push('/shop')}
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Explore Products
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <Card key={order.id} className="border border-gold/20 bg-white/80">
                      <CardContent className="p-6">
                        <div 
                          className="flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer"
                          onClick={() => toggleOrderDetails(order.id)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h4 className="text-neutral-900 font-medium">
                                {formatDate(order.created_at)}
                              </h4>
                              <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                              </span>
                            </div>
                            <p className="text-neutral-700 text-sm">
                              {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0 flex items-center">
                            <span className="text-neutral-900 font-medium text-lg">
                              ₹{order.total_amount.toLocaleString('en-IN')}
                            </span>
                            <span className="ml-3 text-neutral-700">
                              {activeOrderId === order.id ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="18 15 12 9 6 15"></polyline>
                                </svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              }
                            </span>
                          </div>
                        </div>
                        {activeOrderId === order.id && (
                          <div className="mt-6 border-t border-gold/10 pt-4">
                            <div className="flex justify-between mb-3">
                              <h5 className="text-neutral-900 font-medium">Order Details</h5>
                              <p className="text-neutral-700 text-sm">
                                Placed on {formatDateWithTime(order.created_at)}
                              </p>
                            </div>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="text-neutral-900">Item</TableHead>
                                  <TableHead className="text-neutral-900 text-right">Quantity/Carats</TableHead>
                                  <TableHead className="text-neutral-900 text-right">Price</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {order.items.map((item, idx) => (
                                  <TableRow key={idx}>
                                    <TableCell className="text-neutral-900 font-medium">
                                      {item.product_name}
                                    </TableCell>
                                    <TableCell className="text-neutral-700 text-right">
                                      {item.is_stone ? `${item.carats} carats` : item.quantity}
                                    </TableCell>
                                    <TableCell className="text-neutral-900 text-right">
                                      ₹{item.price.toLocaleString('en-IN')}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                            <div className="flex justify-end mt-4 space-x-4">
                              <Button 
                                variant="outline" 
                                className="border-neutral-400 text-neutral-900 hover:bg-neutral-100"
                                onClick={() => router.push(`/orders/${order.id}`)}
                              >
                                View Full Details
                              </Button>
                              {(order.status === 'pending' || order.status === 'processing') && (
                                <Button 
                                  variant="outline" 
                                  className="border-red-500/30 text-red-500 hover:bg-red-500/10"
                                >
                                  Cancel Order
                                </Button>
                              )}
                              {order.status === 'completed' && (
                                <Button 
                                  className="bg-black text-white hover:bg-gray-800"
                                >
                                  Buy Again
                                </Button>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center mt-8">
                <Button 
                  variant="outline" 
                  className="border-neutral-400 text-neutral-900 hover:bg-neutral-100"
                  onClick={() => router.push('/profile')}
                >
                  Back to Profile
                </Button>
                <Button 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => router.push('/shop')}
                >
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}