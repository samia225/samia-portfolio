// Line-drawn quadcopter, top-down. Inherits color from text.
export default function Quadcopter({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M9.5 9.5 6.5 6.5M14.5 9.5l3-3M9.5 14.5l-3 3M14.5 14.5l3 3" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <circle cx="5" cy="5" r="3" />
      <circle cx="19" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 9.5V8" />
    </svg>
  )
}
