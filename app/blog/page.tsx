import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowRight, Tag, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Journal & Savoir-faire — Blog Siwak | SIVÀA Geneva',
  description:
    'Découvrez les bienfaits du Siwak, guides d\'utilisation, comparaisons avec la brosse à dents et conseils d\'hygiène naturelle. Blog expert Siwak Genève.',
  keywords: ['bienfaits siwak', 'siwak vs brosse à dents classique', 'miswak bienfaits dentaires', 'hygiène naturelle'],
}

const ARTICLES = [
  {
    slug:    'bienfaits-siwak',
    cat:     'Tradition',
    date:    '12 Mai 2024',
    read:    '8 min',
    title:   "Qu'est-ce que le Siwak ? Bienfaits, utilisation et Sunna",
    excerpt: "Le Siwak n'est pas qu'une alternative naturelle à la brosse à dents moderne ; c'est un héritage botanique vieux de plusieurs millénaires. Plongez dans les racines de l'arbre Salvadora Persica et découvrez pourquoi cette pratique reste inégalée aujourd'hui.",
    img:     'https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg',
    featured: true,
  },
  {
    slug:    'siwak-vs-brosse-a-dents',
    cat:     'Science & Santé',
    date:    '08 Mai 2024',
    read:    '7 min',
    title:   "Siwak vs Brosse à dents : lequel est meilleur pour les dents ?",
    excerpt: "Face aux technologies soniques et aux poils en nylon, le bois de brossage naturel tient-il encore la route ? Analyse comparative des minéraux naturels, de l'impact écologique et de l'efficacité mécanique.",
    img:     'https://storage.googleapis.com/a1aa/image/xFb1nzZx-8_eXdSdS7TFAr9v4I2p4PoIwZ7HlMBj2m8.jpg',
    featured: false,
  },
  {
    slug:    'acheter-siwak-geneve',
    cat:     'Guide Local',
    date:    '02 Mai 2024',
    read:    '6 min',
    title:   "Acheter du vrai Siwak à Genève : notre guide complet",
    excerpt: "La quête de la qualité commence par le choix de la source. De nos ateliers genevois aux meilleures adresses locales, découvrez comment identifier un Siwak frais, bio et éthiquement récolté.",
    img:     'https://storage.googleapis.com/a1aa/image/XsHvQVnbIiS1PLi4GMlrT9mPNtVh4x3QyMvHoYT9vHQ.jpg',
    featured: false,
  },
  {
    slug:    'art-tailler-siwak',
    cat:     'Rituels de Soin',
    date:    '01 Mai 2024',
    read:    '4 min',
    title:   "L'Art de tailler son Siwak",
    excerpt: "La technique de taille détermine 80% de l'efficacité du Siwak. Apprenez les gestes précis de l'atelier SIVÀA pour un brossage optimal.",
    img:     'https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg',
    featured: false,
  },
  {
    slug:    'mineraux-siwak-analyse',
    cat:     'Botanique & Science',
    date:    '28 Avril 2024',
    read:    '5 min',
    title:   "Analyse des minéraux naturels du Siwak",
    excerpt: "Calcium, phosphate, fluore naturel, silice, tanins, alcaloïdes — une analyse complète des composés actifs du Salvadora persica.",
    img:     'https://storage.googleapis.com/a1aa/image/xFb1nzZx-8_eXdSdS7TFAr9v4I2p4PoIwZ7HlMBj2m8.jpg',
    featured: false,
  },
]

const CATEGORIES = [
  { name: 'Botanique & Science',  count: 12 },
  { name: 'Rituels de Soin',      count: 8  },
  { name: 'Héritage & Sunna',     count: 15 },
  { name: 'Éco-responsabilité',   count: 5  },
  { name: 'Guide Local',          count: 7  },
]

const CAT_COLORS: Record<string, string> = {
  'Tradition':         'bg-siv-secondary-container text-siv-secondary',
  'Science & Santé':   'bg-siv-tertiary-container/60 text-siv-tertiary',
  'Guide Local':       'bg-siv-primary-dim/30 text-siv-primary',
  'Rituels de Soin':   'bg-siv-surface-highest text-siv-text-variant',
  'Botanique & Science': 'bg-siv-surface-highest text-siv-text-variant',
}

