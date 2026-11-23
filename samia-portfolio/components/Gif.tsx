'use client'

import { useState } from 'react'

type Props = { src: string; still: string; alt: string; width: number; height: number; imgClassName?: string }

// Animated GIF that respects prefers-reduced-motion.
// Without JS: <picture> serves the GIF only when motion is allowed, otherwise the still frame.
// With reduced motion, a Play button swaps in the GIF on request.
export default function Gif({ src, still, alt, width, height, imgClassName }: Props) {
  const [playing, setPlaying] = useState(false)
  const img = imgClassName ?? 'block h-auto w-full'

  return (
    <div className="relative w-fit">
      {playing ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} width={width} height={height} className={img} />
      ) : (
        <picture>
          <source media="(prefers-reduced-motion: no-preference)" srcSet={src} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={still} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={img} />
        </picture>
      )}
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={playing}
        className="btn btn-primary absolute bottom-2 left-2 py-0 text-sm motion-safe:hidden"
      >
        {playing ? 'Pause' : 'Play'}
        <span className="sr-only"> animation</span>
      </button>
    </div>
  )
}
