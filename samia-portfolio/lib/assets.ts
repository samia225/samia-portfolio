import fs from 'node:fs'
import path from 'node:path'

// Server-only. Checks whether a file under /public exists at build/render time,
// so missing photos never ship as broken images.
export function hasPublicFile(src: string | undefined | null): boolean {
  if (!src || /^https?:\/\//.test(src)) return Boolean(src)
  return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')))
}

export const isDev = process.env.NODE_ENV !== 'production'
