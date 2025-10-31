'use client'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Theme-reactive solid background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)] transition-colors duration-700" />

      {/* Subtle aurora glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(139,92,246,0.25),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(168,85,247,0.2),transparent_60%)] blur-3xl opacity-70" />
    </div>
  )
}
