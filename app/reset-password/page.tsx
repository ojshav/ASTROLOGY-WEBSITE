"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { AnimatedStars } from '../components/AnimatedStars';
import { MysticBackground } from '../components/MysticBackground';
import { Eye, EyeOff } from 'lucide-react';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams?.get("token"); // token from query string

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      toast({ title: "Error", description: "Invalid or missing token.", variant: "destructive" });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "Passwords do not match.", variant: "destructive" });
      return;
    }

    if (newPassword.length < 6) {
      toast({ title: "Error", description: "Password must be at least 6 characters long.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/auth/reset-password", { token, newPassword });
      toast({ title: "Success", description: "Password has been reset successfully!", variant: "default" });
      router.push("/signin");
    } catch (err: unknown) {
      toast({
        title: "Error",
        description: (err && typeof err === 'object' && 'response' in err && (err as { response?: { data?: { message?: string } } })?.response?.data?.message)
          ? (err as { response?: { data?: { message?: string } } }).response!.data!.message
          : "Failed to reset password.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FEFBF2] flex items-center justify-center px-4">
      <div className="relative z-10 max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl border border-gray-200">
        <h2 className="text-black text-2xl font-bold text-center mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          Reset Your Password
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter a new password for your account
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 pr-12 py-2 border border-gray-200 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full px-4 pr-12 py-2 border border-gray-200 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold hover:brightness-110 transition"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Back to{' '}
            <Link href="/signin" className="text-amber-600 hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
