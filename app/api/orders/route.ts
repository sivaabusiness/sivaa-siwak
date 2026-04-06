import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  // ── Vérification clé admin ────────────────────────────────────────
  // Passe le header : x-admin-key: <ADMIN_SECRET_KEY> dans ta requête
  const headersList = await headers()
  const adminKey    = headersList.get('x-admin-key')

  if (!process.env.ADMIN_SECRET_KEY || adminKey !== process.env.ADMIN_SECRET_KEY) {
    // Délai fixe pour éviter le timing attack par bruteforce
    await new Promise(r => setTimeout(r, 200))
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  // ── Pagination légère ─────────────────────────────────────────────
  const url   = new URL(req.url)
  const page  = Math.max(1, parseInt(url.searchParams.get('page') ?? '1'))
  const limit = Math.min(100, parseInt(url.searchParams.get('limit') ?? '50'))

  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      select: {
        id:              true,
        orderNumber:     true,
        email:           true,
        status:          true,
        total:           true,
        paymentMethod:   true,
        shippingAddress: true,
        items:           true,
        createdAt:       true,
      },
      orderBy: { createdAt: 'desc' },
      skip:  (page - 1) * limit,
      take:  limit,
    }),
    prisma.order.count(),
  ])

  return NextResponse.json({ orders, total, page, limit })
}
