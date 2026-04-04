import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="font-serif text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. Perhaps this fragrance has been retired or the page URL is incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/collections"
            className="inline-block border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
          >
            View Collections
          </Link>
        </div>
      </div>
    </div>
  )
}
