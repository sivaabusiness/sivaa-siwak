import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Truck, Mail, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commande reçue | SIVÀA Geneva',
  robots: { index: false },
}

// ─── Config paiement — remplace par tes vraies infos ─────────────────────────
const PAYMENT = {
  twintPhone:  '+41 79 000 00 00',         // ← TON numéro Twint
  revolutLink: 'https://revolut.me/SIVAA', // ← TON lien Revolut
  whatsapp:    '+41790000000',             // ← TON numéro WhatsApp (sans espaces, sans +)
  email:       'conciergerie@sivaa-geneva.com',
}

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{
    order?: string
    total?: string
    email?: string
    name?:  string
  }>
}) {
  const { order, total, email, name } = await searchParams

  const orderNumber = order ?? 'SIVAA-' + new Date().getFullYear() + '-XXXXX'
  const totalAmount = total ?? '—'
  const whatsappMsg = encodeURIComponent(
    `Bonjour, j'ai effectué un paiement pour la commande ${orderNumber} (CHF ${totalAmount}). Merci !`
  )

  return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      <div className="max-w-lg mx-auto px-4 py-16">

        {/* ── En-tête succès ─────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-siv-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={40} className="text-siv-primary" />
          </div>
          <h1 className="font-serif text-4xl font-light text-siv-text mb-3">
            Merci{name ? `, ${name}` : ''} !
          </h1>
          <p className="text-siv-text-variant">Ta commande a bien été enregistrée.</p>
          <p className="text-siv-outline text-sm mt-1">
            Numéro : <span className="text-siv-primary font-medium">{orderNumber}</span>
          </p>
        </div>

        {/* ── Récapitulatif ──────────────────────────────────────────── */}
        <div className="card-siv p-6 mb-4">
          <p className="text-xs uppercase tracking-widest text-siv-outline mb-4">Récapitulatif</p>
          <div className="flex justify-between items-center text-siv-text-variant text-sm mb-2">
            <span className="flex items-center gap-2"><Truck size={14} className="text-siv-primary" /> Livraison Swiss Post</span>
            <span>CHF 9.00</span>
          </div>
          <div className="flex justify-between items-center border-t border-siv-outline-variant/20 pt-3 mt-2">
            <span className="font-serif text-xl text-siv-text">Total payé</span>
            <span className="font-serif text-2xl text-siv-primary">CHF {totalAmount}</span>
          </div>
        </div>

        {/* ── Confirmation email ─────────────────────────────────────── */}
        {email && (
          <div className="flex items-center gap-3 bg-siv-surface-mid rounded-xl px-5 py-4 mb-6 text-sm text-siv-text-variant">
            <Mail size={16} className="text-siv-primary flex-shrink-0" />
            <span>Confirmation envoyée à <span className="text-siv-text">{email}</span></span>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            INSTRUCTIONS DE PAIEMENT
        ══════════════════════════════════════════════════════════════ */}
        <p className="text-xs uppercase tracking-widest text-siv-outline mb-4">
          Finalise ton paiement
        </p>

        <div className="space-y-4">

          {/* ── Twint ────────────────────────────────────────────────── */}
          <div className="card-siv p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#00B4E6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-black text-[#00B4E6]">T</span>
              </div>
              <div>
                <p className="font-medium text-siv-text">Twint</p>
                <p className="text-xs text-siv-outline">App bancaire suisse · Instantané</p>
              </div>
              <span className="ml-auto text-xs bg-siv-primary/10 text-siv-primary px-2 py-0.5 rounded-full">
                🇨🇭 Recommandé
              </span>
            </div>
            <div className="bg-siv-surface-mid rounded-lg p-4 text-center space-y-1">
              <p className="text-siv-text-variant text-xs">Envoie <strong className="text-siv-primary">CHF {totalAmount}</strong> à ce numéro depuis ton app Twint</p>
              <p className="font-serif text-2xl text-siv-primary tracking-wider">{PAYMENT.twintPhone}</p>
              <p className="text-siv-outline text-xs">
                Référence : <span className="text-siv-text font-medium">SIVAA · {orderNumber}</span>
              </p>
            </div>
          </div>

          {/* ── Revolut ──────────────────────────────────────────────── */}
          <a
            href={`${PAYMENT.revolutLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-siv p-6 flex items-center gap-4 hover:bg-siv-surface-high transition-colors group cursor-pointer"
          >
            <div className="w-10 h-10 bg-siv-surface-highest rounded-xl flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-siv-primary">
                <path d="M13.1 1H4v22h4.3v-7.8H12l4.1 7.8H21l-4.6-8.3c2.4-1 3.9-3.1 3.9-5.8C20.4 4.4 17.3 1 13.1 1zm-.2 10.3H8.3V4.9h4.6c1.9 0 3.3 1.2 3.3 3.2 0 1.9-1.4 3.2-3.3 3.2z"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium text-siv-text">Payer avec Revolut</p>
              <p className="text-xs text-siv-outline">Lien de paiement direct · CHF {totalAmount}</p>
            </div>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-siv-outline group-hover:text-siv-primary transition-colors fill-none stroke-current" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

        </div>

        {/* ── Phrase rassurante ──────────────────────────────────────── */}
        <p className="mt-6 text-center text-sm text-siv-text-variant leading-relaxed">
          Une question ?{' '}
          <a
            href={`https://wa.me/${PAYMENT.whatsapp}?text=${encodeURIComponent('Bonjour, j\'ai une question concernant ma commande SIVÀA.')}`}
            target="_blank" rel="noopener noreferrer"
            className="text-siv-primary hover:underline font-medium"
          >
            Contactez-moi directement sur WhatsApp
          </a>
          , je prépare votre colis personnellement à Genève. 🌿
        </p>

        {/* ── Info livraison ─────────────────────────────────────────── */}
        <div className="mt-4 bg-siv-secondary-container/20 rounded-xl p-5">
          <p className="text-sm text-siv-text-variant leading-relaxed">
            <span className="text-siv-text font-medium">Après paiement :</span> ta commande est expédiée sous 24–48h via Swiss Post. Tu recevras ton numéro de suivi par email.
          </p>
        </div>

        {/* ── Contact WhatsApp ───────────────────────────────────────── */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${PAYMENT.whatsapp}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-medium hover:brightness-110 transition-all flex-1"
          >
            <MessageCircle size={16} />
            Confirmer par WhatsApp
          </a>
          <a
            href={`mailto:${PAYMENT.email}?subject=Commande ${orderNumber}`}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-siv-outline-variant/30 text-siv-text-variant text-sm hover:bg-siv-surface-high transition-all flex-1"
          >
            <Mail size={16} />
            Confirmer par email
          </a>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-xs text-siv-outline hover:text-siv-primary transition-colors">
            ← Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </div>
  )
}
