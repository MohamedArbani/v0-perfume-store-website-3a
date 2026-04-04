'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getProductById, products } from '@/lib/products'
import { ChevronRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const WHATSAPP_NUMBER = '2347012268966'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

const categoryLabels: Record<string, string> = {
  floral: 'Floral',
  woody: 'Woody',
  oriental: 'Oriental',
  fresh: 'Fresh',
  unisex: 'Unisex',
}

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string

  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

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
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/collections" className="hover:text-foreground transition">
            Collections
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="h-96 md:h-full bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🌸</div>
                <p className="text-muted-foreground font-serif text-xl">{product.name}</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {categoryLabels[product.category]}
                </p>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-2xl font-bold text-accent">{product.price}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{product.longDescription}</p>

              {/* Scent Notes */}
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-foreground">Fragrance Notes</h3>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Top Notes</p>
                    <ul className="space-y-1">
                      {product.notes.top.map((note, idx) => (
                        <li key={idx} className="text-sm text-foreground">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Middle Notes</p>
                    <ul className="space-y-1">
                      {product.notes.middle.map((note, idx) => (
                        <li key={idx} className="text-sm text-foreground">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Base Notes</p>
                    <ul className="space-y-1">
                      {product.notes.base.map((note, idx) => (
                        <li key={idx} className="text-sm text-foreground">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Longevity</p>
                  <p className="text-lg font-bold text-foreground">{product.longevity}</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Projection</p>
                  <p className="text-lg font-bold text-foreground">{product.projection}</p>
                </div>
              </div>

              {/* Occasions */}
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Perfect for</p>
                <div className="flex flex-wrap gap-2">
                  {product.occasions.map((occasion, idx) => (
                    <span key={idx} className="bg-secondary text-foreground text-sm px-4 py-2 rounded-full">
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink(`Hello, I'd like to order ${product.name} from Dee's Scents.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition text-center"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/collections"
                  className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition text-center"
                >
                  Back to Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8">Related Fragrances</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/product/${related.id}`}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="h-48 bg-secondary flex items-center justify-center">
                    <div className="text-4xl">🌸</div>
                  </div>
                  <div className="p-6 space-y-3">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {categoryLabels[related.category]}
                    </p>
                    <h4 className="font-serif text-lg font-bold text-foreground">{related.name}</h4>
                    <p className="text-sm text-muted-foreground">{related.description}</p>
                    <p className="text-lg font-semibold text-accent pt-2">{related.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
