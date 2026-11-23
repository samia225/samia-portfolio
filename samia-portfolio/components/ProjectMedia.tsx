import Gif from './Gif'
import type { Media } from '@/data/portfolio'
import { hasPublicFile, isDev } from '@/lib/assets'

// File names may contain spaces; encode them for the URL.
const url = (p: string) => encodeURI(p)

// Phone media (portrait): max 480px tall, centered. Desktop media (landscape): full column width.
// In a multi-item row every item is 480px tall so the row lines up.
function sizeClass(m: Media, inRow: boolean) {
  if (inRow) return 'block h-[480px] w-auto max-w-none rounded-lg'
  return m.height > m.width ? 'block h-auto max-h-[480px] w-auto max-w-full rounded-lg' : 'block h-auto w-full rounded-lg'
}

function Item({ m, inRow }: { m: Media; inRow: boolean }) {
  const cls = sizeClass(m, inRow)
  if (!hasPublicFile(m.src)) {
    return <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-data p-3 text-center text-xs text-data">dev only: add public{m.src}</div>
  }
  if (m.kind === 'video') {
    return (
      <video src={url(m.src)} poster={url(m.poster)} width={m.width} height={m.height} className={cls} controls muted playsInline preload="none" aria-label={m.alt}>
        {m.alt}
      </video>
    )
  }
  if (m.kind === 'gif') {
    return <Gif src={url(m.src)} still={url(m.still)} alt={m.alt} width={m.width} height={m.height} imgClassName={cls} />
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url(m.src)} alt={m.alt} width={m.width} height={m.height} loading="lazy" decoding="async" className={cls} />
}

// No captions: each file's description lives in its alt text.
export default function ProjectMedia({ media }: { media: Media[] }) {
  const shown = media.filter((m) => isDev || hasPublicFile(m.src))
  if (!shown.length) return null

  if (shown.length === 1) {
    const portrait = shown[0].height > shown[0].width
    return (
      <div className={portrait ? 'flex items-start justify-center' : ''}>
        <Item m={shown[0]} inRow={false} />
      </div>
    )
  }
  // Several files: a plain row that scrolls sideways (no arrows). Focusable so keyboard users can scroll it.
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" tabIndex={0} role="region" aria-label="Project media, scrolls sideways">
      {shown.map((m) => (
        <div key={m.src} className="shrink-0">
          <Item m={m} inRow />
        </div>
      ))}
    </div>
  )
}
