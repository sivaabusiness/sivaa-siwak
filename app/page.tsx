import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Leaf, ShieldCheck, Truck, Star, ArrowRight,
  Droplets, Sparkles, Heart, Globe, MessageCircle, Plus, Minus
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SIVÀA Geneva — Siwak Naturel & Brosse Botanique à Genève',
  description:
    'Achetez le Siwak naturel premium à Genève. Brosse à dents naturelle Suisse, blanchiment dentaire naturel. Livraison Swiss Post.',
}

const PRODUCTS = [
  {
    id:    'baton-siwak-premium',
    name:  'Bâton de Siwak Premium',
    price: 'CHF 12.00',
    badge: 'Récolté à la main · Pakistan',
    desc:  'Antibactérien naturel. Riche en silice, tanins et minéraux. Prêt à l\'emploi.',
    img:   'https://storage.googleapis.com/a1aa/image/JhtpfQ2d5eBvXlLCzqOGwDDm0VoADaFnJ-sTvxU8cCU.jpg',
  },
  {
    id:    'dentifrice-botanique',
    name:  'Dentifrice Botanique',
    price: 'CHF 19.00',
    badge: 'Essences de menthe & myrrhe',
    desc:  'Formulation sans fluorure artificiel. Compatible avec votre rituel Siwak.',
    img:   'https://storage.googleapis.com/a1aa/image/y3HjJaQW9Y7Ye4s5Z5v5z5y5y5y5y5y5y5y5y5y5y5.jpg',
  },
  {
    id:    'coffret-essentiel',
    name:  "L'Essentiel SIVÀA",
    price: 'CHF 38.00',
    badge: 'Coffret cèdre exclusif',
    desc:  'Siwak fraîchement récolté + Dentifrice Botanique. Livré dans son étui en bois de cèdre.',
    img:   'https://storage.googleapis.com/a1aa/image/JhtpfQ2d5eBvXlLCzqOGwDDm0VoADaFnJ-sTvxU8cCU.jpg',
  },
]

const BENEFITS = [
  { icon: Sparkles, title: 'Blancheur Naturelle', desc: 'La silice naturelle du Salvadora persica polit l\'émail sans abrasion chimique.' },
  { icon: ShieldCheck, title: '70+ Minéraux Actifs', desc: 'Fluore naturel, tanins, alcaloïdes — une pharmacie concentrée dans chaque bâton.' },
  { icon: Droplets, title: 'Antibactérien Prouvé', desc: 'Études cliniques confirment l\'efficacité contre Streptococcus mutans et la plaque.' },
  { icon: Heart, title: '1000 Ans de Tradition', desc: 'Utilisé avant chaque prière. Un rituel de purification ancré dans la civilisation.' },
  { icon: Leaf, title: '100% Naturel & Éthique', desc: 'Zéro plastique, zéro additif. Biodégradable, récoltable à l\'infini.' },
  { icon: Globe, title: 'Swiss Precision', desc: 'Sélectionné, contrôlé et distribué depuis notre atelier genevois.' },
]

const ARTICLES = [
  {
    slug:     'bienfaits-siwak',
    cat:      'Tradition',
    date:     '12 Mai 2024',
    title:    "Qu'est-ce que le Siwak ? Bienfaits, utilisation et Sunna",
    excerpt:  "Le Siwak n'est pas qu'une alternative naturelle. C'est un héritage botanique vieux de plusieurs millénaires.",
    img:      'https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg',
  },
  {
    slug:     'siwak-vs-brosse-a-dents',
    cat:      'Science & Santé',
    date:     '08 Mai 2024',
    title:    "Siwak vs Brosse à dents : lequel est meilleur pour les dents ?",
    excerpt:  "Face aux technologies soniques et aux poils en nylon, le bois de brossage naturel tient-il la route ?",
    img:      'https://storage.googleapis.com/a1aa/image/xFb1nzZx-8_eXdSdS7TFAr9v4I2p4PoIwZ7HlMBj2m8.jpg',
  },
  {
    slug:     'acheter-siwak-geneve',
    cat:      'Guide Local',
    date:     '02 Mai 2024',
    title:    "Acheter du vrai Siwak à Genève : notre guide complet",
    excerpt:  "De nos ateliers genevois aux meilleures adresses locales, comment identifier un Siwak frais et éthique.",
    img:      'https://storage.googleapis.com/a1aa/image/XsHvQVnbIiS1PLi4GMlrT9mPNtVh4x3QyMvHoYT9vHQ.jpg',
  },
]

