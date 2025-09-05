'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, AreaChart, Area, ComposedChart
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Users, Package, Star, DollarSign, 
  ShoppingCart, UserCheck, Activity, MapPin, Calendar, Eye
} from 'lucide-react';

// Import data from data files
import { products } from '../../../data/products.js';
import { services } from '../../../data/services.js';

// Currency formatting
const formatCurrency = (value: string | number) => {
  const numValue = typeof value === 'string' ? parseFloat(value) : Number(value);
  return isNaN(numValue) ? '0.00' : numValue.toFixed(2);
};

const formatNumber = (value: number) => value ? String(value) : '0';

// --- DASHBOARD DATA WITH REAL PRODUCT/SERVICE INTEGRATION ---
const dashboardData = {
  // Main Metrics
  totalRevenue: 567890,
  totalProducts: products.length,
  totalServices: services.length,
  totalOrders: 1250,
  totalUsers: 3394,
  totalAstrologers: 15,
  
  // Revenue breakdown
  productRevenue: 234560,
  serviceRevenue: 198320,
  astrologerRevenue: 135010,
  
  // Growth percentages
  revenueGrowth: 12.5,
  productGrowth: 8.3,
  serviceGrowth: 15.2,
  orderGrowth: -3.5,
  userGrowth: 7.2,
  astrologerGrowth: 6.7,
  
  // Monthly Revenue Data
  monthlyRevenue: [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 38000 },
    { month: 'Mar', revenue: 45000 },
    { month: 'Apr', revenue: 52000 },
    { month: 'May', revenue: 48000 },
    { month: 'Jun', revenue: 55000 },
    { month: 'Jul', revenue: 59000 },
    { month: 'Aug', revenue: 62000 },
    { month: 'Sep', revenue: 58000 },
    { month: 'Oct', revenue: 65000 },
    { month: 'Nov', revenue: 68000 },
    { month: 'Dec', revenue: 72000 }
  ],
  
  // Weekly Revenue Data
  weeklyRevenue: [
    { week: 'W1', revenue: 16500 },
    { week: 'W2', revenue: 14800 },
    { week: 'W3', revenue: 18200 },
    { week: 'W4', revenue: 17600 },
    { week: 'W5', revenue: 19100 },
    { week: 'W6', revenue: 20500 },
    { week: 'W7', revenue: 18900 },
    { week: 'W8', revenue: 21300 }
  ],
  
  // Top Products - Using real product data
  topProducts: products.slice(0, 5).map((product, index) => ({
    id: product.id,
    name: product.title,
    image: product.image || '/placeholder.jpg',
    review: product.rating || 4.5,
    sold: Math.floor(Math.random() * 200) + 50, // Random sold count
    profit: Math.floor(Math.random() * 25000) + 10000 // Random profit
  })),
  
  // Top Services - Using real service data
  topServices: services.slice(0, 5).map((service, index) => ({
    id: service.id,
    name: service.title,
    image: service.images ? service.images[0] : '/placeholder.jpg',
    review: service.rating || 4.6,
    bookings: service.ordersCount || Math.floor(Math.random() * 100) + 20,
    revenue: service.price * (service.ordersCount || Math.floor(Math.random() * 100) + 20)
  })),
  
  // Top Astrologers - Mock data with placeholder images
  topAstrologers: [
    { 
      id: 1, 
      name: 'Dr. Raj Sharma', 
      image: '/images/placeholder-author.jpg',
      review: 4.9, 
      consultations: 145, 
      revenue: 43500 
    },
    { 
      id: 2, 
      name: 'Priya Joshi', 
      image: '/images/female-avatar.png',
      review: 4.8, 
      consultations: 132, 
      revenue: 39600 
    },
    { 
      id: 3, 
      name: 'Acharya Kumar', 
      image: '/images/placeholder-author.jpg',
      review: 4.7, 
      consultations: 118, 
      revenue: 35400 
    },
    { 
      id: 4, 
      name: 'Guru Divya', 
      image: '/images/female-avatar.png',
      review: 4.8, 
      consultations: 98, 
      revenue: 29400 
    },
    { 
      id: 5, 
      name: 'Pandit Verma', 
      image: '/images/placeholder-author.jpg',
      review: 4.6, 
      consultations: 87, 
      revenue: 26100 
    }
  ],
  
  // User Statistics
  userStats: {
    male: 942,
    female: 2452,
    totalActive: 2890,
    newUsers: 25,
    returningUsers: 75
  },
  
  // Astrologer Statistics
  astrologerStats: {
    active: 12,
    inactive: 3,
    totalConsultations: 1240,
    averageRating: 4.7
  },
  
  // Geographic Distribution with coordinates
  geographicData: [
    { 
      region: 'Asia', 
      percentage: 45, 
      color: '#3B82F6',
      coordinates: [77.2090, 28.6139], // Delhi, India
      users: 1527
    },
    { 
      region: 'America', 
      percentage: 30, 
      color: '#10B981',
      coordinates: [-95.7129, 37.0902], // USA center
      users: 1018
    },
    { 
      region: 'Europe', 
      percentage: 15, 
      color: '#8B5CF6',
      coordinates: [10.4515, 51.1657], // Germany center
      users: 509
    },
    { 
      region: 'Others', 
      percentage: 10, 
      color: '#F59E0B',
      coordinates: [133.7751, -25.2744], // Australia center
      users: 340
    }
  ]
};

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('monthly');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [monthRange, setMonthRange] = useState<number>(12); // months shown when monthly selected (1,3,6,12)

  const getMonthlySlice = (months: number) => {
    const data = dashboardData.monthlyRevenue.slice(-months);
    return data;
  };
  
  const currentRevenueData = timeRange === 'monthly' ? getMonthlySlice(monthRange) : dashboardData.weeklyRevenue;

  // Revenue breakdown for donut chart
  const revenueBreakdown = [
    { name: 'Products', value: dashboardData.productRevenue, color: '#3b82f6' },
    { name: 'Services', value: dashboardData.serviceRevenue, color: '#8b5cf6' },
    { name: 'Astrologers', value: dashboardData.astrologerRevenue, color: '#10b981' }
  ];

  // --- Derived values for the Revenue Breakdown card ---
  const totalBreakdown = revenueBreakdown.reduce((s, r) => s + r.value, 0);
  const topSegment = revenueBreakdown.reduce((prev, curr) => (curr.value > prev.value ? curr : prev), revenueBreakdown[0]);
  const avgOrderValue = dashboardData.totalOrders ? Math.round(dashboardData.totalRevenue / dashboardData.totalOrders) : 0;

  // Build a simple contributors list from top lists (products use profit as proxy revenue)
  const contributors = [
    ...dashboardData.topProducts.map(p => ({ name: p.name, image: p.image, type: 'Product', revenue: p.profit })),
    ...dashboardData.topServices.map(s => ({ name: s.name, image: s.image, type: 'Service', revenue: s.revenue })),
    ...dashboardData.topAstrologers.map(a => ({ name: a.name, image: a.image, type: 'Astrologer', revenue: a.revenue }))
  ].sort((a, b) => b.revenue - a.revenue).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Customers (Total Users) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Customers</span>
              </div>
              {dashboardData.userGrowth > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardData.totalUsers.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-sm font-medium ${dashboardData.userGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {dashboardData.userGrowth > 0 ? '+' : ''}{dashboardData.userGrowth}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous month</span>
            </div>
          </div>

          {/* Total Sales (Revenue) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Sales</span>
              </div>
              {dashboardData.revenueGrowth > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${dashboardData.totalRevenue.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-sm font-medium ${dashboardData.revenueGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {dashboardData.revenueGrowth > 0 ? '+' : ''}{dashboardData.revenueGrowth}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous month</span>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Order</span>
              </div>
              {dashboardData.orderGrowth > 0 ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardData.totalOrders.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-sm font-medium ${dashboardData.orderGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {dashboardData.orderGrowth > 0 ? '+' : ''}{dashboardData.orderGrowth}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs. previous month</span>
            </div>
          </div>
        </div>

        {/* Revenue Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Products */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardData.totalProducts}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Revenue: ${dashboardData.productRevenue.toLocaleString()}
            </div>
          </div>

          {/* Total Services */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Services</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardData.totalServices}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Revenue: ${dashboardData.serviceRevenue.toLocaleString()}
            </div>
          </div>

          {/* Total Astrologers */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <UserCheck className="w-5 h-5 text-indigo-500 mr-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Astrologers</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {dashboardData.totalAstrologers}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              Revenue: ${dashboardData.astrologerRevenue.toLocaleString()}
            </div>
          </div>
        </div>

  {/* Charts and Statistics Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-stretch">
          {/* Sales Revenue (redesigned) */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm flex flex-col min-h-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Sales Revenue</h2>
                <p className="text-sm text-gray-500">Visualize revenue over selectable ranges with quick metrics.</p>
              </div>

              <div className="mt-3 sm:mt-0 flex items-center space-x-3">
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => { setTimeRange('weekly'); }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${timeRange === 'weekly' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    1W
                  </button>
                  <button
                    onClick={() => { setTimeRange('monthly'); setMonthRange(1); }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${timeRange === 'monthly' && monthRange === 1 ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    1M
                  </button>
                  <button
                    onClick={() => { setTimeRange('monthly'); setMonthRange(3); }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${timeRange === 'monthly' && monthRange === 3 ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    3M
                  </button>
                  <button
                    onClick={() => { setTimeRange('monthly'); setMonthRange(12); }}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${timeRange === 'monthly' && monthRange === 12 ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 dark:text-gray-400'}`}
                  >
                    1Y
                  </button>
                </div>

                <button
                  onClick={() => {
                    // export current data as CSV
                    const rows = (timeRange === 'monthly' ? getMonthlySlice(monthRange) : dashboardData.weeklyRevenue).map(r => ({ label: 'month' in r ? r.month : r.week, revenue: r.revenue }));
                    const csv = ['label,revenue', ...rows.map(r => `${r.label},${r.revenue}`)].join('\n');
                    const blob = new Blob([csv], { type: 'text/csv' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'revenue.csv';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200"
                >
                  Export CSV
                </button>
              </div>
            </div>

            {/* Slider control */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <div>Range: {timeRange === 'monthly' ? `${monthRange} month${monthRange > 1 ? 's' : ''}` : 'Weekly'}</div>
                <div className="text-xs text-gray-400">Drag to adjust months</div>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={monthRange}
                onChange={(e) => { setTimeRange('monthly'); setMonthRange(Number(e.target.value)); }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Summary metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-500">Total Revenue</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">₹{(timeRange === 'monthly' ? getMonthlySlice(monthRange) : dashboardData.weeklyRevenue).reduce((s, r) => s + r.revenue, 0).toLocaleString()}</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-500">Average / period</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">₹{Math.round((timeRange === 'monthly' ? getMonthlySlice(monthRange) : dashboardData.weeklyRevenue).reduce((s, r) => s + r.revenue, 0) / (timeRange === 'monthly' ? monthRange : (dashboardData.weeklyRevenue.length || 1))).toLocaleString()}</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-xs text-gray-500">Growth (vs prev)</div>
                <div className="text-lg font-semibold text-green-600">{dashboardData.revenueGrowth}%</div>
              </div>
            </div>

            <div className="flex-1 min-h-0">
              {/* Main combined chart - extended */}
              <div className="w-full h-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={currentRevenueData}>
                    <CartesianGrid stroke="#f1f5f9" />
                    <XAxis dataKey={timeRange === 'monthly' ? 'month' : 'week'} stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']} />
                    <Area type="monotone" dataKey="revenue" fill="#bfdbfe" stroke="#3b82f6" fillOpacity={0.35} />
                    <Bar dataKey="revenue" barSize={18} fill="#3b82f6" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Revenue Breakdown</h3>

            <div className="flex items-center space-x-4">
              <div className="w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={38}
                      outerRadius={56}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {revenueBreakdown.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">Total Revenue</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">₹{(dashboardData.productRevenue + dashboardData.serviceRevenue + dashboardData.astrologerRevenue).toLocaleString()}</div>

                <div className="mt-4 space-y-2">
                  {revenueBreakdown.map((r) => (
                    <div key={r.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: r.color }}></div>
                        <div className="text-sm text-gray-900 dark:text-white">{r.name}</div>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">₹{r.value.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom half: small KPIs + Top Contributors */}
            <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500">Top Segment</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{topSegment.name}</div>
                  <div className="text-xs text-gray-400">₹{topSegment.value.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500">Avg. Order Value</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">₹{avgOrderValue.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">Across {dashboardData.totalOrders} orders</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-xs text-gray-500">Breakdown Share</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{Math.round((topSegment.value / (totalBreakdown || 1)) * 100)}%</div>
                  <div className="text-xs text-gray-400">of total revenue</div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Top Contributors</div>
                  <div className="text-xs text-gray-500">Showing top 5</div>
                </div>
                <div className="space-y-2">
                  {contributors.map((c, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700">
                      <div className="flex items-center">
                        <Image src={c.image} alt={c.name} width={32} height={32} className="w-8 h-8 rounded mr-3 object-cover bg-gray-200 dark:bg-gray-600" onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }} />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{c.name}</div>
                          <div className="text-xs text-gray-500">{c.type}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">₹{c.revenue.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Astrologers */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Astrologers</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">See All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">No</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Astrologer Name</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Review</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Consultations</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Revenue</th>
                  </tr>
                </thead>
                <tbody className="space-y-3">
                  {dashboardData.topAstrologers.map((astrologer, index) => (
                    <tr key={astrologer.id} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{index + 1}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image 
                            src={astrologer.image} 
                            alt={astrologer.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full mr-3 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.jpg';
                            }}
                          />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{astrologer.name}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-900 dark:text-white">{astrologer.review}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{astrologer.consultations}</td>
                      <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">${astrologer.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Distribution Maps */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Geographic Distribution</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {selectedRegion ? `Selected: ${selectedRegion}` : 'Click regions for details'}
                </span>
              </div>
            </div>
            
            {/* Interactive Geographic Distribution */}
            <div className="space-y-4">
              {dashboardData.geographicData.map((region, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedRegion === region.region 
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedRegion(
                    selectedRegion === region.region ? null : region.region
                  )}
                >
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3 transition-transform duration-200" 
                      style={{ backgroundColor: region.color }}
                    ></div>
                    <div>
                      <span className={`text-sm font-medium transition-colors duration-200 ${
                        selectedRegion === region.region 
                          ? 'text-blue-700 dark:text-blue-300' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {region.region}
                      </span>
                      {selectedRegion === region.region && (
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {region.users} users • {region.percentage}% of total traffic
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-full rounded-full transition-all duration-500" 
                        style={{ 
                          width: `${region.percentage}%`, 
                          backgroundColor: region.color 
                        }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium min-w-[40px] transition-colors duration-200 ${
                      selectedRegion === region.region 
                        ? 'text-blue-700 dark:text-blue-300' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {region.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Services & Astrologers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Services */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Services</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">See All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">No</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Service Name</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Review</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Bookings</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Revenue</th>
                  </tr>
                </thead>
                <tbody className="space-y-3">
                  {dashboardData.topServices.map((service, index) => (
                    <tr key={service.id} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{index + 1}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image 
                            src={service.image} 
                            alt={service.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded mr-3 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.jpg';
                            }}
                          />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-900 dark:text-white">{service.review}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{service.bookings}</td>
                      <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">${service.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">See All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">No</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Product Name</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Review</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Sold</th>
                    <th className="text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">Profit</th>
                  </tr>
                </thead>
                <tbody className="space-y-3">
                  {dashboardData.topProducts.map((product, index) => (
                    <tr key={product.id} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{index + 1}</td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Image 
                            src={product.image} 
                            alt={product.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded mr-3 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder.jpg';
                            }}
                          />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-900 dark:text-white">{product.review}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-900 dark:text-white">{product.sold}</td>
                      <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">${product.profit.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
