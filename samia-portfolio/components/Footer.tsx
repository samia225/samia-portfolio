import Terminal from './Terminal'
import { profile, recipes, sections, waypoints } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-wide px-2 py-4 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}, Edmonton
        </p>
        {/* No visible trigger; the terminal still opens with the ` key. */}
        <Terminal
          sections={sections}
          waypoints={waypoints}
          recipes={recipes.map((r) => ({
            name: r.name,
            ratios: r.ingredients.map((x) => `${x.amount} ${x.item}`).join(', '),
            note: r.steps.join(' '),
          }))}
        />
      </div>
    </footer>
  )
}
