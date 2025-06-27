'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { MysticBackground } from './components/MysticBackground';
import Chatbot from './components/Chatbot';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { v4 as uuidv4 } from 'uuid';
import { Toaster } from '@/components/ui/sonner';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  const isSignInRoute = pathname === '/signin';

  const shouldHideLayout = [
    "/admin/dashboard",
    "/admin/clients",
    "/admin/courses",
    "/admin/products",
    "/admin/services",
    "/admin/reviews",
    "/admin/settings",
    "/admin/login",
    "/signin",
    "/admin/stone",
    "/astrologer/profile",
    "/astrologer/availability",
    "/astrologer/bookings",
    "/astrologer/consultations",
    "/astrologer/reviews",
    "/astrologer/withdraw",
    "/astrologer/register",
    "/astrologer/auth",
    "/astrologer/forgot-password"
  ].includes(pathname ?? '');

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (shouldHideLayout) return;

    let visitorId = localStorage.getItem('visitor_id');

    if (!visitorId) {
      visitorId = uuidv4();
      localStorage.setItem('visitor_id', visitorId);
    }

    const trackPageVisit = async () => {
      try {
        const response = await fetch('/api/track-visitor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            visitorId,
            path: pathname,
            timestamp: new Date().toISOString(),
            referrer: document.referrer || null,
          }),
        });

        if (!response.ok) {
          console.error('Failed to track visitor');
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackPageVisit();
  }, [pathname, shouldHideLayout]);

  useEffect(() => {
    // Store original body background
    const originalBodyBg = document.body.style.backgroundColor;

    if (isSignInRoute) {
      // Force background to black for sign-in route
      document.body.style.backgroundColor = 'black';
    } else {
      // Revert to original for other routes
      document.body.style.backgroundColor = originalBodyBg;
    }
    
    // Cleanup on component unmount to restore original style
    return () => {
      document.body.style.backgroundColor = originalBodyBg;
    };
  }, [isSignInRoute]);

  if (!isClient) {
    return null;
  }

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  if (isSignInRoute) {
    return <>{children}</>;
  }

  return (
    <AuthProvider>
      <LanguageProvider>
        <MysticBackground>
          <div className="min-h-screen bg-white">
            <Header />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
            <Chatbot />
            <Toaster />
          </div>
        </MysticBackground>
      </LanguageProvider>
    </AuthProvider>
  );
}
