// Shared layout for work and leadership entries: title, organization, dates, bullets.
export default function Entry({ title, org, dates, points }: { title: string; org: string; dates: string; points: string[] }) {
  return (
    <li>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>
        {org} · <span className="text-data">{dates}</span>
      </p>
      <ul className="mt-1 list-disc space-y-1 pl-3">
        {points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
    </li>
  )
}
