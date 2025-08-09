'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn, getSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedStars } from '../components/AnimatedStars'
import { MysticBackground } from '../components/MysticBackground'
import Footer from '../components/Footer'
import { User, Lock, Mail, Star, Eye, EyeOff } from 'lucide-react'

const FloatingCard = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div
    className={`absolute bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl pointer-events-none hidden lg:block ${className}`}
  >
    {children}
  </div>
);

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


// Zodiac SVG float/fade animation styles
// Add this block to your styles/globals.css:
/*
@keyframes zodiac-float-y {
  0% { transform: translateY(0px); opacity: 0.2; }
  50% { transform: translateY(-24px); opacity: 0.4; }
  100% { transform: translateY(0px); opacity: 0.3; }
}
@keyframes zodiac-float-x {
  0% { transform: translateX(0px); opacity: 0.2; }
  50% { transform: translateX(20px); opacity: 0.4; }
  100% { transform: translateX(0px); opacity: 0.3; }
}
.animate-zodiac-float-slow { animation: zodiac-float-y 14s ease-in-out infinite alternate; }
.animate-zodiac-float-medium { animation: zodiac-float-x 10s ease-in-out infinite alternate; }
.animate-zodiac-float-fast { animation: zodiac-float-y 7s ease-in-out infinite alternate; }
*/

export default function SignInPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleCredentialSubmit = async (event: React.FormEvent<HTMLFormElement>, action: 'login' | 'signup') => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const formData = new FormData(event.currentTarget)
      const email = formData.get('email') as string
      const password = formData.get('password') as string

      if (action === 'signup') {
        const name = formData.get('name') as string
        const confirmPassword = formData.get('confirmPassword') as string

        if (password !== confirmPassword) {
          throw new Error('Passwords do not match')
        }

        // Create user account
        const signupResponse = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password,
            name
          })
        })

        if (!signupResponse.ok) {
          const errorData = await signupResponse.json();
          throw new Error(errorData.error || 'Signup failed');
        }

        // After successful signup, sign in the user
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })

        if (result?.error) {
          throw new Error(result.error)
        }

        if (result?.ok) {
          router.push('/')
        }
      } else {
        // Login
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        })

        if (result?.error) {
          throw new Error(result.error)
        }

        if (result?.ok) {
          router.push('/')
        }
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Authentication failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      setError('Google authentication failed')
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-[#FEFBF2]">
      <ZodiacBackground />
      <main className="relative w-full min-h-screen overflow-hidden bg-transparent flex flex-col">
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 py-20">
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 w-full max-w-md">
            <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
             Welcome to <span className="text-amber-600">Nakshatra Gyaan</span>
            </h2>
            <p className="text-gray-500">Unlock the secrets of the cosmos. Your journey begins here.</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl border border-red-300 text-center text-sm">
                {error}
              </div>
            )}

            <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 border border-gray-200 rounded-xl p-1">
              <TabsTrigger value="login" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg text-gray-500 transition-all">Login</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-black data-[state=active]:text-white rounded-lg text-gray-500 transition-all">Sign Up</TabsTrigger>
            </TabsList>

              <TabsContent value="login" className="mt-6">
                <form className="space-y-4" onSubmit={(e) => handleCredentialSubmit(e, 'login')}>
                  <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                  </div>
                  <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="password"
                        type={showLoginPassword ? "text" : "password"}
                        placeholder="Password"
                        required
                        className="w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        type="button"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black hover:text-gray-600 transition-colors"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                      >
                        {showLoginPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                  </div>
                  <Button type="submit" className="w-full font-semibold text-lg py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-all" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Login'}
                  </Button>
                </form>
                
                <div className="mt-4 text-center">
                  <Link href="/forgot-password" className="text-sm text-amber-600 hover:underline font-medium">
                    Forgot Password?
                  </Link>
                </div>
                
                <div className="mt-6 text-center text-black text-sm">Or continue with</div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="w-full font-semibold py-3 rounded-lg border border-gray-200 bg-white text-black hover:bg-gray-100 transition-all flex items-center justify-center"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <Star className="w-5 h-5 mr-3 text-black" />
                    Sign in with Google
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <div className="text-center mb-6">
                  <p className="text-gray-400 mb-4">Create your account to unlock the secrets of the cosmos.</p>
                  <Button
                    variant="outline"
                    className="w-full font-semibold py-3 rounded-lg border border-gray-700 bg-[#1C1C1C] text-gray-400 hover:bg-[#222] transition-all flex items-center justify-center mb-4"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    <Star className="w-5 h-5 mr-3 text-yellow-500" />
                    Sign up with Google
                  </Button>
                  <p className="text-gray-500 text-sm">Or create an account with email</p>
                </div>
                
                <form className="space-y-4" onSubmit={(e) => handleCredentialSubmit(e, 'signup')}>
                  <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                  </div>
                  <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                  </div>
                  <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="password"
                        type={showSignupPassword ? "text" : "password"}
                        placeholder="Create Password"
                        required
                        className="w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        type="button"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black hover:text-gray-600 transition-colors"
                        onClick={() => setShowSignupPassword(!showSignupPassword)}
                      >
                        {showSignupPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                  </div>
                  <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black" />
                      <Input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        required
                        className="w-full pl-11 pr-12 py-3 bg-white border border-gray-200 rounded-lg text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <button
                        type="button"
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-black hover:text-gray-600 transition-colors"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                  </div>
                  <Button type="submit" className="w-full font-semibold text-lg py-3 rounded-lg bg-black text-white hover:bg-gray-900 transition-all" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Footer /> 
      </main>
    </div>
  )
}

// Exact cosmic background component
function ExactCosmicBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Main solid black background only, no blur, orbs, or planets */}
      <div className="absolute inset-0 bg-[#111]" />
    </div>
  );
}
