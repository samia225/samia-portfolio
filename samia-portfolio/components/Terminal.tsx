'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Waypoint = { region: string; line: string }
type Recipe = { name: string; ratios: string; note: string }
type Line = { kind: 'in' | 'out'; text: string }

type Props = {
  sections: readonly { id: string; label: string }[]
  waypoints: readonly Waypoint[]
  recipes: readonly Recipe[]
}

const HELP = [
  'commands:',
  '  ls              list sections',
  '  cd <section>    jump to a section',
  '  whereis samia   print the three continents',
  '  brew matcha     print a recipe',
  '  clear           clear the screen',
  '  exit            close (or press Esc)',
]

export default function Terminal({ sections, waypoints, recipes }: Props) {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<Line[]>([{ kind: 'out', text: "type 'help' to see commands." }])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState<number | null>(null)
  const [brewIdx, setBrewIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const logRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    lastFocus.current?.focus()
  }, [])

  // Backtick opens the terminal from anywhere, unless the user is typing in a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      const typing = t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable
      if (e.key === '`' && !typing) {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement as HTMLElement | null
      inputRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight })
  }, [lines])

  function run(raw: string): string[] | null {
    const cmd = raw.trim().replace(/\s+/g, ' ')
    const [head, ...rest] = cmd.split(' ')
    const arg = rest.join(' ')
    switch (head) {
      case '':
        return []
      case 'help':
        return HELP
      case 'ls':
        return [sections.map((s) => `${s.id}/`).join('  ')]
      case 'cd': {
        const target = sections.find((s) => s.id === arg.replace(/\/$/, ''))
        if (!arg || arg === '~') {
          window.location.hash = 'top'
          return []
        }
        if (!target) return [`cd: no such section: ${arg}`]
        window.location.hash = target.id
        return [`flying to ${target.label}`]
      }
      case 'whereis':
        if (arg !== 'samia') return [`whereis: ${arg || '?'} not found. try 'whereis samia'`]
        return waypoints.map((w) => `${w.region.padEnd(15)} ${w.line}`)
      case 'brew': {
        if (arg !== 'matcha') return [`brew: no recipe for '${arg || '?'}'. try 'brew matcha'`]
        const r = recipes[brewIdx % recipes.length]
        setBrewIdx((n) => n + 1)
        return [
          `# ${r.name}`,
          `  ${r.ratios}`,
          `  note: ${r.note}`,
          recipes.length > 1 ? "(run 'brew matcha' again for another)" : '',
        ].filter(Boolean)
      }
      case 'whoami':
        return ['samia: CS student, RL researcher, painter, matcha person']
      case 'sudo':
        return ['permission denied. nice try.']
      case 'clear':
        return null
      case 'exit':
        close()
        return []
      default:
        return [`command not found: ${head}. try 'help'`]
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const out = run(value)
    if (out === null) setLines([])
    else setLines((l) => [...l, { kind: 'in', text: value }, ...out.map((text) => ({ kind: 'out' as const, text }))])
    if (value.trim()) setHistory((h) => [...h, value])
    setHistIdx(null)
    setValue('')
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      e.preventDefault()
      close()
    } else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault()
      const i = histIdx === null ? history.length - 1 : Math.max(0, histIdx - 1)
      setHistIdx(i)
      setValue(history[i])
    } else if (e.key === 'ArrowDown' && histIdx !== null) {
      e.preventDefault()
      const i = histIdx + 1
      if (i >= history.length) {
        setHistIdx(null)
        setValue('')
      } else {
        setHistIdx(i)
        setValue(history[i])
      }
    }
  }

  return (
    <>

      {open ? (
        <div
          id="terminal"
          role="dialog"
          aria-label="Terminal"
          className="term fixed bottom-2 left-2 right-2 z-30 font-mono text-xs sm:left-auto sm:w-[600px]"
        >
          <div className="flex items-center justify-between bg-[#0F5C4A] px-2 py-1 text-[#F5F1E6]">
            <span>~/samia</span>
            <button type="button" onClick={close} aria-label="Close terminal" className="px-1 text-[#F5F1E6] underline-offset-4 hover:underline">
              close
            </button>
          </div>
          <div
            ref={logRef}
            role="log"
            aria-live="polite"
            className="max-h-[320px] min-h-[160px] overflow-y-auto bg-[#1F2A24] p-2 text-[#F5F1E6]"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((l, i) => (
              <pre key={i} className="whitespace-pre-wrap font-mono">
                {l.kind === 'in' ? <span className="text-[#CFDDA8]">samia@edmonton:~$ </span> : null}
                {l.text}
              </pre>
            ))}
            <form onSubmit={onSubmit} className="flex items-baseline">
              <label htmlFor="term-input" className="whitespace-nowrap text-[#CFDDA8]">
                samia@edmonton:~$&nbsp;
              </label>
              <input
                id="term-input"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="w-full bg-[#1F2A24] font-mono text-[#F5F1E6] caret-[#CFDDA8] outline-none focus-visible:shadow-none focus-visible:outline-none"
                aria-describedby="term-hint"
              />
            </form>
            <p id="term-hint" className="sr-only">
              Try ls, whereis samia, or brew matcha. Press Escape to close.
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
