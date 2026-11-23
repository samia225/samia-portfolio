import Section from './Section'
import { about, quickFacts } from '@/data/portfolio'

// Paragraph on the left, quick-facts card on the right (stacked on mobile).
export default function About() {
  return (
    <Section id="about" title="About" band="a">
      <div className="bleed grid items-start gap-4 md:grid-cols-[3fr_2fr]">
        <p>{about}</p>
        <dl className="entry-card space-y-2 rounded-lg p-3">
          {quickFacts.map((f) => (
            <div key={f.label}>
              <dt className="muted text-sm">{f.label}</dt>
              <dd className="font-semibold">
                {f.href ? (
                  <a href={f.href} className="link">
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
