'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Something went wrong</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-md">
        An error occurred. You can try again or go back home.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-4 py-2 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
        >
          Try again
        </button>
        <a
          href="/"
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  )
}
