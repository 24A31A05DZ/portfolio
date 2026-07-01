export default function BackgroundBlobs({ variant = 'default' }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-primary-500/25 blur-[100px] animate-blob" />
      <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-primary-700/20 blur-[110px] animate-blob [animation-delay:3s]" />
      {variant === 'default' && (
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary-400/10 blur-[100px] animate-blob [animation-delay:6s]" />
      )}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
    </div>
  )
}
