# samia-portfolio

Personal site for Samia Rahman. Next.js 14 (App Router), Tailwind, IBM Plex. Concept: a flight path.

```bash
npm install
npm run dev     # http://localhost:3000, shows placeholders for missing images
npm run build   # production; missing images are hidden
```

## Editing content

All copy is in `data/portfolio.ts`. Search it for `TODO`.

## Things to fill in

- `data/portfolio.ts`: personal email, the `[amount]`s in two matcha recipes, and check the recipe notes.
- `FORMSPREE_ID` in `data/portfolio.ts`: create a form at formspree.io pointed at your personal inbox and paste its ID (the part after `formspree.io/f/`).
- Hero photo: add `public/images/samia-photo.jpg` (square, ~256px). The slot stays hidden until the file exists.

## Media

Project media lives in `public/images/projects/` and `public/videos/`, listed per project in `data/portfolio.ts` with real pixel sizes.
GIFs over 3 MB should be converted to MP4; each GIF needs a `.still.webp` first frame and each video a `.poster.webp`.

## Design rules

- Colors are roles (`bg`, `text`, `heading`, `accent`, `data`, `fill`, `decor`), defined for light and dark in `app/globals.css`. Dark follows the system until the nav toggle is used. `fill` and `decor` are never text colors.
- Spacing scale is 8px (`p-1` = 8px). The default 4px scale is removed on purpose.
- The hero window is the only bordered element. No shadows, tags, eyebrows, section numbers, ALL CAPS labels, gradients, fades or scroll animation.
- Monospace only in real code (the terminal).
- Skills bars are counted from `experience[].tools`, `projects[].stack` and `smallerWork[].tools`; never type counts by hand.
- `data/worldMap.ts` is generated from Natural Earth 110m (world-atlas). Don't hand-edit it.

## Easter egg

Press `` ` `` to open the `~/samia` terminal. Try `ls`, `whereis samia`, `brew matcha`, `cd projects`.
