import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { checkoutSchema } from '@/lib/validation'
import { rateLimit, API_LIMIT, getFingerprint } from '@/lib/rateLimit'
import { sendOrderEmails } from '@/lib/email'

const SHIPPING = 9.00

// ─── Catalogue produits côté serveur ─────────────────────────────────────────
// Les prix viennent TOUJOURS du serveur, jamais du client
const CATALOG: Record<string, { name: string; price: number }> = {
  'baton-siwak-premium': { name: 'Bâton de Siwak Premium', price: 12.00 },
  'dentifrice-botanique': { name: 'Dentifrice Botanique',   price: 19.00 },
}

function generateOrderNumber(): string {
  const year = new Date().getFullYear()
  const rand = Math.floor(Math.random() * 90000) + 10000
  return `SIVAA-${year}-${rand}`
}

export async function POST(req: NextRequest) {
  // ── Rate limiting ────────────────────────────────────────────────
  const fingerprint = getFingerprint(req)
  const limit       = rateLimit(`checkout:${fingerprint}`, API_LIMIT)
  if (!limit.allowed) {
    return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429 })
  }

  // ── Parse & validate ─────────────────────────────────────────────
  let body: unknown
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Corps invalide' }, { status: 400 })
  }

  const parsed = checkoutSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Données invalides', details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  const { email, firstName, lastName, address, postalCode, city, paymentMethod, items } = parsed.data

  // ── Valider les produits et calculer le total côté serveur ───────
  const resolvedItems: { name: string; quantity: number; unitPrice: number }[] = []
  for (const item of items) {
    const product = CATALOG[item.id]
    if (!product) {
      return NextResponse.json({ error: `Produit inconnu : ${item.id}` }, { status: 400 })
    }
    resolvedItems.push({ name: product.name, quantity: item.quantity, unitPrice: product.price })
  }

  const subtotal = resolvedItems.reduce((s, i) => s + i.unitPrice * i.quantity, 0)
  const total    = subtotal + SHIPPING

  const shippingAddress = { firstName, lastName, address, postalCode, city, country: 'Suisse' }

  // ── Créer la commande ────────────────────────────────────────────
  const order = await prisma.order.create({
    data: {
      orderNumber: generateOrderNumber(),
      email,
      status:      'PENDING',
      total,
      paymentMethod,
      shippingAddress,
      items: resolvedItems,
    },
    select: { id: true, orderNumber: true, total: true },
  })

  // ── Envoyer les emails (client + propriétaire) ───────────────────
  // On n'attend pas les emails pour ne pas bloquer la réponse
  sendOrderEmails({
    orderNumber:     order.orderNumber,
    customerEmail:   email,
    customerName:    `${firstName} ${lastName}`.trim(),
    shippingAddress,
    items:           resolvedItems,
    total,
    paymentMethod:   paymentMethod as 'REVOLUT' | 'TWINT' | 'STRIPE',
    twintPhone:      '+41 79 000 00 00',         // ← TON numéro Twint
    revolutLink:     'https://revolut.me/SIVAA', // ← TON lien Revolut
  }).catch(err => console.error('[checkout] Email error:', err))

  return NextResponse.json({
    order,
    redirectTo: `/merci?order=${order.orderNumber}&total=${total.toFixed(2)}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(firstName)}`,
  }, { status: 201 })
}
