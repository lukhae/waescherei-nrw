// ── Landingpage: PFLEGE / ENTLASTUNGSBETRAG ─────────────────────────────────
import type { HeroData, StepItem, WhyItem, FaqItem, CtaData } from '@src/data/homepageData';
import { SITE } from '@src/data/site';

export const hero: HeroData = {
  badge: 'Entlastungsbetrag nach § 45b nutzen',
  heading: ['Ihr persönlicher', 'Wäschebutler.'],
  description:
    'Wir kümmern uns persönlich um Ihre Wäsche oder die Ihrer Angehörigen, mit einem festen, vertrauten Gesicht. Für Menschen mit Pflegegrad oft ohne Eigenanteil, finanziert über den Entlastungsbetrag der Pflegekasse.',
  ctaPrimary: { label: 'Kostenlos beraten lassen', href: '/contact', icon: 'bi:heart' },
  ctaPhone:   { label: SITE.PHONE, href: SITE.PHONE_HREF },
  image: '/img/waeschebutler-hero-privat.webp',
  images: [
    '/img/waeschebutler-senior-hanger.png', // links oben: ältere Dame mit frischer Wäsche auf Bügel
    '/img/waeschebutler-van.png',           // rechts oben: Abholung, Van mit deutschem Text
    '/img/waeschebutler-zwei-frauen.png',   // links unten: Angehörige, Wärme (rechteckig, kein Anschnitt)
    '/img/waeschebutler-hero4.jpg',         // rechts unten: Waschbetrieb, frische Wäsche
  ],
  award: { value: '131 €', label: 'pro Monat' },
  stats: [
    { num: '131 €', label: 'Entlastungsbetrag / Monat' },
    { num: 'Ab Pflegegrad 1', label: 'Anspruch für jeden Grad' },
    { num: 'Festes Gesicht', label: 'Ihre Ansprechperson' },
    { num: 'Oft 0 €', label: 'Eigenanteil' },
  ],
};

export const steps: StepItem[] = [
  { num: '01', icon: 'bi:chat-heart-fill', title: 'Wir kommen vorbei',      desc: 'Wir kommen persönlich zu Ihrem Angehörigen nach Hause, nehmen uns Zeit und einen Moment zum Reden.' },
  { num: '02', icon: 'bi:box-seam',        title: 'Wir nehmen die Wäsche mit', desc: 'Wir sammeln die Wäsche ein und kümmern uns um alles Weitere. Sie müssen nichts vorbereiten.' },
  { num: '03', icon: 'bi:patch-check',     title: 'Frisch versorgt zurück', desc: 'Saubere, gefaltete Wäsche kommt zurück und wird an ihren Platz geräumt.' },
  { num: '04', icon: 'bi:file-earmark-check', title: 'Wir rechnen mit der Kasse ab', desc: 'Die Abrechnung läuft über den Entlastungsbetrag der Pflegekasse, in der Regel ohne Eigenanteil für Sie.' },
];

export const whyItems: WhyItem[] = [
  { icon: 'bi:person-check', title: 'Ein festes, vertrautes Gesicht', desc: 'Immer dieselbe Ansprechperson. So entsteht Vertrauen, gerade bei älteren Menschen.' },
  { icon: 'bi:heart',        title: 'Mehr als Wäsche',                desc: 'Ein kurzer Moment Gesellschaft und Zuwendung gehört bei uns dazu. Nicht nur saubere Wäsche.' },
  { icon: 'bi:people-fill',  title: 'Entlastung für Angehörige',      desc: 'Sie müssen sich nicht mehr um die Wäsche kümmern und wissen Ihre Liebsten gut versorgt.' },
  { icon: 'bi:shield-check', title: 'Über die Pflegekasse',           desc: 'Finanzierung über den Entlastungsbetrag nach § 45b, meist ohne Eigenanteil. Wir erklären Ihnen alles in Ruhe.' },
];

