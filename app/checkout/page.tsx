'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ShieldCheck, Truck, ArrowRight, Minus, Plus, Trash2, Zap, Clock } from 'lucide-react'

// ─── Config paiement — remplace par tes vraies infos ─────────────────────────
const PAYMENT = {
  twintPhone:  '+41 79 000 00 00',         // ← TON numéro Twint
  revolutLink: 'https://revolut.me/SIVAA', // ← TON lien Revolut
}

// ─── Catalogue produits ───────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id:    'baton-siwak-premium',
    name:  'Bâton de Siwak Premium',
    badge: 'Récolté à la main · Pakistan',
    price: 12.00,
    img:   'https://storage.googleapis.com/a1aa/image/JhtpfQ2d5eBvXlLCzqOGwDDm0VoADaFnJ-sTvxU8cCU.jpg',
  },
  {
    id:    'dentifrice-botanique',
    name:  'Dentifrice Botanique',
    badge: 'Menthe & Myrrhe',
    price: 19.00,
    img:   'https://storage.googleapis.com/a1aa/image/y3HjJaQW9Y7Ye4s5Z5v5z5y5y5y5y5y5y5y5y5y5y5.jpg',
  },
]

const SHIPPING = 9.00

export default function CheckoutPage() {
  const router = useRouter()

  const [quantities, setQuantities] = useState<Record<string, number>>({
    'baton-siwak-premium': 1,
    'dentifrice-botanique': 0,
  })
  const [step,    setStep]    = useState<'cart' | 'address'>('cart')
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [form, setForm] = useState({
    name: '', email: '', address: '', postalCode: '', city: '',
  })

  const activeItems = PRODUCTS.filter(p => (quantities[p.id] ?? 0) > 0)
  const subtotal    = activeItems.reduce((s, p) => s + p.price * (quantities[p.id] ?? 0), 0)
  const total       = subtotal + SHIPPING
  const set         = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }))

  // ── Soumission du formulaire → commande + redirect /merci ────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:         form.email,
          firstName:     form.name.split(' ')[0] ?? form.name,
          lastName:      form.name.split(' ').slice(1).join(' ') || '-',
          address:       form.address,
          postalCode:    form.postalCode,
          city:          form.city,
          paymentMethod: 'REVOLUT',
          items: activeItems.map(p => ({ id: p.id, quantity: quantities[p.id] })),
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Erreur serveur')
      }

      const { redirectTo } = await res.json()
      router.push(redirectTo)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue. Réessaie.')
      setLoading(false)
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // ÉTAPE 1 — PANIER
  // ═══════════════════════════════════════════════════════════════════
  if (step === 'cart') return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      <div className="max-w-lg mx-auto px-4 py-16">

        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-siv-primary/10 text-siv-primary px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4">
            <Zap size={12} /> 2 min · Sans compte
          </span>
          <h1 className="font-serif text-4xl font-light text-siv-text">
            Votre <em className="not-italic text-siv-primary">sélection</em>
          </h1>
        </div>

        {/* Produits */}
        <div className="card-siv p-6 space-y-4 mb-6">
          {PRODUCTS.map(p => (
            <div key={p.id} className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-siv-surface-mid flex-shrink-0">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-siv-text truncate">{p.name}</p>
                <p className="text-xs text-siv-outline">{p.badge}</p>
                <p className="text-siv-primary text-sm font-medium mt-0.5">CHF {p.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button type="button"
                  onClick={() => setQuantities(q => ({ ...q, [p.id]: Math.max(0, (q[p.id] ?? 0) - 1) }))}
                  className="w-7 h-7 rounded-lg bg-siv-surface-high flex items-center justify-center text-siv-text-variant hover:bg-siv-surface-highest transition-colors">
                  {(quantities[p.id] ?? 0) <= 1 ? <Trash2 size={12} /> : <Minus size={12} />}
                </button>
                <span className="w-5 text-center text-sm text-siv-text">{quantities[p.id] ?? 0}</span>
                <button type="button"
                  onClick={() => setQuantities(q => ({ ...q, [p.id]: (q[p.id] ?? 0) + 1 }))}
                  className="w-7 h-7 rounded-lg bg-siv-surface-high flex items-center justify-center text-siv-text-variant hover:bg-siv-surface-highest transition-colors">
                  <Plus size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="card-siv p-5 mb-6 space-y-2">
          <div className="flex justify-between text-sm text-siv-text-variant">
            <span>Sous-total</span>
            <span>CHF {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-siv-text-variant">
            <span className="flex items-center gap-1"><Truck size={12} /> Livraison Swiss Post</span>
            <span>CHF {SHIPPING.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-serif text-2xl text-siv-primary pt-2 border-t border-siv-outline-variant/20">
            <span>Total</span>
            <span>CHF {total.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => setStep('address')}
          disabled={activeItems.length === 0}
          className="btn-primary w-full py-4 text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
          Acheter maintenant <ArrowRight size={18} />
        </button>

        <div className="flex items-center justify-center gap-6 mt-6">
          {[
            { icon: ShieldCheck, label: 'Paiement sécurisé' },
            { icon: Truck,       label: 'Swiss Post 48h'    },
            { icon: Clock,       label: '2 min chrono'      },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs text-siv-outline">
              <Icon size={13} className="text-siv-primary" /> {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // ═══════════════════════════════════════════════════════════════════
  // ÉTAPE 2 — ADRESSE & CONFIRMATION
  // ═══════════════════════════════════════════════════════════════════
  return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      <div className="max-w-lg mx-auto px-4 py-16">

        <button onClick={() => setStep('cart')}
          className="text-siv-outline hover:text-siv-text text-sm flex items-center gap-1 mb-8 transition-colors">
          ← Retour au panier
        </button>

        <h1 className="font-serif text-3xl font-light text-siv-text mb-2">
          Livraison & <em className="not-italic text-siv-primary">paiement</em>
        </h1>
        <p className="text-siv-outline text-sm mb-8">Sans inscription · Tes données ne sont jamais revendues</p>

        <form onSubmit={handleSubmit} className="bg-siv-ivory rounded-xl p-8 text-siv-dark-green space-y-5">

          {/* Nom complet */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 block mb-2">
              Nom complet *
            </label>
            <input type="text" required placeholder="Prénom Nom"
              value={form.name} onChange={e => set('name', e.target.value)}
              className="input-ivory w-full" />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 block mb-2">
              Email * <span className="normal-case font-normal">(pour la confirmation)</span>
            </label>
            <input type="email" required placeholder="votre@email.com"
              value={form.email} onChange={e => set('email', e.target.value)}
              className="input-ivory w-full" />
          </div>

          {/* Adresse */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 block mb-2">
              Adresse de livraison *
            </label>
            <input type="text" required placeholder="Rue et numéro"
              value={form.address} onChange={e => set('address', e.target.value)}
              className="input-ivory w-full" />
          </div>

          {/* NPA + Ville */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 block mb-2">NPA *</label>
              <input type="text" required placeholder="1204"
                value={form.postalCode} onChange={e => set('postalCode', e.target.value)}
                className="input-ivory w-full" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 block mb-2">Ville *</label>
              <input type="text" required placeholder="Genève"
                value={form.city} onChange={e => set('city', e.target.value)}
                className="input-ivory w-full" />
            </div>
          </div>

          {/* Récap commande */}
          <div className="bg-white/60 rounded-lg p-4 border border-siv-dark-green/10 space-y-1">
            {activeItems.map(p => (
              <div key={p.id} className="flex justify-between text-sm">
                <span className="text-siv-dark-green/70">{p.name} × {quantities[p.id]}</span>
                <span className="text-siv-dark-green font-medium">CHF {(p.price * (quantities[p.id] ?? 1)).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm text-siv-dark-green/50 pt-1 border-t border-siv-dark-green/10">
              <span>Livraison</span><span>CHF {SHIPPING.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-serif font-medium text-siv-dark-green text-lg pt-1 border-t border-siv-dark-green/10">
              <span>Total</span><span>CHF {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Modes de paiement disponibles */}
          <div className="flex items-center gap-3 text-xs text-siv-dark-green/60">
            <span className="font-bold text-[#00B4E6]">TWINT</span>
            <span>·</span>
            <span className="font-bold text-[#191C1F]">Revolut</span>
            <span>·</span>
            <span className="opacity-40">Carte (bientôt)</span>
          </div>

          {/* Erreur */}
          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">{error}</p>
          )}

          <button type="submit" disabled={loading}
            className="w-full py-4 bg-[#639922] text-white font-semibold rounded-lg flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-50">
            {loading
              ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <>Voir les instructions de paiement <ArrowRight size={16} /></>
            }
          </button>
        </form>

        <p className="text-center text-xs text-siv-outline mt-6">
          🔒 Données chiffrées · Jamais revendues · LPD Suisse
        </p>
      </div>
    </div>
  )
}
