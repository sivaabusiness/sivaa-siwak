import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const ARTICLES: Record<string, {
  slug: string; cat: string; date: string; read: string
  title: string; description: string; img: string
  content: string
}> = {
  'bienfaits-siwak': {
    slug: 'bienfaits-siwak',
    cat:  'Tradition',
    date: '12 Mai 2024',
    read: '8 min',
    title: "Qu'est-ce que le Siwak ? Bienfaits, utilisation et Sunna",
    description: "Le Siwak n'est pas qu'une alternative naturelle à la brosse à dents moderne. Découvrez l'héritage botanique du Salvadora persica et ses bienfaits prouvés.",
    img: 'https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg',
    content: `
Le **Siwak** (également appelé *Miswak*) est une branche ou racine de l'arbre **Salvadora persica**,
utilisée depuis plus de **1000 ans** comme brosse à dents naturelle dans les civilisations arabo-islamiques,
africaines et asiatiques.

## Composition Botanique

Le Salvadora persica contient une concentration remarquable de composés actifs :

- **Silice naturelle** — agent polissant doux pour l'émail
- **Tanins** — resserrent les gencives, effets astringents
- **Alcaloïdes** (Salvadourine) — propriétés antibactériennes
- **Calcium et phosphate** — reminéralisation de l'émail
- **Fluor naturel** — protection contre les caries
- **Vitamine C** — santé gingivale
- **Benzyl isothiocyanate** — antibactérien puissant contre Streptococcus mutans

## La Sunna et la Tradition Islamique

Le Prophète Muhammad (ﷺ) a dit : *"Le Siwak purifie la bouche et est agréable à Allah."*
(Rapporté par An-Nasa'i et Ahmad). Cette recommandation est à l'origine de l'utilisation
quotidienne du Siwak par des centaines de millions de personnes à travers le monde.

## Comment Utiliser le Siwak

1. **Taille** — Retirez l'écorce sur 1-2 cm avec vos dents ou un couteau
2. **Préparation** — Mâchez l'extrémité jusqu'à obtenir des fibres en éventail
3. **Brossage** — Mouvements doux de droite à gauche, 3 à 5 minutes
4. **Entretien** — Coupez 1 cm après chaque utilisation, gardez au frais

## Bienfaits Scientifiquement Prouvés

Des études publiées dans le *Journal of Periodontology* confirment que l'utilisation régulière
du Siwak réduit significativement la plaque dentaire et l'indice gingivale — avec des résultats
comparables ou supérieurs aux brosses à dents conventionnelles.

---

*Chez SIVÀA Geneva, nous sélectionnons uniquement des bâtons récoltés à la main dans les régions
de Punjab et Sindh au Pakistan, certifiés frais et conservés dans des conditions optimales.*
    `,
  },
  'siwak-vs-brosse-a-dents': {
    slug: 'siwak-vs-brosse-a-dents',
    cat:  'Science & Santé',
    date: '08 Mai 2024',
    read: '7 min',
    title: "Siwak vs Brosse à dents : lequel est meilleur pour les dents ?",
    description: "Analyse comparative entre le Siwak naturel et les brosses à dents modernes. Efficacité, impact écologique, coût.",
    img: 'https://storage.googleapis.com/a1aa/image/xFb1nzZx-8_eXdSdS7TFAr9v4I2p4PoIwZ7HlMBj2m8.jpg',
    content: `
La question fait débat depuis que les brosses à dents électriques ont envahi les salles de bain.
Mais la réponse est plus nuancée qu'un simple comparatif technique.

## Efficacité Clinique

**Siwak** : Une méta-analyse de 21 études (2014, *Journal of Periodontology*) conclut que
le Siwak est **aussi efficace** que la brosse à dents conventionnelle pour réduire la plaque et l'inflammation gingivale.

**Brosse électrique** : Légèrement supérieure pour les cas de gingivite sévère selon l'ADA.

## Impact Écologique

| | Siwak | Brosse à dents |
|---|---|---|
| Matériaux | 100% naturel, biodégradable | Plastique, nylon |
| Production | Récolte manuelle | Industrie pétrochimique |
| Déchets | Zéro | 1 milliard/an dans les océans |
| Durée | 1-2 semaines | 3 mois (recommandé) |

## Coût Total Annuel en Suisse

- **Siwak SIVÀA** : ~CHF 30/an (3 bâtons/mois × CHF 12 = CHF 36)
- **Brosse + dentifrice classique** : CHF 60-120/an
- **Brosse électrique** : CHF 150-300 + têtes de rechange

## Notre Verdict

Le Siwak n'est pas inférieur. Il est **différent** — et pour ceux qui cherchent une alternative
naturelle, éthique et économique, il représente le meilleur choix disponible.
    `,
  },
  'acheter-siwak-geneve': {
    slug: 'acheter-siwak-geneve',
    cat:  'Guide Local',
    date: '02 Mai 2024',
    read: '6 min',
    title: "Acheter du vrai Siwak à Genève : notre guide complet",
    description: "Guide complet pour acheter du Siwak authentique et de qualité à Genève, Suisse. Critères de qualité, adresses et conseils.",
    img: 'https://storage.googleapis.com/a1aa/image/XsHvQVnbIiS1PLi4GMlrT9mPNtVh4x3QyMvHoYT9vHQ.jpg',
    content: `
Genève compte plusieurs commerces proposant du Siwak, mais la qualité varie considérablement.
Voici comment ne pas se tromper.

## Critères d'un Siwak de Qualité

**Fraîcheur** : Un Siwak frais est flexible et libère une odeur légèrement poivrée.
S'il est sec et cassant, il a perdu ses propriétés actives.

**Diamètre** : Idéalement 1 à 1.5 cm — assez épais pour avoir une bonne densité de fibres.

**Origine** : Les meilleures qualités viennent du **Pakistan** (Punjab, KPK) et d'**Arabie Saoudite**.
Évitez les origines inconnues.

**Conservation** : Doit être conservé dans un emballage hermétique ou réfrigéré.
Un Siwak exposé à l'air libre perd rapidement ses propriétés.

## Pourquoi Choisir SIVÀA Geneva

Chez SIVÀA, nous contrôlons toute la chaîne :

1. **Sélection à la source** — Partenaires certifiés au Pakistan
2. **Récolte saisonnière** — Période optimale de croissance (novembre à mars)
3. **Conservation sous vide** — Livré dans les 48h de la récolte
4. **Atelier Genevois** — Contrôle qualité final avant expédition

## Commander en Ligne vs Boutique Physique

Notre boutique en ligne garantit la fraîcheur grâce à notre stock tournant.
Livraison Swiss Post en 48h partout en Suisse.
    `,
  },
  'art-tailler-siwak': {
    slug: 'art-tailler-siwak', cat: 'Rituels de Soin', date: '01 Mai 2024', read: '4 min',
    title: "L'Art de tailler son Siwak",
    description: "Apprenez les techniques de taille du Siwak pour un brossage optimal selon les méthodes de l'atelier SIVÀA Geneva.",
    img: 'https://storage.googleapis.com/a1aa/image/YhGVg5vDqaLUDpHO6VFGqGsRh5y-KQWZE_oy8LqsBUI.jpg',
    content: `La taille est l'étape fondamentale du rituel Siwak. Un mauvais taille réduit de 60% son efficacité.
Voici la méthode SIVÀA en 5 étapes précises pour maximiser les bienfaits de votre bâton.`,
  },
  'mineraux-siwak-analyse': {
    slug: 'mineraux-siwak-analyse', cat: 'Botanique & Science', date: '28 Avril 2024', read: '5 min',
    title: "Analyse des minéraux naturels du Siwak",
    description: "Analyse scientifique complète des composés actifs du Salvadora persica : calcium, phosphate, fluor naturel, silice, tanins.",
    img: 'https://storage.googleapis.com/a1aa/image/xFb1nzZx-8_eXdSdS7TFAr9v4I2p4PoIwZ7HlMBj2m8.jpg',
    content: `Une analyse par chromatographie en phase gazeuse révèle la richesse exceptionnelle
du Salvadora persica. Découvrez les données scientifiques derrière chaque composé actif.`,
  },
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) return { title: 'Article introuvable' }
  return {
    title:       article.title,
    description: article.description,
    openGraph: {
      title:       article.title,
      description: article.description,
      images:      [{ url: article.img }],
      type:        'article',
    },
  }
}

