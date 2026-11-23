import Section from './Section'
import { about } from '@/data/portfolio'

export default function About() {
  return (
    <Section id="about" title="About" band="a">
      <p>{about}</p>
    </Section>
  )
}
