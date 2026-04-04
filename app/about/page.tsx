'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2347012268966'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export default function AboutPage() {
  const values = [
    {
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from trusted suppliers worldwide to ensure every fragrance meets our high standards.',
    },
    {
      title: 'Authenticity',
      description: 'All our fragrances are genuine and long-lasting, never compromised on quality. What you smell is what you get.',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We offer exceptional customer service and ensure every order is handled with care.',
    },
    {
      title: 'Affordable Luxury',
      description: 'Luxury should be accessible. We offer premium fragrances at prices that make elegance attainable for everyone.',
    },
  ]

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
            <Link href="/about" className="text-sm font-medium text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
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
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">About Dee's Scents</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the story behind luxury fragrances that define you. At Dee's Scents, we believe fragrance is more than just a scent—it's an expression of identity and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-card border border-border rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">💎</div>
                <p className="text-muted-foreground font-serif text-xl">Crafted Excellence</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dee's Scents was born from a passion for luxury fragrances and a vision to make premium scents accessible to everyone. We understand that fragrance is personal—it tells your story and leaves a lasting impression.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every fragrance in our collection is carefully curated and tested to ensure it meets our standards for quality, longevity, and sillage. We work exclusively with authentic, premium ingredients to create fragrances that truly last.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets us apart is our commitment to affordability without compromise. We believe luxury should be accessible, which is why we offer world-class fragrances at prices that make sense for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-8 space-y-4">
                <h3 className="font-serif text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Why Customers Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Authentic Fragrances</h3>
              <p className="text-muted-foreground">
                All our products are genuine and sourced from trusted distributors. No counterfeits, ever.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Long-Lasting Performance</h3>
              <p className="text-muted-foreground">
                Our fragrances are designed to last 8+ hours with excellent sillage and projection.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Expert Curation</h3>
              <p className="text-muted-foreground">
                Each fragrance is personally selected and tested by our team to ensure excellence.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Exceptional Service</h3>
              <p className="text-muted-foreground">
                Our WhatsApp team is always ready to help with orders, recommendations, and questions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Affordable Luxury</h3>
              <p className="text-muted-foreground">
                Premium fragrances that don't break the bank. Quality for everyone.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl">
                ✓
              </div>
              <h3 className="font-semibold text-lg text-foreground">Wide Selection</h3>
              <p className="text-muted-foreground">
                From floral to woody to oriental—we have the perfect scent for every personality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-4">Ready to Find Your Signature Scent?</h2>
            <p className="text-xl text-primary-foreground/90">
              Explore our collections or chat with our team for personalized recommendations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Shop Collections
            </Link>
            <a
              href={whatsappLink('Hi! I\'d like help choosing a fragrance.')}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
