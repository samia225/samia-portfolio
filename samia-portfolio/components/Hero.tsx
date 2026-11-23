import { profile } from '@/data/portfolio'
import { hasPublicFile } from '@/lib/assets'

// Flat two-color desktop icons. Lines use the heading color, fills use Matcha and the accent.
const MATCHA = '#CFDDA8'
const line = { stroke: 'var(--heading)', strokeWidth: 2, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }

function DroneIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <path d="M20 20 12 12M28 20l8-8M20 28l-8 8M28 28l8 8" fill="none" {...line} />
      {[
        [10, 10],
        [38, 10],
        [10, 38],
        [38, 38],
      ].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill={MATCHA} {...line} />
      ))}
      <rect x="19" y="19" width="10" height="10" rx="2" fill="var(--accent)" {...line} />
    </svg>
  )
}
function LaptopIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <rect x="9" y="10" width="30" height="21" rx="2" fill={MATCHA} {...line} />
      <path d="M4 36h40l-3 4H7z" fill="var(--accent)" {...line} />
    </svg>
  )
}
function MatchaIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <path d="M15.2 22h17.6L31 42H17z" fill={MATCHA} />
      <rect x="18" y="16" width="6" height="6" fill="none" {...line} />
      <path d="M29 3 24 26" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 12h20l-3 30H17z" fill="none" {...line} />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
      <rect x="6" y="12" width="36" height="26" rx="2" fill={MATCHA} {...line} />
      <path d="m7 14 17 13 17-13" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

const ICONS = [
  { href: '#experience', label: 'Work', Icon: DroneIcon },
  { href: '#projects', label: 'Projects', Icon: LaptopIcon },
  { href: '#more', label: 'More', Icon: MatchaIcon },
  { href: '#contact', label: 'Contact', Icon: MailIcon },
]

export default function Hero() {
  const hasPhoto = hasPublicFile(profile.photo.src)

  return (
    <section id="top" aria-labelledby="hero-title" className="hero-grid">
      <div className="mx-auto max-w-wide px-2 pb-8 pt-6 lg:grid lg:grid-cols-[96px_1fr] lg:items-center lg:gap-4 lg:pb-12 lg:pt-10">
        <nav aria-label="Shortcuts" className="mb-4 lg:mb-0">
          <ul className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-4">
            {ICONS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} className="group flex flex-col items-center gap-1 text-sm text-text">
                  <Icon />
                  <span className="underline-offset-4 group-hover:underline">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* The one bordered element on the site. Always light, in both themes. */}
        <div className="light-island w-full max-w-[760px] border-2 border-[#1F2A24] lg:justify-self-center">
          <div className="flex items-center justify-between bg-[#0F5C4A] px-2 py-1 text-[#F5F1E6]">
            <p className="font-semibold">{profile.greeting}</p>
            <span className="flex gap-1" aria-hidden="true">
              <span className="block h-[12px] w-[12px] rounded-full bg-[#8C1C3A]" />
              <span className="block h-[12px] w-[12px] rounded-full bg-[#B8862B]" />
              <span className="block h-[12px] w-[12px] rounded-full bg-[#CFDDA8]" />
            </span>
          </div>
          <div className="flex flex-col gap-4 bg-bg p-3 text-text sm:flex-row sm:items-center sm:p-5">
            {hasPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                width={128}
                height={128}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
            ) : null}
            <div>
              <h1 id="hero-title" className="text-2xl font-bold sm:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg">{profile.sentence}</p>
              <p className="mt-2">{profile.status}</p>
              <p className="mt-4 flex flex-wrap items-center gap-4">
                <a href="#experience" className="btn btn-primary">
                  See my work
                </a>
                <a href={profile.resume} className="link font-semibold" target="_blank" rel="noopener noreferrer">
                  Résumé (PDF)<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="bg-[#0F5C4A] text-[#F5F1E6]">
        <p className="mx-auto flex max-w-wide flex-wrap gap-x-4 gap-y-1 px-2 py-1 text-sm">
          <a href={profile.github} className="taskbar-link">
            GitHub
          </a>
          <a href={profile.linkedin} className="taskbar-link">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="taskbar-link">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
