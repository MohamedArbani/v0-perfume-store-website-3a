'use client'

import React from "react"

import Link from 'next/link'
import { MessageCircle, Mail, Clock } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP_NUMBER = '23419038349100'
const CONTACT_EMAIL = 'davinadavid@gmail.com'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            Dee's Scents
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground transition">
              Collections
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground">
              Contact
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition">
              FAQ
            </Link>
          </div>
          <a
            href={whatsappLink('Hello, I\'d like to know more about Dee\'s Scents!')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-secondary border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our fragrances? Need personalized recommendations? We're here to help! Reach out through any of our contact channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Ways to Reach Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground">
                Chat with us directly for quick responses and personalized help with orders and recommendations.
              </p>
              <a
                href={whatsappLink('Hello! I have a question.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
              >
                Start Chat
              </a>
              <p className="text-sm text-muted-foreground pt-2">+234 701 226 8966</p>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Email</h3>
              <p className="text-muted-foreground">
                Send us an email for detailed inquiries or business proposals. We respond within 24 hours.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
              >
                Send Email
              </a>
              <p className="text-sm text-muted-foreground pt-2">{CONTACT_EMAIL}</p>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Business Hours</h3>
              <div className="text-muted-foreground space-y-1">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: Closed</p>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                WhatsApp available 24/7 for urgent matters
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-card">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-background border border-border rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="What is your message about?"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={6}
                placeholder="Your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">Have Quick Questions?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our FAQ page for answers to common questions about ordering, delivery, and our products.
          </p>
          <Link
            href="/faq"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Visit FAQ
          </Link>
        </div>
      </section>
    </div>
  )
}
