import Section from './Section'
import ProjectMedia from './ProjectMedia'
import { projects } from '@/data/portfolio'

function Chevron() {
  return (
    <svg className="chevron absolute right-0" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Collapsible project cards, closed by default, newest first.
// Closed: title, one-liner, stack. Open: text (~55%) beside media (~45%) on desktop, stacked on mobile.
export default function Projects() {
  return (
    <Section id="projects" title="Projects" band="a">
      <div className="bleed space-y-2">
        {projects.map((p) => {
          const [main, ...rest] = p.links
          return (
            <details key={p.id} className="project-card rounded-lg p-3">
              <summary className="relative block max-w-none cursor-pointer pr-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <span className="block">{p.tagline}</span>
                <span className="muted mt-1 block text-sm">{p.stack.join(', ')}</span>
                <Chevron />
              </summary>

              <div className={`mt-4 grid gap-4 ${p.media.length ? 'md:grid-cols-[55fr_45fr]' : ''}`}>
                <div>
                  <p className="muted text-sm">{p.context}</p>
                  <p className="mt-2">
                    {p.problem} {p.built} {p.result}
                  </p>
                  {main || p.linkNote ? (
                    <p className="mt-3 flex flex-wrap items-center gap-3">
                      {main ? (
                        <a href={main.href} className="btn btn-primary">
                          {main.label}
                        </a>
                      ) : null}
                      {rest.map((l) => (
                        <a key={l.href} href={l.href} className="link font-semibold">
                          {l.label}
                        </a>
                      ))}
                      {p.linkNote ? <span className="text-sm">{p.linkNote}</span> : null}
                    </p>
                  ) : null}
                </div>
                {p.media.length ? <ProjectMedia media={p.media} /> : null}
              </div>
            </details>
          )
        })}
      </div>
    </Section>
  )
}
