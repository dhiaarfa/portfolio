export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full" aria-hidden="true">
      <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--zia-green))]/60 border-t-transparent animate-spin" />
    </div>
  )
}