export default function BlogPage() {
  const [featured, ...rest] = ARTICLES

  return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-siv-surface-lowest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-siv-secondary-container/60 text-siv-secondary px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-6">
            L&apos;Atelier Botanique
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-light text-siv-text mb-4">
            Journal &amp; <em className="not-italic text-siv-primary">Savoir-faire</em>
          </h1>
          <p className="text-siv-text-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Immersion dans l&apos;univers du Siwak. Entre tradition ancestrale, rituels de soin
            et expertise botanique genevoise.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* ── Articles ──────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured */}
            <article className="card-siv group overflow-hidden">
              <div className="relative h-72 overflow-hidden bg-siv-surface-mid">
                <Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full ${CAT_COLORS[featured.cat] ?? 'bg-siv-surface-highest text-siv-text'}`}>
                  {featured.cat}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-siv-outline text-xs">{featured.date}</span>
                  <span className="flex items-center gap-1 text-siv-outline text-xs">
                    <Clock size={11} /> {featured.read} de lecture
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-siv-text mb-3 leading-snug">{featured.title}</h2>
                <p className="text-siv-text-variant text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="flex items-center gap-2 text-siv-primary text-sm font-medium hover:gap-4 transition-all">
                  Lire l&apos;article complet <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* List */}
            <div className="space-y-4">
              {rest.map(a => (
                <article key={a.slug} className="card-siv group flex overflow-hidden hover:bg-siv-surface-high transition-colors">
                  <div className="relative w-32 sm:w-48 flex-shrink-0 overflow-hidden bg-siv-surface-mid">
                    <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full ${CAT_COLORS[a.cat] ?? 'bg-siv-surface-highest text-siv-text'}`}>
                          {a.cat}
                        </span>
                        <span className="text-siv-outline text-xs">{a.date}</span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg text-siv-text leading-snug mb-2">{a.title}</h3>
                      <p className="text-siv-text-variant text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">{a.excerpt}</p>
                    </div>
                    <Link href={`/blog/${a.slug}`} className="flex items-center gap-2 text-siv-primary text-xs font-medium mt-3 hover:gap-3 transition-all">
                      Lire <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────── */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="card-siv p-5">
              <p className="text-label-sm text-siv-text-variant uppercase tracking-widest mb-4">Rechercher</p>
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-siv-outline" />
                <input
                  type="search"
                  placeholder="Explorer le journal..."
                  className="input-botanical pl-9 text-sm"
                  aria-label="Recherche articles"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="card-siv p-5">
              <p className="text-label-sm text-siv-text-variant uppercase tracking-widest mb-5">Catégories</p>
              <ul className="space-y-2">
                {CATEGORIES.map(c => (
                  <li key={c.name}>
                    <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-siv-surface-high transition-colors group">
                      <span className="flex items-center gap-2 text-sm text-siv-text-variant group-hover:text-siv-text">
                        <Tag size={12} className="text-siv-primary" /> {c.name}
                      </span>
                      <span className="text-xs text-siv-outline">{c.count.toString().padStart(2, '0')}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop CTA */}
            <div className="bg-gradient-to-br from-siv-secondary-container to-siv-surface-mid p-6 rounded-xl">
              <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">L&apos;Essentiel SIVÀA</p>
              <p className="font-serif text-xl text-siv-text mb-3">
                Coffret exclusif
              </p>
              <p className="text-siv-text-variant text-sm mb-5 leading-relaxed">
                Siwak fraîchement récolté, protégé par son étui en bois de cèdre.
              </p>
              <Link href="/checkout" className="btn-primary w-full text-center text-sm py-2.5 block">
                Découvrir la Collection
              </Link>
            </div>

            {/* Recent */}
            <div className="card-siv p-5">
              <p className="text-label-sm text-siv-text-variant uppercase tracking-widest mb-5">Articles Récents</p>
              <ul className="space-y-3">
                {ARTICLES.slice(3).map(a => (
                  <li key={a.slug}>
                    <Link href={`/blog/${a.slug}`} className="group">
                      <p className="text-sm text-siv-text group-hover:text-siv-primary transition-colors leading-snug mb-0.5">{a.title}</p>
                      <p className="text-xs text-siv-outline">{a.date}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
