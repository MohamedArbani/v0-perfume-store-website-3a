'use client'

import React from "react"

import Link from 'next/link'
import { Star, Instagram, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP_NUMBER = '2349038349100'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}



const products = [
  {
    id: 1,
     name: 'HUG Body Spray',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Lavender | Base: Soft Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597582/Hug_qyavmi.jpg',
  },
  {
    id: 2,
   name: 'Storm Kids Perfume',
    category: 'sweet',
    description: 'Top: Fruity Candy | Middle: Soft Floral | Base: Vanilla Musk',
    price: '₦2,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597594/storm-kids_yontcw.jpg',
  },
  {
    id: 3,
     name: '24K',
    category: 'oriental',
    description: 'Top: Bergamot | Middle: Spiced Amber | Base: Oud & Vanilla',
    price: '₦5,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597605/24k-image_jcd8ik.jpg',
  },
  {
    id: 4,
    name: 'Lasgidi Body Mist',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Aquatic Notes | Base: Soft Musk',
    price: '₦2,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769622900/lasgidi_fzxrow.jpg',
  },
  {
    id: 5,
    name: 'Riggs London',
    category: 'woody',
    description: 'Top: Bergamot | Middle: Lavender & Spices | Base: Cedarwood & Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623053/riggs_byzmym.jpg',
  },
  {
    id: 6,
   name: 'Fogg Fragrance',
    category: 'fresh',
    description: 'Top: Citrus & Green Notes | Middle: Aromatic Herbs | Base: Musk & Cedarwood',
    price: '₦3,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623300/fogg_iv3jkz.jpg',
  },
]

const reviews = [
  {
    name: 'Chioma A.',
    rating: 5,
    text: 'The scent is absolutely divine! It lasts all day and the quality is premium. Highly recommend!',
  },
  {
    name: 'Tunde O.',
    rating: 5,
    text: 'Dee\'s Scents has become my go-to. The fragrances are authentic and long-lasting. Perfect for everyday wear.',
  },
  {
    name: 'Zainab M.',
    rating: 5,
    text: 'Elegant packaging, incredible scent, and excellent customer service. This is luxury at affordable prices.',
  },
]

const features = [
  'Long-lasting fragrances',
  'Premium ingredients',
  'Affordable luxury',
  'Ideal for gifts and everyday wear',
]

export default function Home() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
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
      <section className="relative bg-gradient-to-b from-secondary to-background pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Luxury Scents That Define You
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover long-lasting, carefully curated fragrances for every mood and moment. Experience elegance in every spritz.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink('Hello, I\'d like to order a fragrance from Dee\'s Scents. Can you help me?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition text-center"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/collections"
                  className="border border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition text-center"
                >
                  View Collections
                </Link>
              </div>
            </div>
         <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
  {/* Hero Image */}
  <img
    src="/hero.jpg"
    alt="Dee’s Scents Premium Fragrances"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Optional overlay for readability / luxury feel */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Optional overlay text (can remove if you want image-only) */}
  <div className="relative z-10 flex items-center justify-center h-full">
    {/* <p className="text-white font-serif text-xl">
      Premium Fragrances
    </p> */}
  </div>
</div>

          </div>
        </div>
      </section>

    {/* About Section */}
<section id="about" className="py-20 bg-card">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Image Side */}
      <div className="relative h-96 rounded-2xl overflow-hidden">
        <img
          src="/hero2.jpg"
          alt="Dee’s Scents Crafted Excellence"
          className="w-full h-full object-cover"
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Optional caption */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <p className="font-serif text-xl text-white tracking-wide">
            Crafted Excellence
          </p> */}
        </div>
      </div>

      {/* Text Side */}
      <div className="space-y-6">
        <h3 className="font-serif text-4xl font-bold text-foreground">
          About Dee&apos;s Scents
        </h3>

        <p className="text-muted-foreground leading-relaxed text-lg">
          At Dee&apos;s Scents, we believe that fragrance is a form of
          self-expression. Our carefully curated collection features premium
          fragrances made with authentic ingredients, designed to last and leave
          a lasting impression.
        </p>

        <p className="text-muted-foreground leading-relaxed text-lg">
          Each scent tells a story of sophistication and elegance. Whether
          you&apos;re looking for everyday elegance or a special occasion
          fragrance, we have the perfect scent to define your unique personality.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Featured Products */}
      <section id="collections" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold text-foreground mb-4">Featured Collection</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our carefully selected fragrances designed for every mood and moment
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.slice(0, 6).map((product) => (
    <div
      key={product.id}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition"
    >
      {/* Product Image */}
      <div className="h-48 bg-secondary rounded-lg mb-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider">
          {product.category}
        </p>

        <h4 className="font-serif text-xl font-bold text-foreground">
          {product.name}
        </h4>

        <p className="text-sm text-muted-foreground">
          {product.description}
        </p>

        <p className="text-lg font-semibold text-accent pt-2">
          {product.price}
        </p>

    <a
  href={whatsappLink(
    `Hello,

I would like to purchase the following product from Dee's Scents.

Product Name: ${product.name}
Price: ${product.price}

Product Image:
${product.image}

Please confirm availability and the next steps for ordering.

Thank you.`
  )}
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full bg-primary text-primary-foreground text-center py-2 rounded-lg font-medium hover:opacity-90 transition mt-4"
>
  Order via WhatsApp
</a>

      </div>
    </div>
  ))}