const REVIEWS = [
  {
    name:     'Yasmine K.',
    location: 'Genève',
    date:     'Mars 2024',
    rating:   5,
    product:  'Siwak Premium',
    quote:    "Je cherchais une alternative naturelle depuis longtemps. Le Siwak SIVÀA a complètement remplacé ma brosse à dents électrique. Dents plus blanches en 2 semaines, gencives apaisées. Livraison le lendemain, emballage soigné.",
  },
  {
    name:     'Omar B.',
    location: 'Lausanne',
    date:     'Février 2024',
    rating:   5,
    product:  'Coffret Essentiel',
    quote:    "Qualité exceptionnelle. Le bâton est frais, flexible, avec cet arôme poivré caractéristique d'un Siwak de première qualité. J'en commande pour toute ma famille. Service client impeccable depuis Genève.",
  },
  {
    name:     'Sophie M.',
    location: 'Zürich',
    date:     'Janvier 2024',
    rating:   5,
    product:  'Dentifrice Botanique',
    quote:    "Complètement conquise par le dentifrice botanique. Sans fluor artificiel, goût menthe très naturel. Je l'utilise avec le Siwak chaque matin — ma bouche n'a jamais été aussi propre.",
  },
  {
    name:     'Karim A.',
    location: 'Genève',
    date:     'Avril 2024',
    rating:   5,
    product:  'Siwak Premium',
    quote:    "En tant que Musulman, le Siwak fait partie de ma Sunna quotidienne. Trouver une qualité pareille à Genève, c'est une vraie bénédiction. Frais, bien emballé, expédié rapidement. Je recommande à 100%.",
  },
  {
    name:     'Léa F.',
    location: 'Berne',
    date:     'Mars 2024',
    rating:   4,
    product:  'Coffret Essentiel',
    quote:    "Beau coffret, produit de qualité. J'ai mis quelques jours à m'habituer à la technique mais après une semaine, je ne peux plus m'en passer. L'étui en cèdre est magnifique, parfait comme cadeau.",
  },
  {
    name:     'Adil R.',
    location: 'Genève',
    date:     'Avril 2024',
    rating:   5,
    product:  'Siwak Premium',
    quote:    "Meilleur Siwak que j'ai trouvé en Suisse. Bien plus frais que ce qu'on trouve dans les épiceries orientales. SIVÀA connaît vraiment son produit. Abonné pour la vie.",
  },
]

