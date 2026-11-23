import Section from './Section'
import { recipes, waypoints } from '@/data/portfolio'
import { LAND_PATH, MAP_HEIGHT, MAP_POINTS, MAP_WIDTH } from '@/data/worldMap'

// Label placement per point, in map units. Kept clear of the edges and the route.
const LABELS: Record<string, { dx: number; dy: number; anchor: 'start' | 'end' }> = {
  moscow: { dx: -16, dy: -20, anchor: 'end' },
  dhaka: { dx: -16, dy: 44, anchor: 'end' },
  edmonton: { dx: 16, dy: 44, anchor: 'start' },
}

// Route in waypoint order: Eastern Europe → South Asia → North America.
// The long leg dips south so it never crosses the first point.
function routePath() {
  const [m, d, e] = [MAP_POINTS.moscow, MAP_POINTS.dhaka, MAP_POINTS.edmonton]
  const c1 = [(m[0] + d[0]) / 2 + 40, (m[1] + d[1]) / 2 - 24]
  const c2 = [(d[0] + e[0]) / 2, 300]
  return `M${m[0]} ${m[1]} Q${c1[0]} ${c1[1]} ${d[0]} ${d[1]} Q${c2[0]} ${c2[1]} ${e[0]} ${e[1]}`
}

export default function More() {
  return (
    <Section id="more" title="Outside of work" band="b">
      <details>
        <summary className="cursor-pointer font-semibold text-heading">Fun fact: I’ve lived on three continents</summary>

        <figure className="bleed mt-3">
          <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="block h-auto w-full overflow-hidden" role="img" aria-labelledby="map-title">
            <title id="map-title">Map with a route from Eastern Europe to South Asia to North America</title>
            <path d={LAND_PATH} className="map-land" vectorEffect="non-scaling-stroke" />
            <path d={routePath()} className="map-route" vectorEffect="non-scaling-stroke" />
            {waypoints.map((w) => {
              const [x, y] = MAP_POINTS[w.id]
              const l = LABELS[w.id]
              return (
                <g key={w.id}>
                  <circle cx={x} cy={y} r="9" className="map-marker" />
                  <circle cx={x} cy={y} r="3.5" className="map-pin" />
                  <text x={x + l.dx} y={y + l.dy} textAnchor={l.anchor} className="map-label">
                    {w.region}
                  </text>
                </g>
              )
            })}
          </svg>
        </figure>

        <dl className="mt-3 space-y-2">
          {waypoints.map((w) => (
            <div key={w.id}>
              <dt className="font-semibold text-heading">{w.region}</dt>
              <dd>{w.line}</dd>
            </div>
          ))}
        </dl>
      </details>

      <details className="mt-4">
        <summary className="cursor-pointer font-semibold text-heading">My matcha recipes</summary>

        <p className="mt-3">
          Making matcha is my favourite way to unwind. These are the three I make most, and the ones friends keep asking for.
        </p>

        {/* Solid cards: no border or shadow. 8px radius, 24px padding, 24px gap.
            1 across on mobile, 2 on tablet, 3 on desktop; each at most 320px wide. */}
        <ul className="bleed mt-3 grid gap-3 md:grid-cols-[repeat(2,minmax(0,320px))] xl:grid-cols-[repeat(3,minmax(0,320px))]">
          {recipes.map((r) => (
            <li key={r.id} className="matcha-card rounded-lg bg-fill p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image.src}
                alt={r.image.alt}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="block aspect-[4/5] h-auto w-full rounded-[6px] object-cover object-top"
              />
              <h3 className="mt-2 font-semibold">{r.name}</h3>

              <h4 className="mt-[20px] text-sm font-semibold">Ingredients</h4>
              <dl className="mt-1 grid grid-cols-[64px_1fr] gap-x-2 gap-y-[12px] text-sm">
                {r.ingredients.map((x) => (
                  <div key={x.item} className="contents">
                    <dt className="tabular-nums">{x.amount}</dt>
                    <dd>{x.item}</dd>
                  </div>
                ))}
              </dl>

              <h4 className="mt-[20px] text-sm font-semibold">How I make it</h4>
              <ol className="mt-1 list-decimal space-y-1 pl-3 text-sm">
                {r.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </details>
    </Section>
  )
}
