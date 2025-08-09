'use client';

import Link from 'next/link';
import { AnimatedStars } from '../components/AnimatedStars';
import { MysticBackground } from '../components/MysticBackground';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = React.useState('');
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot-password', { email });
      toast({ 
        title: 'Success', 
        description: res.data.message, 
        variant: 'default' 
      });
      setEmail(''); // Clear the form
    } catch (err: unknown) {
      const errorMessage = (err && typeof err === 'object' && 'response' in err && (err as { response?: { data?: { message?: string } } })?.response?.data?.message)
        ? (err as { response?: { data?: { message?: string } } }).response!.data!.message
        : 'Failed to send reset link';
      toast({ title: 'Error', description: errorMessage, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FEFBF2] flex items-center justify-center px-4">
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
        <h2 className="text-black text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your email address and we&apos;ll send you instructions to reset your password.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-200 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:brightness-110 transition"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <Link href="/signin" className="text-sm text-amber-600 hover:underline font-medium block">
            Back to Sign In
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:underline font-medium block">
            Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
