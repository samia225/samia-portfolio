import Section from './Section'
import ContactForm from './ContactForm'
import { FORMSPREE_ID, profile } from '@/data/portfolio'

export default function Contact() {
  return (
    <Section id="contact" title="Contact" band="a">
      <ContactForm formId={FORMSPREE_ID} />

      <dl className="mt-6 space-y-1">
        <div>
          <dt className="inline font-semibold">School: </dt>
          <dd className="inline">
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="inline font-semibold">Personal: </dt>
          <dd className="inline">
            <a href={`mailto:${profile.personalEmail}`} className="link">
              {profile.personalEmail}
            </a>
          </dd>
        </div>
      </dl>
      <p className="mt-2 flex flex-wrap gap-x-3">
        <a href={profile.github} className="link">
          GitHub
        </a>
        <a href={profile.linkedin} className="link">
          LinkedIn
        </a>
        <a href={profile.resume} className="link" target="_blank" rel="noopener noreferrer">
          Résumé (PDF)<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
      <p className="mt-3">
        I graduate in May 2027 and I’m looking for full-time new-grad roles in software, data and ML.
      </p>
    </Section>
  )
}
