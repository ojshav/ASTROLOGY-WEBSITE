"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Head from 'next/head';
import { Eye, EyeOff } from 'lucide-react';

// Create a separate component for the part that uses useSearchParams
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  
  // Use useSearchParams directly
  const searchParams = useSearchParams();
  // Get callback URL if available
  const callbackUrl = searchParams?.get('callbackUrl') || '/admin/dashboard';

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check', {
          method: 'GET',
          credentials: 'include' // Important for sending cookies
        });
        
        if (response.ok) {
          // User is already authenticated, redirect to callback URL or dashboard
          router.push(callbackUrl);
        }
      } catch (error) {
        console.error('Auth check error:', error);
      }
    };
    
    checkAuth();
  }, [router, callbackUrl]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for storing cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Redirect to the callback URL or dashboard
      router.push(callbackUrl);
    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : 'An error occurred. Please try again.'
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 border border-red-200 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="admin@yoursite.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="••••••••"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        
        <div className="text-sm">
          <a href="#" className="text-black hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}

// Loading fallback component
function LoginFormLoading() {
  return <div className="text-center p-4">Loading login form...</div>;
}

export const dynamic = 'force-dynamic';

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Admin Login | Astrology Dashboard</title>
        <meta name="description" content="Admin login for astrology website" />
      </Head>
      
      <div className="flex min-h-screen bg-white">
        <div className="w-full max-w-md m-auto">
          <div className="p-8 border border-gray-200 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              {/* Replace with your logo */}
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-black">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
                    <path d="M12 2 L12 4 M12 20 L12 22 M2 12 L4 12 M20 12 L22 12 
                      M4.93 4.93 L6.34 6.34 M17.66 17.66 L19.07 19.07 M4.93 19.07 L6.34 17.66 
                      M17.66 6.34 L19.07 4.93" stroke="currentColor" strokeWidth="1" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-black">Admin Login</h2>
              <p className="text-gray-600 mt-1">Enter your credentials to access the dashboard</p>
            </div>
            
            {/* Wrap the component using useSearchParams in Suspense */}
            <Suspense fallback={<LoginFormLoading />}>
              <LoginForm />
            </Suspense>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Need help? Contact <a href="mailto:support@yourastrologysite.com" className="text-black hover:underline">support</a></p>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Your Astrology Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}