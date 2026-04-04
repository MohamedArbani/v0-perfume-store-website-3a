'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'
import { products, searchProducts } from '@/lib/products'

const categories = [
  { value: 'floral', label: 'Floral' },
  { value: 'woody', label: 'Woody' },
  { value: 'oriental', label: 'Oriental' },
  { value: 'fresh', label: 'Fresh' },
  { value: 'unisex', label: 'Unisex' },
  { value: 'sweet', label: 'Sweet' },
]

const WHATSAPP_NUMBER = '2349038349100'

const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export default function CollectionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'new'>('name')

  const filteredProducts = useMemo(() => {
    let results = searchProducts(searchQuery, {
      category: selectedCategory || undefined,
    })

    if (sortBy === 'price') {
      results.sort((a, b) => {
        const aPrice = parseInt(a.price.replace(/[^0-9]/g, ''))
        const bPrice = parseInt(b.price.replace(/[^0-9]/g, ''))
        return aPrice - bPrice
      })
    } else if (sortBy === 'new') {
      results.sort((a, b) => {
        if (a.new === b.new) return 0
        return a.new ? -1 : 1
      })
    } else {
      results.sort((a, b) => a.name.localeCompare(b.name))
    }

    return results
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-foreground">
            Dee's Scents
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/collections" className="text-sm font-medium text-foreground">
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

      {/* Page Header */}
      <section className="bg-secondary border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
            Our Collections
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover luxury fragrances that match your personality and style
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by name or notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                      selectedCategory === null
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === cat.value
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'new')}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="new">New Arrivals</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No fragrances found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory(null)
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-muted-foreground mb-6">
                  Showing {filteredProducts.length} of {products.length} products
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                      {/* IMAGE BLOCK (REPLACED EMOJI) */}
                      <div className="h-48 bg-secondary relative overflow-hidden">
                        {product.new && (
                          <span className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            New
                          </span>
                        )}

                        {product.bestseller && (
                          <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            Bestseller
                          </span>
                        )}

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {categories.find((c) => c.value === product.category)?.label}
                        </p>

                        <h4 className="font-serif text-xl font-bold text-foreground">
                          <Link
                            href={`/product/${product.id}`}
                            className="hover:text-primary transition"
                          >
                            {product.name}
                          </Link>
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>

                        <p className="text-lg font-semibold text-accent pt-2">
                          {product.price}
                        </p>

                        <div className="space-y-2 pt-4">
                          <Link
                            href={`/product/${product.id}`}
                            className="block w-full border border-primary text-primary text-center py-2 rounded-lg font-medium hover:bg-primary/5 transition"
                          >
                            View Details
                          </Link>

                          <a
                            href={whatsappLink(
                              `Hello, I would like to order the following product from Dee's Scents.\n\nProduct Name: ${product.name}\nPrice: ${product.price}\n\nProduct Image:\n${product.image}\n\nPlease confirm availability and next steps.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-primary text-primary-foreground text-center py-2 rounded-lg font-medium hover:opacity-90 transition"
                          >
                            Order via WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
