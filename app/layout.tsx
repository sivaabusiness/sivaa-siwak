import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ─── SEO — Local Geneva ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  title: {
    template: '%s | SIVÀA Geneva — Siwak Naturel Suisse',
    default:  'SIVÀA Geneva — Siwak Naturel & Brosse Botanique à Genève',
  },
  description:
    'Découvrez le Siwak naturel premium de SIVÀA Geneva. Brosse à dents naturelle Suisse, blanchiment dentaire naturel Genève. Récolté à la main, livraison en Suisse.',
  keywords: [
    'Siwak Genève', 'Miswak Suisse', 'brosse à dents naturelle Suisse',
    'achat Miswak qualité', 'blanchiment dentaire naturel Genève',
    'Salvadora persica', 'Siwak premium', 'hygiène naturelle Genève',
  ],
  authors:  [{ name: 'SIVÀA Geneva' }],
  creator:  'SIVÀA Geneva',
  robots:   { index: true, follow: true },
  openGraph: {
    type:        'website',
    locale:      'fr_CH',
    siteName:    'SIVÀA Geneva',
    title:       'SIVÀA Geneva — Siwak Naturel & Brosse Botanique',
    description: 'L\'excellence suisse au service d\'un rituel millénaire. Siwak naturel premium, livraison en Suisse.',
    images: [{
      url:    '/og-image.jpg',
      width:  1200,
      height: 630,
      alt:    'SIVÀA Geneva — Siwak Naturel',
    }],
  },
  twitter: {
    card:  'summary_large_image',
    title: 'SIVÀA Geneva — Siwak Naturel Suisse',
  },
}

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type':    'LocalBusiness',
  name:       'SIVÀA Geneva',
  description: 'Boutique de Siwak naturel premium à Genève, Suisse.',
  url:        'https://sivaa-geneva.com',
  telephone:  '+41 22 000 0000',
  address: {
    '@type':           'PostalAddress',
    streetAddress:     'Rue de la Corraterie 14',
    addressLocality:   'Genève',
    postalCode:        '1204',
    addressCountry:    'CH',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   46.2022,
    longitude:  6.1457,
  },
  openingHoursSpecification: [{
    '@type':     'OpeningHoursSpecification',
    dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens:       '09:00',
    closes:      '18:00',
  }],
  priceRange: '$$',
  currenciesAccepted: 'CHF',
  paymentAccepted:    'Credit Card, Revolut',
}

// ─── Numéro WhatsApp SIVÀA (à mettre à jour) ─────────────────────────────────
const WHATSAPP_NUMBER = '41790000000' // ← REMPLACE par ton vrai numéro (sans +)
const WHATSAPP_MSG    = encodeURIComponent('Bonjour SIVÀA, j\'ai une question sur votre Siwak 🌿')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* ── Bouton WhatsApp flottant ──────────────────────────────── */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous contacter sur WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          {/* Tooltip */}
          <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-200 bg-siv-surface-highest text-siv-text text-xs px-3 py-2 rounded-lg shadow-siv whitespace-nowrap pointer-events-none">
            Une question ? On répond vite 💬
          </span>
          {/* Bouton */}
          <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
            {/* Icône WhatsApp SVG */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </a>
      </body>
    </html>
  )
}
