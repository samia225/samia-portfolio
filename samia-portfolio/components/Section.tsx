type Props = {
  id: string
  title: string
  band: 'a' | 'b' // alternating full-width background
  children: React.ReactNode
}

// One waypoint on the flight path. The dotted line comes from .route in globals.css and
// runs through every band. 96px top and bottom padding inside each band.
export default function Section({ id, title, band, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={band === 'a' ? 'band-a' : 'band-b'}>
      <div className="route pb-12 pt-12">
        <header className="relative mb-4">
          <span className="waypoint" aria-hidden="true" />
          <h2 id={`${id}-title`} className="text-2xl font-bold">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  )
}