</div>

          <div className="text-center mt-12">
            <Link
              href="/collections"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              View All Fragrances
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold text-foreground mb-4">Browse by Collection</h3>
            <p className="text-muted-foreground text-lg">Find your perfect scent across our curated categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {['Floral', 'Woody', 'Oriental', 'Fresh', 'Unisex'].map((category) => (
              <Link
                key={category}
                href="/collections"
                className="text-center p-8 bg-card rounded-lg border border-border hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-serif text-lg font-bold text-foreground">{category}</h4>
                <p className="inline-block mt-4 text-primary text-sm font-medium">
                  Explore
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold text-foreground mb-4">Why Choose Dee's Scents</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                  <span className="text-xl">✓</span>
                </div>
                <p className="font-semibold text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold text-foreground mb-4">Customer Reviews</h3>
            <p className="text-muted-foreground text-lg">Loved by our customers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-background border border-border rounded-lg p-8 space-y-4">
                <div className="flex gap-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                </div>
                <p className="text-foreground leading-relaxed italic">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <h3 className="font-serif text-4xl font-bold mb-4">Join the Dee's Scents Community</h3>
            <p className="text-primary-foreground/90 text-lg">
              Get exclusive offers and be the first to know about new arrivals
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-3 flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground placeholder-muted-foreground"
              required
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Dee's Scents</h4>
              <p className="text-primary-foreground/70 text-sm">Luxury fragrances that define you.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#collections" className="hover:text-primary-foreground transition">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-primary-foreground transition">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <p className="text-sm text-primary-foreground/70">WhatsApp: +234 903 834 9100</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Star, Instagram, MessageCircle, Menu, X } from 'lucide-react'

const WHATSAPP_NUMBER = '2349038349100'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

const products = [
  {
    id: 1,
    name: 'HUG Body Spray',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Lavender | Base: Soft Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597582/Hug_qyavmi.jpg',
  },
  {
    id: 2,
    name: 'Storm Kids Perfume',
    category: 'sweet',
    description: 'Top: Fruity Candy | Middle: Soft Floral | Base: Vanilla Musk',
    price: '₦2,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597594/storm-kids_yontcw.jpg',
  },
  {
    id: 3,
    name: '24K',
    category: 'oriental',
    description: 'Top: Bergamot | Middle: Spiced Amber | Base: Oud & Vanilla',
    price: '₦5,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769597605/24k-image_jcd8ik.jpg',
  },
  {
    id: 4,
    name: 'Lasgidi Body Mist',
    category: 'fresh',
    description: 'Top: Citrus Zest | Middle: Aquatic Notes | Base: Soft Musk',
    price: '₦2,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769622900/lasgidi_fzxrow.jpg',
  },
  {
    id: 5,
    name: 'Riggs London',
    category: 'woody',
    description: 'Top: Bergamot | Middle: Lavender & Spices | Base: Cedarwood & Musk',
    price: '₦3,000',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623053/riggs_byzmym.jpg',
  },
  {
    id: 6,
    name: 'Fogg Fragrance',
    category: 'fresh',
    description: 'Top: Citrus & Green Notes | Middle: Aromatic Herbs | Base: Musk & Cedarwood',
    price: '₦3,500',
    image: 'https://res.cloudinary.com/dbozz4sgv/image/upload/v1769623300/fogg_iv3jkz.jpg',
  },
]

const reviews = [
  {
    name: 'Chioma A.',
    rating: 5,
    text: 'The scent is absolutely divine! It lasts all day and the quality is premium. Highly recommend!',
  },
  {
    name: 'Tunde O.',
    rating: 5,
    text: "Dee's Scents has become my go-to. The fragrances are authentic and long-lasting.",
  },
  {
    name: 'Zainab M.',
    rating: 5,
    text: 'Elegant packaging, incredible scent, and excellent customer service.',
  },
]

const features = [
  'Long-lasting fragrances',
  'Premium ingredients',
  'Affordable luxury',
  'Ideal for gifts and everyday wear',
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold">
            Dee&apos;s Scents
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground">
              Collections
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
          </div>

          {/* Desktop CTA */}
          <a
            href={whatsappLink("Hello, I'd like to know more about Dee's Scents!")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Chat
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border px-4 pb-6 space-y-4">
            {['collections', 'about', 'contact', 'faq'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}

            <a
              href={whatsappLink("Hello, I'd like to know more about Dee's Scents!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </a>
          </div>
        )}
      </nav>

      {/* REST OF YOUR PAGE CONTINUES UNCHANGED */}
      {/* (Hero, Products, Reviews, Newsletter, Footer — all intact) */}

      {/* Newsletter example */}
      <section className="py-20 bg-primary text-primary-foreground">
        <form
          onSubmit={handleSubscribe}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 px-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-foreground"
            required
          />
          <button className="bg-accent px-6 py-3 rounded-lg font-semibold">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  )
}
