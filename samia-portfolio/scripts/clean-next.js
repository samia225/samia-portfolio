// Deletes the .next build cache before `npm run dev` and `npm run build`, on this computer only.
//
// Why: this project lives in OneDrive. OneDrive turns files in .next into cloud
// placeholders, and Next.js then crashes on start with
// "EINVAL: invalid argument, readlink '.next/...'". A fresh cache always works.
// Skipped on Vercel and other CI, where there is no OneDrive and the build cache should be kept.
// Safe to delete this script (and the predev/prebuild lines in package.json) if the project
// moves out of OneDrive.
if (process.env.VERCEL || process.env.CI) process.exit(0)

const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', '.next')
try {
  fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
} catch (err) {
  console.warn(`Could not fully clear .next (${err.code}). If Next.js fails to start, delete the .next folder by hand.`)
}