function renderMarkdown(content: string): string {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,     '<em>$1</em>')
    .replace(/^## (.*)/gm,     '<h2 class="font-serif text-2xl text-siv-text mt-10 mb-4">$1</h2>')
    .replace(/^---$/gm,        '<hr class="border-siv-outline-variant/20 my-8" />')
    .replace(/\n\n/g,          '</p><p class="text-siv-text-variant leading-relaxed mb-4">')
    .replace(/^/,              '<p class="text-siv-text-variant leading-relaxed mb-4">')
    .replace(/$/,              '</p>')
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) notFound()

  return (
    <div className="pt-16 bg-siv-bg min-h-screen">
      {/* Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden bg-siv-surface-mid">
        <Image src={article.img} alt={article.title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-siv-bg via-siv-bg/60 to-transparent" />
        <div className="absolute bottom-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full left-0 right-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-siv-secondary-container text-siv-secondary text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={10} /> {article.cat}
            </span>
            <span className="flex items-center gap-1 text-siv-outline text-xs"><Calendar size={11} /> {article.date}</span>
            <span className="flex items-center gap-1 text-siv-outline text-xs"><Clock size={11} /> {article.read}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-siv-text leading-snug">{article.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-siv-text-variant hover:text-siv-primary text-sm mb-10 transition-colors">
          <ArrowLeft size={14} /> Retour au Journal
        </Link>

        {/* Article content */}
        <div
          className="prose-siv"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />

        {/* CTA */}
        <div className="mt-16 bg-siv-surface-low rounded-xl p-8 text-center">
          <p className="text-label-sm text-siv-primary uppercase tracking-widest mb-3">L&apos;Essentiel SIVÀA</p>
          <h3 className="font-serif text-2xl text-siv-text mb-3">Prêt à essayer ?</h3>
          <p className="text-siv-text-variant text-sm mb-6">Commandez votre Siwak premium, livré en 48h depuis Genève.</p>
          <Link href="/checkout" className="btn-primary inline-flex items-center gap-2">
            Commander maintenant <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
