'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatedStars } from '../../components/AnimatedStars';
import { MysticBackground } from '../../components/MysticBackground';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';

const areas = ['Vedic', 'Tarot', 'Numerology', 'Palmistry', 'Western'];

const FloatingCard = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={`absolute bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl pointer-events-none hidden lg:block ${className}`}>
    {children}
  </div>
);

const AstrologerRegisterPage = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    yearsOfExperience: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    terms: false,
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleArea = (area: string) => {
    setSelectedAreas(prev =>
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setProfileImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
      setProfileImagePreview(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
      return;
    }
    if (!form.terms) {
      setError('You must agree to the terms and conditions');
      toast({ title: 'Error', description: 'You must agree to the terms', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('password', form.password);
      formData.append('areasOfExpertise', selectedAreas.join(','));
      formData.append('yearsOfExperience', form.yearsOfExperience);
      formData.append('bankName', form.bankName);
      formData.append('accountNumber', form.accountNumber);
      formData.append('ifscCode', form.ifscCode);
      if (profileImage) formData.append('profileImage', profileImage);
      await axios.post('/api/astrologer/register', formData);
      toast({ title: 'Success', description: 'Registration successful!', variant: 'default' });
      // Reset form and image preview
      setForm({
        firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '', yearsOfExperience: '', bankName: '', accountNumber: '', ifscCode: '', terms: false
      });
      setSelectedAreas([]);
      setProfileImage(null);
      setProfileImagePreview(null);
    } catch (err: unknown) {
      toast({ title: 'Error', description: (err && typeof err === 'object' && 'response' in err && (err as { response?: { data?: { message?: string } } })?.response?.data?.message) ? (err as { response?: { data?: { message?: string } } }).response!.data!.message : 'Registration failed', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FEFBF2]">
      <main className="relative w-full min-h-screen overflow-hidden flex flex-col">
        {/* Registration Form - background effect removed, card moved up */}
        <div className="relative z-10 flex-grow flex flex-col justify-start items-center px-4 pt-10 pb-8">
          <div className="relative bg-white border border-gray-200 shadow-2xl rounded-3xl px-6 pt-8 pb-8 w-full max-w-3xl">
            {/* Card Header: Centered Title and Profile Upload */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-3xl font-bold mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Astrologer Registration
              </h2>
              <p className="text-gray-500 mb-4 text-center">Become a part of Nakshatra Gyaan</p>
              {/* Profile Upload Circle */}
              <label htmlFor="profilePic" className="cursor-pointer relative inline-block">
                <div className="w-20 h-20 rounded-full border-4 border-amber-400 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {profileImagePreview ? (
                    <Image src={profileImagePreview} alt="Profile" width={80} height={80} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-sm text-gray-400">Upload</span>
                  )}
                </div>
                <input id="profilePic" type="file" accept="image/*" className="hidden" onChange={handleProfileImageChange} />
              </label>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Personal Details */}
              <h3 className="text-lg font-semibold mb-1 text-black">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" type="tel" pattern="[0-9]{10}" required className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <div className="relative">
                  <input 
                    name="password" 
                    value={form.password} 
                    onChange={handleChange} 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    required 
                    className="w-full px-4 pr-12 py-2 bg-white text-black border border-gray-200 rounded-xl" 
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="relative">
                  <input 
                    name="confirmPassword" 
                    value={form.confirmPassword} 
                    onChange={handleChange} 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm Password" 
                    required 
                    className="w-full px-4 pr-12 py-2 bg-white text-black border border-gray-200 rounded-xl" 
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

              {/* Areas of Expertise (2 columns) */}
              <div>
                <label className="block mb-2 text-sm text-gray-700">Areas of Expertise</label>
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {areas.map(area => (
                    <label key={area} className="flex items-center text-sm text-black">
                      <input
                        type="checkbox"
                        className="mr-2 accent-amber-500"
                        checked={selectedAreas.includes(area)}
                        onChange={() => toggleArea(area)}
                      />
                      {area}
                    </label>
                  ))}
                </div>
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block mb-2 text-sm text-gray-700">Years of Experience</label>
                <input name="yearsOfExperience" value={form.yearsOfExperience} onChange={handleChange} placeholder="e.g. 5" type="number" className="w-full px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
              </div>

              {/* Bank Details */}
              <h3 className="text-lg font-semibold mb-1 text-black">Bank Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input name="bankName" value={form.bankName} onChange={handleChange} placeholder="Bank Name" className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <input name="accountNumber" value={form.accountNumber} onChange={handleChange} placeholder="Account Number" className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
                <input name="ifscCode" value={form.ifscCode} onChange={handleChange} placeholder="IFSC Code" className="px-4 py-2 bg-white text-black border border-gray-200 rounded-xl" />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input name="terms" type="checkbox" checked={form.terms} onChange={handleChange} className="mt-1 accent-amber-500" required />
                <p className="text-sm text-gray-700">
                  I agree to the <span className="text-amber-600 underline">Terms</span> and <span className="text-amber-600 underline">Privacy Policy</span>
                </p>
              </div>

              <button type="submit" disabled={loading || !form.terms} className="w-full py-3 text-white bg-black rounded-xl font-semibold hover:brightness-110 transition">
                {loading ? 'Registering...' : 'Register'}
              </button>
              {error && (
                <div className="mt-2 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md p-2 text-center">
                  {error}
                </div>
              )}
            </form>

            <p className="mt-6 text-sm text-center text-gray-500">
              Already have an account?{' '}
              <Link href="/astrologer/auth" className="text-amber-600 hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AstrologerRegisterPage;
