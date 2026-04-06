import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { rateLimit, CONTACT_LIMIT, getClientIp } from '@/lib/rateLimit'

export async function POST(req: NextRequest) {
  // ── Rate limiting ────────────────────────────────────────────────
  const ip = getClientIp(req)
  const limit = rateLimit(`contact:${ip}`, CONTACT_LIMIT)
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Limite de messages atteinte. Réessayez dans une heure.' },
      { status: 429 }
    )
  }

  // ── Parse & validate ─────────────────────────────────────────────
  let body: unknown
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Données invalides', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  // ── Send email (placeholder — integrate with Resend/SendGrid in prod) ──
  /*
  await resend.emails.send({
    from:    'noreply@sivaa-geneva.com',
    to:      'conciergerie@sivaa-geneva.com',
    subject: `[Contact] ${parsed.data.subject} — ${parsed.data.email}`,
    html:    `<p>${parsed.data.message}</p>`,
  })
  */
  console.log('[Contact form submission]', {
    email:   parsed.data.email,
    subject: parsed.data.subject,
    name:    `${parsed.data.firstName} ${parsed.data.lastName}`,
  })

  return NextResponse.json({ success: true }, { status: 200 })
}
