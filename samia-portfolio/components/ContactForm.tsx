'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// Posts to Formspree, which forwards to the personal inbox set up in the Formspree dashboard.
// Works without JS too (plain POST to Formspree's own thank-you page).
export default function ContactForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const action = `https://formspree.io/f/${formId}`

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p role="status" className="mt-3 font-semibold text-heading">
        Thanks, your message is on its way. I’ll reply by email.
      </p>
    )
  }

  const field = 'mt-1 block w-full border-0 border-b-2 border-text bg-transparent px-0 py-1 text-text'
  return (
    <form action={action} method="POST" onSubmit={onSubmit} className="mt-3 max-w-[560px] space-y-3">
      <div>
        <label htmlFor="cf-name" className="font-semibold">
          Name
        </label>
        <input id="cf-name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className="font-semibold">
          Email
        </label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className="font-semibold">
          Message
        </label>
        <textarea id="cf-message" name="message" rows={5} required className={field} />
      </div>
      {/* Honeypot: hidden from people, bots fill it and Formspree drops the message. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="cf-gotcha">Leave this empty</label>
        <input id="cf-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' ? (
        <p role="alert" className="font-semibold">
          That didn’t send. Please try again or email me directly.
        </p>
      ) : null}
    </form>
  )
}