const FAQ = [
  {
    q: 'Comment utiliser le Siwak pour la première fois ?',
    a: "Retirez l'écorce sur environ 1 cm avec vos dents, mâchez l'extrémité jusqu'à obtenir des fibres en éventail, puis brossez doucement de droite à gauche. Rincez la bouche à l'eau. Coupez 1 cm après chaque usage pour retrouver des fibres fraîches.",
  },
  {
    q: 'Combien de temps dure un bâton de Siwak ?',
    a: "Un bâton SIVÀA dure en moyenne 1 à 2 semaines selon la fréquence d'utilisation. Conservez-le dans son emballage ou dans un endroit frais et sec. Il se coupe par tranches de 1 cm au fur et à mesure.",
  },
  {
    q: 'Le Siwak est-il aussi efficace qu\'une brosse à dents classique ?',
    a: "Oui — plusieurs études publiées dans le Journal of Periodontology confirment que le Siwak est aussi efficace qu'une brosse à dents conventionnelle pour réduire la plaque et l'inflammation gingivale, grâce à ses 70+ composés actifs naturels (silice, tanins, alcaloïdes, fluor naturel).",
  },
  {
    q: 'Dois-je utiliser du dentifrice en plus du Siwak ?',
    a: "Non, le Siwak contient naturellement ses propres agents nettoyants, abrasifs doux et antibactériens. Vous pouvez l'utiliser seul ou l'associer à notre Dentifrice Botanique pour un rituel complet.",
  },
  {
    q: 'Quels sont les délais et frais de livraison en Suisse ?',
    a: "Livraison en 2-3 jours ouvrés via Swiss Post pour CHF 9.00. Toutes les commandes passées avant 14h sont expédiées le jour même (jours ouvrés). Vous recevez un email de confirmation avec numéro de suivi.",
  },
  {
    q: 'Le Siwak convient-il aux enfants et femmes enceintes ?',
    a: "Le Siwak est un produit 100% naturel, sans additifs chimiques. Il est généralement considéré comme sûr pour les enfants à partir de 6 ans (sous supervision) et les femmes enceintes. En cas de doute, consultez votre médecin ou dentiste.",
  },
  {
    q: 'Comment puis-je suivre ma commande ?',
    a: "Créez votre compte SIVÀA lors de votre achat. Votre espace client vous permet de suivre en temps réel le statut de votre commande (En préparation → Expédié → Livré). Vous recevez également un email à chaque changement de statut.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-siv-surface-lowest via-siv-bg to-siv-secondary-container/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_40%,rgba(157,215,90,0.06),transparent)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            {/* Origin badge */}
            <div className="inline-flex items-center gap-2 bg-siv-secondary-container/60 text-siv-secondary px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-siv-primary animate-pulse-soft" />
              Hand-harvested · Pakistan · Swiss Certified
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-siv-text leading-[1.05] mb-6 text-balance">
              L&apos;Art du{' '}
              <em className="not-italic text-siv-primary">Siwak</em>
              {' '}à{' '}
              <span className="text-siv-text-variant">Genève</span>
            </h1>

            <p className="text-siv-text-variant text-lg leading-relaxed max-w-xl mb-10">
              La brosse à dents naturelle que le monde utilise depuis 1000 ans —
              sélectionnée avec la précision suisse. Antibactérien, blanchissant,
              biodégradable. Livraison en 48h à travers toute la Suisse.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/checkout" className="btn-primary flex items-center gap-2 text-base">
                Commander maintenant
                <ArrowRight size={18} />
              </Link>
              <Link href="/blog" className="btn-ghost flex items-center gap-2 text-base">
                Découvrir le Siwak
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-siv-outline-variant/20">
              {[
                { label: 'Swiss Post 48h', icon: Truck },
                { label: '100% Naturel', icon: Leaf },
                { label: 'SSL Sécurisé', icon: ShieldCheck },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-siv-text-variant">
                  <Icon size={15} className="text-siv-primary" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-xl overflow-hidden shadow-siv-lg glow-primary">
              <Image
                src="https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg"
                alt="Bâton de Siwak Salvadora persica premium SIVÀA Geneva"
                width={600}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-siv-surface-highest px-5 py-3 rounded-xl shadow-siv">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-siv-primary fill-siv-primary" />
                <span className="text-sm font-medium text-siv-text">4.9/5 — 200+ avis Genève</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="produits">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">
              L&apos;Atelier Botanique
            </p>
            <h2 className="font-serif text-4xl font-light text-siv-text">
              Notre <em className="not-italic text-siv-primary">Collection</em>
            </h2>
          </div>
          <Link href="/checkout" className="hidden sm:flex items-center gap-2 text-sm text-siv-text-variant hover:text-siv-primary transition-colors">
            Voir tout <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="card-siv group overflow-hidden hover:bg-siv-surface-high transition-colors duration-300">
              <div className="relative h-64 overflow-hidden bg-siv-surface-mid">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Origin badge */}
                <div className="absolute top-3 left-3 bg-siv-tertiary-container/80 text-siv-tertiary text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {p.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-siv-text mb-2">{p.name}</h3>
                <p className="text-siv-text-variant text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-siv-primary">{p.price}</span>
                  <Link
                    href="/checkout"
                    className="flex items-center gap-2 px-4 py-2 bg-siv-surface-highest hover:bg-siv-primary hover:text-siv-dark-green rounded-lg text-sm font-medium text-siv-text transition-all duration-200"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────── */}
      <section className="bg-siv-surface-lowest py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">Pourquoi le Siwak</p>
            <h2 className="font-serif text-4xl font-light text-siv-text">
              La Nature fait <em className="not-italic text-siv-primary">mieux</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-siv-surface-low p-8 rounded-xl group hover:bg-siv-surface-mid transition-colors">
                <div className="w-12 h-12 bg-siv-secondary-container rounded-xl flex items-center justify-center mb-5 group-hover:bg-siv-primary-dim transition-colors">
                  <Icon size={22} className="text-siv-primary" />
                </div>
                <h3 className="font-serif text-lg text-siv-text mb-2">{title}</h3>
                <p className="text-siv-text-variant text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">Journal & Savoir-faire</p>
            <h2 className="font-serif text-4xl font-light text-siv-text">
              Le <em className="not-italic text-siv-primary">Journal</em>
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm text-siv-text-variant hover:text-siv-primary transition-colors">
            Tous les articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <article key={a.slug} className="card-siv group overflow-hidden hover:bg-siv-surface-high transition-colors">
              <div className="relative h-48 overflow-hidden bg-siv-surface-mid">
                <Image src={a.img} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-siv-secondary-container text-siv-secondary text-xs px-2.5 py-0.5 rounded-full">{a.cat}</span>
                  <span className="text-siv-outline text-xs">{a.date}</span>
                </div>
                <h3 className="font-serif text-lg text-siv-text mb-2 leading-snug">{a.title}</h3>
                <p className="text-siv-text-variant text-sm leading-relaxed mb-4 line-clamp-2">{a.excerpt}</p>
                <Link href={`/blog/${a.slug}`} className="flex items-center gap-2 text-siv-primary text-sm font-medium hover:gap-3 transition-all">
                  Lire l&apos;article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Avis Clients ──────────────────────────────────────────────── */}
      <section className="bg-siv-surface-lowest py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">Témoignages</p>
            <h2 className="font-serif text-4xl font-light text-siv-text">
              Ce que disent nos <em className="not-italic text-siv-primary">clients</em>
            </h2>
            <p className="text-siv-text-variant text-sm mt-3">
              4.9/5 · Plus de 200 avis vérifiés depuis Genève et toute la Suisse
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-siv-surface-low rounded-xl p-7 flex flex-col gap-5 hover:bg-siv-surface-mid transition-colors">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < r.rating ? 'text-siv-primary fill-siv-primary' : 'text-siv-outline'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-base text-siv-text leading-relaxed italic flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-siv-outline-variant/20">
                  <div className="w-9 h-9 rounded-full bg-siv-secondary-container flex items-center justify-center text-siv-primary font-semibold text-sm flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-siv-text">{r.name}</p>
                    <p className="text-xs text-siv-outline">{r.location} · {r.date}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs bg-siv-surface-highest text-siv-text-variant px-2 py-0.5 rounded-full">
                      {r.product}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating summary */}
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: '200+', label: 'Avis vérifiés'     },
              { value: '4.9',  label: 'Note moyenne'      },
              { value: '98%',  label: 'Recommandent'      },
              { value: '48h',  label: 'Livraison Suisse'  },
            ].map(s => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-siv-primary">{s.value}</p>
                <p className="text-xs text-siv-text-variant mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">Questions fréquentes</p>
          <h2 className="font-serif text-4xl font-light text-siv-text">
            Tout savoir sur le <em className="not-italic text-siv-primary">Siwak</em>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <details key={i} className="group bg-siv-surface-low rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-siv-surface-mid transition-colors">
                <span className="font-medium text-siv-text text-sm sm:text-base">{item.q}</span>
                <span className="flex-shrink-0 text-siv-outline group-open:hidden">
                  <Plus size={18} />
                </span>
                <span className="flex-shrink-0 text-siv-primary hidden group-open:block">
                  <Minus size={18} />
                </span>
              </summary>
              <div className="px-6 pb-5 text-siv-text-variant text-sm leading-relaxed border-t border-siv-outline-variant/20 pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-siv-text-variant text-sm mb-4">Votre question n&apos;est pas listée ?</p>
          <Link href="/contact" className="btn-ghost border border-siv-outline-variant/30 inline-flex items-center gap-2 text-sm">
            <MessageCircle size={15} /> Contacter notre atelier
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-siv-secondary-container to-siv-surface-low py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-4">Livraison Swiss Post · 48h</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-siv-text mb-6">
            Commencez votre rituel <em className="not-italic text-siv-primary">aujourd&apos;hui</em>
          </h2>
          <p className="text-siv-text-variant text-lg mb-10 max-w-xl mx-auto">
            Rejoignez les centaines de Genevois qui ont adopté le rituel du Siwak. Naturel, efficace, éternel.
          </p>
          <Link href="/checkout" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-3">
            Commander mon Siwak <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
