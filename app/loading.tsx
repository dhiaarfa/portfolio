/** Server loading UI – no client JS so first paint is instant */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-10 h-10 rounded-full border-2 border-[hsl(var(--zia-green))]/60 border-t-transparent animate-spin"
          aria-hidden
        />
        <p className="text-xs font-medium text-muted-foreground">Loading…</p>
      </div>
    </div>
  )
}
