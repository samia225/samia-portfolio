import Section from './Section'
import Entry from './Entry'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" title="Work experience" band="b">
      <ol className="space-y-2">
        {experience.map((r) => (
          <Entry key={r.title + r.org} {...r} />
        ))}
      </ol>
    </Section>
  )
}
