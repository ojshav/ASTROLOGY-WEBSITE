"use client";

import { useEffect, useState, useMemo, useCallback, lazy, Suspense } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./components/Header";
import { PageTransition } from "./components/PageTransition";
import { AuthProvider } from "./contexts/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { Toaster } from "@/components/ui/sonner";

// Lazy load components that aren't always needed
const Chatbot = lazy(() => import("./components/Chatbot"));
const Footer = lazy(() => import("./components/Footer"));

// Constants moved outside component to prevent recreation
const EXACT_PATHS = [
  "/admin/dashboard",
  "/admin/clients",
  "/admin/astrologers",
  "/admin/courses",
  "/admin/products",
  "/admin/products/zodiac-sign",
  "/admin/products/categories",
  "/admin/products/attributes",
  "/admin/products/create",
  "/admin/products/add",
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
  "/astrologer/forgot-password",
  "/astrologer/reset-password",
  "/forgot-password",
  "/reset-password",
];

const DYNAMIC_PATTERNS: RegExp[] = [
  /^\/admin\/astrologers\/[^/]+$/, // matches /admin/astrologers/anything
];

const TOASTER_OPTIONS = {
  unstyled: true,
  style: {
    backgroundColor: "#1C1C1C",
    color: "white",
    border: "1px solid #333",
    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.6)",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "14px",
  },
  className: "",
};

// Debounce function to limit API calls
let trackingTimeout: NodeJS.Timeout | null = null;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // Memoize route checks
  const isAdminRoute = useMemo(() => pathname?.startsWith("/admin"), [pathname]);
  const isSignInRoute = useMemo(() => pathname === "/signin", [pathname]);

  // Memoize shouldHideLayout calculation
  const shouldHideLayout = useMemo(() => {
    const path = pathname ?? "";
    return (
      EXACT_PATHS.includes(path) ||
      DYNAMIC_PATTERNS.some((regex) => regex.test(path))
    );
  }, [pathname]);

  // Memoized tracking function with debouncing
  const trackPageVisit = useCallback(async (visitorId: string, path: string) => {
    // Clear existing timeout
    if (trackingTimeout) {
      clearTimeout(trackingTimeout);
    }

    // Debounce API call to prevent excessive requests
    trackingTimeout = setTimeout(async () => {
      try {
        const response = await fetch("/api/track-visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            visitorId,
            path,
            timestamp: new Date().toISOString(),
            referrer: document.referrer || null,
          }),
        });

        if (!response.ok) {
          console.error("Failed to track visitor");
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
      }
    }, 300); // 300ms debounce
  }, []);

  useEffect(() => {
    setIsClient(true);
    if (shouldHideLayout) return;

    let visitorId = localStorage.getItem("visitor_id");

    if (!visitorId) {
      visitorId = uuidv4();
      localStorage.setItem("visitor_id", visitorId);
    }

    trackPageVisit(visitorId, pathname ?? "");
  }, [pathname, shouldHideLayout, trackPageVisit]);

  useEffect(() => {
    // Store original body background
    const originalBodyBg = document.body.style.backgroundColor;

    if (isSignInRoute) {
      // Force background to black for sign-in route
      document.body.style.backgroundColor = "black";
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
      {/* <MysticBackground> */}
      <div className="min-h-screen bg-white">
        <Header />
        <PageTransition>{children}</PageTransition>
        <Suspense fallback={<div className="sr-only">Loading footer...</div>}>
          <Footer />
        </Suspense>
        <Suspense fallback={<div className="sr-only">Loading chat...</div>}>
          <Chatbot />
        </Suspense>
        <Toaster
          position="top-center"
          toastOptions={TOASTER_OPTIONS}
        />
      </div>
      {/* </MysticBackground> */}
    </AuthProvider>
  );
}