export const faqs: FaqItem[] = [
  { q: 'Was ist der Entlastungsbetrag?', a: 'Der Entlastungsbetrag ist eine Leistung der Pflegeversicherung nach § 45b SGB XI. Menschen mit einem anerkannten Pflegegrad (1 bis 5) stehen dafür 131 € pro Monat zu. Das Geld ist für Angebote gedacht, die den Alltag erleichtern, genau wie ein Wäscheservice mit persönlicher Betreuung.' },
  { q: 'Wer hat Anspruch?', a: 'Jeder Mensch mit einem anerkannten Pflegegrad von 1 bis 5 hat Anspruch auf den Entlastungsbetrag. Schon ab Pflegegrad 1 besteht der volle Anspruch von 131 € pro Monat.' },
  { q: 'Muss ich als Angehöriger etwas dazuzahlen?', a: 'In der Regel nicht. Solange der monatliche Entlastungsbetrag ausreicht, rechnen wir direkt mit der Pflegekasse ab und für Sie entsteht kein Eigenanteil.' },
  { q: 'Wie läuft die Abrechnung ab?', a: 'Wir kümmern uns um die Formalitäten. Sie müssen nicht in Vorleistung gehen und nichts Kompliziertes ausfüllen. Wir erklären Ihnen jeden Schritt.' },
  { q: 'Ist Ihr Angebot schon anerkannt?', a: 'Wir befinden uns gerade in der Anerkennung als Angebot zur Unterstützung im Alltag in Nordrhein-Westfalen. Melden Sie sich jetzt unverbindlich, dann sagen wir Ihnen ehrlich, ab wann die Abrechnung über die Pflegekasse für Sie möglich ist.' },
];

export const cta: CtaData = {
  heading:   'Fragen Sie eine kostenlose Beratung an.',
  features:  ['Meist ohne Eigenanteil', 'Feste Ansprechperson', 'Wir kümmern uns um die Formalitäten'],
  phone:     SITE.PHONE,
  phoneHref: SITE.PHONE_HREF,
  quoteHref: '/contact',
  bgImage:   '',
};

// ── Entlastungs-Paket ───────────────────────────────────────────────────────
export const paket = {
  badge:    'Über die Pflegekasse',
  name:     'Wäsche über den Entlastungsbetrag',
  tagline:  'Sie wählen Größe und Häufigkeit. Die Pflegekasse übernimmt bis 131 € im Monat.',
  price:    '0 €',
  priceNote:'Eigenanteil, solange Sie im Budget bleiben',
  budget:   'Die Pflegekasse zahlt bis 131 € pro Monat. Sie müssen den Betrag nicht ausschöpfen, Sie nutzen nur so viel, wie Sie möchten.',
  features: [
    'Persönlicher Besuch bei jeder Abholung, wir kommen zu Ihnen nach Hause',
    'Wir packen die Wäsche mit ein, Sie müssen nichts vorbereiten',
    'Gewaschen, gefaltet und wieder eingeräumt',
    'Ein festes, vertrautes Gesicht bei jedem Besuch',
    'Wir rechnen direkt mit der Pflegekasse ab',
  ],
  note:     'Anspruch ab Pflegegrad 1. Nicht genutztes Budget verfällt nicht sofort, es bleibt im Kalenderjahr erhalten. Wir befinden uns in der Anerkennung als Angebot zur Unterstützung im Alltag in NRW und sagen Ihnen ehrlich, ab wann die Abrechnung für Sie möglich ist.',
};

// Wählbare Häufigkeit im Entlastungs-Paket (alles bis 131 €/Monat = 0 € Eigenanteil)
export const paketRhythmus = [
  { label: '1× im Monat',   note: 'Nur ab und zu, z.B. ein kleiner Sack.' },
  { label: 'Alle 2 Wochen', note: 'Für kleinere Haushalte.' },
  { label: 'Wöchentlich',   note: 'Der Entlastungsbetrag voll genutzt.', featured: true },
];

// Beispiele, was der Entlastungsbetrag deckt (Startschätzungen)
export const paketBeispiele = [
  'S-Sack, 1× im Monat',
  'M-Sack, alle 2 Wochen',
  'S-Sack, jede Woche',
];
