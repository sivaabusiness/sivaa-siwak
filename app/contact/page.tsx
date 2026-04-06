'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { MapPin, Clock, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

// Note: metadata export doesn't work in client components.
// To add SEO metadata, convert to a server wrapper + client form component.

const SUBJECTS = [
  { value: 'order',    label: 'Suivi de Commande' },
  { value: 'product',  label: 'Conseil Produit'   },
  { value: 'delivery', label: 'Livraison'         },
  { value: 'other',    label: 'Autre demande'     },
]

export default function ContactPage() {
  const [form, setForm]       = useState({
    email: '', firstName: '', lastName: '', address: '', postalCode: '',
    city: '', subject: 'order', message: '', gdprConsent: false, newsletter: false,
  })
  const [status,  setStatus]  = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errors,  setErrors]  = useState<Record<string, string[]>>({})

  const set = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrors({})
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrors(data.details ?? {})
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-siv-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-siv-primary" />
          </div>
          <h2 className="font-serif text-3xl text-siv-text mb-3">Message envoyé</h2>
          <p className="text-siv-text-variant text-sm leading-relaxed">
            Notre équipe vous répondra sous 24h, du lundi au vendredi.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      {/* Hero */}
      <section className="bg-siv-surface-lowest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-siv-secondary-container/60 text-siv-secondary px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6">
            Conciergerie
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-light text-siv-text mb-4">
            Nous contacter.
          </h1>
          <p className="text-siv-text-variant text-lg max-w-2xl leading-relaxed">
            Que ce soit pour une question sur nos rituels de Siwak ou un suivi de commande,
            notre atelier genevois est à votre écoute.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* ── Contact Info ────────────────────────────────────────── */}
          <div className="space-y-4">
            {[
              { icon: MapPin, title: 'Atelier Genève', value: 'Rue de la Corraterie 14\n1204 Genève, Suisse' },
              { icon: Clock,  title: 'Horaires de réponse', value: 'Lundi — Vendredi\n09:00 - 18:00 CET' },
              { icon: Mail,   title: 'Direct', value: 'conciergerie@sivaa-geneva.com' },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="card-siv p-6 flex gap-4">
                <div className="w-10 h-10 bg-siv-secondary-container rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-siv-primary" />
                </div>
                <div>
                  <p className="text-label-sm text-siv-text-variant uppercase tracking-widest mb-1">{title}</p>
                  <p className="text-sm text-siv-text whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="relative h-48 bg-siv-surface-mid rounded-xl overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.13,46.19,6.16,46.21&layer=mapnik&marker=46.2022,6.1457"
                className="w-full h-full grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                title="Localisation SIVÀA Geneva"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-siv-surface-highest/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-siv-primary animate-pulse-soft" />
                <span className="text-xs text-siv-text">Localisation Siège</span>
              </div>
            </div>
          </div>

          {/* ── Contact Form ─────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-siv-ivory rounded-xl p-8 text-siv-dark-green">
              {status === 'error' && Object.keys(errors).length === 0 && (
                <div className="flex items-center gap-3 bg-red-50 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  <AlertCircle size={16} /> Une erreur est survenue. Réessayez.
                </div>
              )}

              {/* Section 1: Contact */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 mb-4">
                  1 — Informations de contact
                </p>
                <div className="space-y-4">
                  <div>
                    <input type="email" required placeholder="Email *" value={form.email}
                      onChange={e => set('email', e.target.value)}
                      className="input-ivory w-full"
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email[0]}</p>}
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.newsletter}
                      onChange={e => set('newsletter', e.target.checked)}
                      className="w-4 h-4 rounded accent-siv-primary"
                    />
                    <span className="text-sm text-siv-dark-green/70">S&apos;abonner aux rituels et nouveautés SIVÀA</span>
                  </label>
                </div>
              </div>

              {/* Section 2: Address */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 mb-4">
                  2 — Adresse (optionnel)
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Prénom" value={form.firstName}
                    onChange={e => set('firstName', e.target.value)} className="input-ivory" />
                  <input type="text" placeholder="Nom" value={form.lastName}
                    onChange={e => set('lastName', e.target.value)} className="input-ivory" />
                  <input type="text" placeholder="Adresse" value={form.address}
                    onChange={e => set('address', e.target.value)} className="input-ivory sm:col-span-2" />
                  <input type="text" placeholder="Code postal" value={form.postalCode}
                    onChange={e => set('postalCode', e.target.value)} className="input-ivory" />
                  <input type="text" placeholder="Ville" value={form.city}
                    onChange={e => set('city', e.target.value)} className="input-ivory" />
                </div>
              </div>

              {/* Section 3: Subject */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 mb-4">
                  3 — Objet de votre message
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SUBJECTS.map(s => (
                    <label key={s.value} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      form.subject === s.value
                        ? 'border-siv-dark-green bg-siv-dark-green/5'
                        : 'border-siv-dark-green/15 hover:border-siv-dark-green/30'
                    }`}>
                      <input type="radio" name="subject" value={s.value}
                        checked={form.subject === s.value}
                        onChange={() => set('subject', s.value)}
                        className="accent-siv-dark-green"
                      />
                      <span className="text-sm">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Section 4: Message */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-siv-dark-green/50 mb-4">
                  4 — Votre message *
                </p>
                <textarea
                  required rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                  className="input-ivory resize-none"
                />
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message[0]}</p>}
              </div>

              {/* GDPR */}
              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={form.gdprConsent}
                    onChange={e => set('gdprConsent', e.target.checked)}
                    className="w-4 h-4 rounded mt-0.5 accent-siv-dark-green"
                  />
                  <span className="text-xs text-siv-dark-green/70 leading-relaxed">
                    Je consens au traitement de mes données conformément à la Politique de Confidentialité.
                    Données protégées selon la LPD Suisse. *
                  </span>
                </label>
              </div>

              <button type="submit" disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 py-4 bg-siv-dark-green text-white font-semibold rounded-lg hover:brightness-110 transition-all disabled:opacity-50">
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <><Send size={18} /> Envoyer le message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
