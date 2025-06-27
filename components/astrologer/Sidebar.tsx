"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserCircle2,
  Calendar,
  BookOpen,
  MessageCircle,
  Star,
  Wallet,
  Menu,
  X
} from "lucide-react";

const AstrologerSidebar: FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: UserCircle2, label: "Manage Profile", href: "/astrologer/profile" },
    { icon: Calendar, label: "Availability Schedule", href: "/astrologer/availability" },
    { icon: BookOpen, label: "View Bookings", href: "/astrologer/bookings" },
    { icon: MessageCircle, label: "Start Consultations", href: "/astrologer/consultations" },
    { icon: Star, label: "View Ratings/Reviews", href: "/astrologer/reviews" },
    { icon: Wallet, label: "Withdraw Earnings", href: "/astrologer/withdraw" },
  ];

  // Sidebar content for reuse
  const sidebarContent = (
    <div className="h-full w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col border-r border-gray-200 dark:border-gray-700">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Nakshatra Gyaan</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Astrologer Panel</p>
        </div>
        {/* Close button for mobile */}
        <button className="md:hidden p-2 ml-2" onClick={() => setOpen(false)} aria-label="Close sidebar">
          <X className="w-6 h-6" />
        </button>
      </div>
      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="fixed top-3 left-4 z-40 md:hidden p-2 bg-white dark:bg-gray-800 rounded shadow"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar for desktop */}
      <div className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:block z-30">
        {sidebarContent}
      </div>

      {/* Overlay sidebar for mobile with smooth transition */}
      <div className={`fixed inset-0 z-50 flex md:hidden pointer-events-none`} style={{ transition: 'background 0.3s' }}>
        {/* Overlay background */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpen(false)}
        />
        {/* Sidebar drawer */}
        <div
          className={`relative z-50 h-full w-64 transition-all duration-300 transform bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700
            ${open ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{ willChange: 'transform' }}
        >
          {sidebarContent}
        </div>
      </div>
    </>
  );
};

export default AstrologerSidebar; 