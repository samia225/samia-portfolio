import Section from './Section'
import Entry from './Entry'
import { leadership } from '@/data/portfolio'

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership" band="a">
      <ol className="space-y-2">
        {leadership.map((r) => (
          <Entry key={r.title} {...r} />
        ))}
      </ol>
    </Section>
  )
}
