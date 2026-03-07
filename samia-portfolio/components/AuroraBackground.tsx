'use client'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 transition-colors duration-700" />
      <div className="aurora-blob one" />
      <div className="aurora-blob two" />
      <div className="aurora-blob three" />
      <div className="magical-grid absolute inset-0 opacity-60" />
    </div>
  )
}
