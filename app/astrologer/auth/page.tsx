
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import { Mail, Lock, User, Star, Eye, EyeOff } from 'lucide-react';
import { AnimatedStars } from '../../components/AnimatedStars';
import { MysticBackground } from '../../components/MysticBackground';

function ZodiacBackground() {
  // Minimalist SVGs for Aries, Taurus, Gemini, and two constellations
  // All use #e2dac2, opacity 5-15%, slow float/fade animation, absolute, z-0
  return (
    <div className="pointer-events-none fixed inset-0 z-0 select-none">
      {/* Aries */}
      <svg className="absolute top-10 left-10 w-24 h-24 opacity-30 animate-zodiac-float-y" viewBox="0 0 64 64" fill="none">
        <path d="M16 48C8 32 16 8 32 8C48 8 56 32 48 48" stroke="#d6c48a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {/* Taurus */}
      <svg className="absolute bottom-16 left-20 w-20 h-20 opacity-25 animate-zodiac-float-x" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="40" r="12" stroke="#d6c48a" strokeWidth="3"/>
        <path d="M20 20C20 12 44 12 44 20" stroke="#d6c48a" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      {/* Gemini */}
      <svg className="absolute top-24 right-16 w-20 h-20 opacity-25 animate-zodiac-float-y" viewBox="0 0 64 64" fill="none">
        <path d="M20 16C24 32 40 32 44 16" stroke="#d6c48a" strokeWidth="3"/>
        <path d="M24 48V16M40 48V16" stroke="#d6c48a" strokeWidth="3"/>
      </svg>
      {/* Constellation 1 */}
      <svg className="absolute bottom-10 right-10 w-28 h-12 opacity-20 animate-zodiac-float-y" viewBox="0 0 120 40" fill="none">
        <circle cx="10" cy="30" r="2" fill="#d6c48a"/>
        <circle cx="40" cy="10" r="2" fill="#d6c48a"/>
        <circle cx="80" cy="20" r="2" fill="#d6c48a"/>
        <circle cx="110" cy="35" r="2" fill="#d6c48a"/>
        <path d="M10 30L40 10L80 20L110 35" stroke="#d6c48a" strokeWidth="1.5"/>
      </svg>
      {/* Constellation 2 */}
      <svg className="absolute top-1/2 left-1/4 w-24 h-10 opacity-20 animate-zodiac-float-x" viewBox="0 0 96 32" fill="none">
        <circle cx="8" cy="24" r="2" fill="#d6c48a"/>
        <circle cx="32" cy="8" r="2" fill="#d6c48a"/>
        <circle cx="64" cy="16" r="2" fill="#d6c48a"/>
        <circle cx="88" cy="28" r="2" fill="#d6c48a"/>
        <path d="M8 24L32 8L64 16L88 28" stroke="#d6c48a" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

const AstrologerAuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/astrologer/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('astrologerToken', res.data.token);
        toast({ title: 'Login successful', description: 'Welcome!' });
        router.push('/astrologer/profile/');
      } else {
        setError('No token received');
        toast({ title: 'Login failed', description: 'No token received', variant: 'destructive' });
      }
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error?.response?.data?.message || 'Invalid credentials');
      toast({
        title: 'Login failed',
        description: error?.response?.data?.message || 'Invalid credentials',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Placeholder for Google sign-in (not implemented for astrologer)
  const handleGoogleSignIn = async () => {
    toast({ title: 'Not available', description: 'Google sign-in is not available for astrologer accounts.', variant: 'destructive' });
  };

  return (
    <div className="relative min-h-screen bg-[#FEFBF2]">
      <ZodiacBackground />
      <main className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col">
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 py-20">
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Astrologer Login
              </h2>
              <p className="text-gray-500">Access your astrologer dashboard</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl border border-red-300 text-center text-sm">
                {error}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <input
                  name="email"
                  type="email"
                  placeholder="Astrologer Email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="button"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full font-semibold text-lg py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-all"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Sign in to Astrologer Account'}
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <Link href="/astrologer/forgot-password" className="text-sm text-amber-600 hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>
            
            {/* Google sign-in removed for astrologer login */}
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                Don&apos;t have an astrologer account?{' '}
                <Link href="/astrologer/register" className="text-amber-600 hover:underline font-medium">
                  Register
                </Link>
              </p>
              <p className="mt-2">
                Need a user account?{' '}
                <Link href="/signin" className="text-amber-600 hover:underline font-medium">
                  Sign in as user
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AstrologerAuthPage;
