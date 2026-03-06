'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 24, background: '#f8fafc', color: '#0f172a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>Something went wrong</h1>
        <p style={{ color: '#64748b', fontSize: 14, marginBottom: 24, textAlign: 'center' }}>
          A critical error occurred. Please try again.
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={reset}
            style={{
              padding: '10px 20px',
              borderRadius: 12,
              background: '#16a34a',
              color: 'white',
              border: 'none',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
          <a
            href="/"
            style={{
              padding: '10px 20px',
              borderRadius: 12,
              border: '1px solid #e2e8f0',
              color: '#334155',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Back to home
          </a>
        </div>
      </body>
    </html>
  )
}
