'use client'

import Link from 'next/link'
import { MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const WHATSAPP_NUMBER = '2347012268966'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

const faqs = [
  {
    category: 'Ordering & Payment',
    questions: [
      {
        q: 'How do I place an order?',
        a: 'Ordering is simple! Click "Order via WhatsApp" on any product page or collection, and you\'ll be taken to WhatsApp with a pre-filled message. Just send it, and our team will confirm your order and provide details on pricing and delivery.',
      },
      {
        q: 'Do you accept payments online?',
        a: 'Currently, we use WhatsApp for orders and accept payment through bank transfers, Momo, or cash on delivery (where applicable). Our team will provide payment details once you place your order.',
      },
      {
        q: 'What is your payment method?',
        a: 'We accept bank transfers, mobile money, and cash on delivery depending on your location. Our team will inform you of available options after you place your order.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, we prioritize your security. We recommend using secure payment methods and never share sensitive information via unsecured channels. Our team handles all payment details professionally.',
      },
    ],
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        q: 'Are your fragrances original/authentic?',
        a: 'Absolutely! All Dee\'s Scents fragrances are 100% authentic and sourced from trusted suppliers. We guarantee quality and authenticity on every product. If you ever have concerns, our team is happy to help.',
      },
      {
        q: 'How long do your fragrances last?',
        a: 'Our fragrances are designed for longevity. Most of our scents last 8-12 hours depending on the fragrance, your skin type, and application. Some premium fragrances, like Oud Mystique, can last 12+ hours.',
      },
      {
        q: 'What is the difference between projection and longevity?',
        a: 'Longevity is how long a fragrance stays on your skin. Projection is how far the scent travels (how strongly you notice it). All our products have detailed information on both.',
      },
      {
        q: 'Which fragrance is best for everyday wear?',
        a: 'It depends on your preference! Fresh and light florals like "Ocean Breeze" are great for casual days. "Midnight Woods" and "Unisex Essence" are also versatile. Chat with us for personalized recommendations based on your taste.',
      },
      {
        q: 'Do you have fragrance recommendations for specific occasions?',
        a: 'Yes! Each product page lists suitable occasions (daily, date night, events, etc.). Visit individual product pages or chat with our team for personalized recommendations based on the occasion you have in mind.',
      },
    ],
  },
  {
    category: 'Delivery & Shipping',
    questions: [
      {
        q: 'Do you deliver nationwide?',
        a: 'Yes, we deliver across the country! We work with reliable courier services to ensure your fragrance arrives safely. Delivery options and fees depend on your location.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 2-5 business days depending on your location. Express options may be available. Our team will provide specific timelines after you place your order.',
      },
      {
        q: 'What if my package doesn\'t arrive?',
        a: 'We guarantee safe delivery. If your package doesn\'t arrive, contact our team immediately via WhatsApp, and we\'ll investigate and make it right.',
      },
      {
        q: 'Can I track my order?',
        a: 'Yes! Once your order is confirmed and dispatched, our team will provide you with tracking information so you can monitor your delivery.',
      },
      {
        q: 'Do you offer international shipping?',
        a: 'Currently, we focus on nationwide delivery. For international inquiries, please chat with our team to discuss options.',
      },
    ],
  },
  {
    category: 'Product Care & Usage',
    questions: [
      {
        q: 'How should I store my fragrance?',
        a: 'Store fragrances in a cool, dark place away from direct sunlight and heat. A bedroom closet or dresser is ideal. Avoid bathroom humidity as it can affect the scent over time.',
      },
      {
        q: 'How do I apply fragrance for maximum longevity?',
        a: 'Apply to pulse points: wrists, neck, behind ears, and inner elbows. These areas generate heat, which helps the fragrance develop and last longer. Avoid rubbing your wrists together; let the fragrance dry naturally.',
      },
      {
        q: 'Can fragrance expire?',
        a: 'Fragrances can last for years if stored properly, but they may fade over time. Most fragrances stay good for 3-5 years. Proper storage ensures maximum longevity.',
      },
      {
        q: 'Will the fragrance stain my clothes?',
        a: 'Fragrances are alcohol-based and shouldn\'t stain. Always apply to skin (pulse points) rather than directly on clothing for best results and to avoid potential marks.',
      },
    ],
  },
  {
    category: 'Customer Service',
    questions: [
      {
        q: 'What if I\'m not satisfied with my purchase?',
        a: 'Your satisfaction is our priority! If you\'re not happy, contact our team within 7 days of purchase. We\'ll work with you to find a solution, whether it\'s a replacement or alternative fragrance.',
      },
      {
        q: 'Can I exchange a fragrance for another?',
        a: 'Yes, absolutely! If you\'d like to try a different fragrance, chat with our team about exchanging within 14 days of purchase. Conditions apply.',
      },
      {
        q: 'How do I get a refund?',
        a: 'We focus on customer satisfaction over refunds. However, if a product arrives damaged or you have legitimate concerns, contact us immediately via WhatsApp, and we\'ll help resolve the issue.',
      },
      {
        q: 'How quickly will my question be answered?',
        a: 'We aim to respond to WhatsApp messages within 2-4 hours during business hours (9AM-6PM weekdays). For email inquiries, expect a response within 24 hours.',
      },
    ],
  },
  {
    category: 'General Information',
    questions: [
      {
        q: 'Why is Dee\'s Scents my best choice?',
        a: 'We offer authentic, premium fragrances at affordable prices, with exceptional customer service, guaranteed longevity, and a curated collection for every preference. You\'re not just buying a fragrance; you\'re buying quality and elegance.',
      },
      {
        q: 'Do you offer gift packaging?',
        a: 'Yes! We can arrange special gift wrapping for your orders. Mention this when you place your order via WhatsApp, and our team will include it.',
      },
      {
        q: 'Can I buy in bulk for events or reselling?',
        a: 'Absolutely! We offer bulk discounts for corporate events, weddings, and resellers. Chat with our team to discuss bulk pricing and arrangements.',
      },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition text-left"
      >
        <h4 className="font-semibold text-foreground">{q}</h4>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
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
            <Link href="/faq" className="text-sm font-medium text-foreground">
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
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about our fragrances, ordering, delivery, and more. Can't find what you're looking for? Chat with our team!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.questions.map((item, idx) => (
                  <FAQItem key={idx} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team is here to help! Reach out via WhatsApp for quick responses or email for detailed inquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink('Hi! I have a question about your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
