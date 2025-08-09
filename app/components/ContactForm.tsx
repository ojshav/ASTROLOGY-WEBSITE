"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState, useRef } from 'react'
import { Phone, Mail, MapPin, Star, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/useLanguage';

const FloatingCard = ({ 
  className, 
  children, 
  gradient,
  href,
}: { 
  className?: string; 
  children?: React.ReactNode;
  gradient?: string;
  href: string;
}) => (
  <Link
    href={href}
    className={`absolute ${gradient || 'bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400'} rounded-2xl shadow-2xl hidden lg:block cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}
  >
    <div className="p-6">
      {children}
    </div>
  </Link>
);

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit')
      }
      
      setSubmitStatus('success')
      formRef.current?.reset()
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-us" className="relative bg-black text-white overflow-hidden min-h-screen py-20">
      {/* Floating decorative cards matching footer style */}
      <FloatingCard 
        href="/shop"
        className="top-[10%] left-4 w-72 rotate-[-12deg] opacity-90 z-10"
        gradient="bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400"
      >
        <div className="bg-black/20 rounded-md px-3 py-1 text-xs text-white mb-4 inline-block">{t('contact.floatingCard1.label')}</div>
        <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t('contact.floatingCard1.title')}</h3>
        <div className="flex items-center text-white/80 text-sm mb-4">
          <Star className="w-4 h-4 mr-2" />
          <span>{t('contact.floatingCard1.subtitle')}</span>
        </div>
        <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">{t('contact.floatingCard1.button')}</div>
      </FloatingCard>

      <FloatingCard 
        href="/services"
        className="top-[70%] right-4 w-72 rotate-[12deg] opacity-90 z-10"
        gradient="bg-gradient-to-br from-blue-500 via-teal-400 to-green-400"
      >
        <div className="bg-black/20 rounded-md px-3 py-1 text-xs text-white mb-4 inline-block">{t('contact.floatingCard2.label')}</div>
        <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t('contact.floatingCard2.title')}</h3>
        <div className="flex items-center text-white/80 text-sm mb-4">
          <Sparkles className="w-4 h-4 mr-2" />
          <span>{t('contact.floatingCard2.subtitle')}</span>
        </div>
        <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">{t('contact.floatingCard2.button')}</div>
      </FloatingCard>

      <FloatingCard 
        href="/chat-with-astrologer"
        className="bottom-[5%] left-4 w-80 rotate-[-8deg] opacity-90 z-10"
        gradient="bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500"
      >
        <div className="bg-black/20 rounded-md px-3 py-1 text-xs text-white mb-4 inline-block">{t('contact.floatingCard3.label')}</div>
        <h3 className="text-white font-bold text-lg mb-2 leading-snug">{t('contact.floatingCard3.title')}</h3>
        <div className="flex items-center text-white/80 text-sm mb-4">
          <span className="mr-2">🌟</span>
          <span>{t('contact.floatingCard3.subtitle')}</span>
        </div>
        <div className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">{t('contact.floatingCard3.button')}</div>
      </FloatingCard>

      <div className="max-w-6xl mx-auto px-5 relative z-20">
        {/* Header section matching footer style */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('contact.header.title1')}<br />
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">{t('contact.header.title2')}</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('contact.header.description')}
          </p>
        </div>

        {/* Main content container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('contact.info.title')}</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mt-1 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{t('contact.info.phoneTitle')}</h3>
                  <p className="text-gray-300 text-lg">{t('contact.info.phoneNumber')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.phoneHours')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full mt-1 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{t('contact.info.emailTitle')}</h3>
                  <p className="text-gray-300 text-lg">support@anytimenakshatra.com</p>
                  <p className="text-sm text-gray-400">{t('contact.info.emailNote')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-full mt-1 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{t('contact.info.locationTitle')}</h3>
                  <p className="text-gray-300 text-lg">{t('contact.info.addressLine1')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.addressLine2')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.addressCity')}, {t('contact.info.addressState')} {t('contact.info.addressZip')}</p>
                  <p className="text-sm text-gray-400">{t('contact.info.addressCountry')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold mb-6 text-white">{t('contact.form.title')}</h2>
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="space-y-4">
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder={t('contact.form.namePlaceholder')} 
                  required 
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-base"
                />
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  required 
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-base"
                />
              </div>
              
              <Textarea 
                id="message" 
                name="message" 
                placeholder={t('contact.form.messagePlaceholder')} 
                className="w-full p-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none transition-all text-base"
                rows={6}
                required
              />

              <Button 
                type="submit" 
                className="w-full font-semibold text-lg py-4 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:scale-105 transition-transform flex items-center justify-center gap-2 border-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t('contact.form.sending')
                ) : (
                  <>
                    {t('contact.form.sendButton')} 
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              
              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                  <p className="text-green-300 font-medium">
                    ✨ {t('contact.form.success')}
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-500/20 border border-red-500/30 rounded-2xl">
                  <p className="text-red-300 font-medium">
                    {t('contact.form.error')}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Large brand name matching footer */}
        <div className="text-center mt-20 mb-12">
          <h1 className="text-[48px] md:text-[64px] font-bold text-white/10 tracking-wider m-0 select-none">{t('contact.brand')}</h1>
        </div>
      </div>
    </section>
  )
}