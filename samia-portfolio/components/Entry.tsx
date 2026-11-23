import type { Role } from '@/data/portfolio'

// One work or leadership entry in its own card.
// Header: title and organization on the left, dates on the right (stacked on mobile).
// Then an optional one-line summary, then bullets.
export default function Entry({ title, org, dates, summary, points }: Role) {
  return (
    <li className="entry-card rounded-lg p-3">
      <div className="flex flex-col gap-x-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{org}</p>
        </div>
        <p className="muted shrink-0 text-sm">{dates}</p>
      </div>
      {summary ? <p className="muted mt-2">{summary}</p> : null}
      <ul className="mt-2 list-disc space-y-1 pl-3">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </li>
  )
}
