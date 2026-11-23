import Section from './Section'
import { languages, toolLines } from '@/data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Skills and tools" band="b">
      <h3 className="text-lg font-semibold">What I use most</h3>
      <p>How much I use each language across work, research and projects.</p>

      <ul className="mt-3 space-y-2">
        {languages.map((l) => (
          <li key={l.name}>
            <span className="sr-only">{`${l.name}, ${l.percent} percent`}</span>
            <div aria-hidden="true">
              <p className="flex max-w-none justify-between gap-2">
                <span className="font-semibold">{l.name}</span>
                <span>{l.percent}%</span>
              </p>
              {/* 8px bar, 4px radius, one color. */}
              <div className="bar-track h-1 rounded-sm">
                <div className="bar-fill h-full rounded-sm" style={{ width: `${l.percent}%` }} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Each tool group in its own card, 2 columns on desktop. */}
      <ul className="bleed mt-6 grid gap-2 md:grid-cols-2">
        {toolLines.map((g) => (
          <li key={g.label} className="entry-card rounded-lg p-3">
            <h4 className="font-bold">{g.label}</h4>
            <p className="mt-1">{g.items}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
