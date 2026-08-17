// ── Landingpage: PRIVAT ──────────────────────────────────────────────────────
import type { HeroData, StepItem, WhyItem, FaqItem, CtaData } from '@src/data/homepageData';
import { SITE } from '@src/data/site';

export const hero: HeroData = {
  badge: 'Wäscheservice Düsseldorf',
  heading: ['Ihre Wäsche.', 'Wir kümmern uns.'],
  description:
    'Wir holen Ihre Wäsche zuhause ab, waschen und trocknen sie schonend, falten sie sauber und bringen sie frisch zurück. Sie müssen nie wieder Wäsche schleppen.',
  ctaPrimary: { label: 'Wäsche abholen lassen', href: '/contact', icon: 'bi:stars' },
  ctaPhone:   { label: SITE.PHONE, href: SITE.PHONE_HREF },
  image: '/img/waeschebutler-hero-privat.webp',
  award: { value: 'Butler', label: 'Service' },
  stats: [
    { num: '24–48 Std', label: 'Abholung & Rückgabe' },
    { num: 'Düsseldorf', label: 'Wir kommen zu Ihnen' },
    { num: 'Ab Korb', label: 'Einzeln oder im Abo' },
    { num: '0 €', label: 'Abholung & Lieferung' },
  ],
};

export const steps: StepItem[] = [
  { num: '01', icon: 'bi:box-seam',      title: 'Wir holen ab',      desc: 'Sie stellen Ihre Wäsche bereit, wir holen sie zum Wunschtermin bei Ihnen zuhause ab.' },
  { num: '02', icon: 'bi:droplet',       title: 'Wir waschen',       desc: 'Wir waschen und trocknen sorgfältig nach den Pflegehinweisen Ihrer Textilien.' },
  { num: '03', icon: 'bi:patch-check',   title: 'Wir falten',        desc: 'Sauber zusammengelegt, auf Wunsch gebügelt und auf Bügel gehängt.' },
  { num: '04', icon: 'bi:truck',         title: 'Wir bringen zurück', desc: 'Frische Wäsche kommt zum vereinbarten Termin zu Ihnen zurück. Fertig.' },
];

export const whyItems: WhyItem[] = [
  { icon: 'bi:clock-history', title: 'Sie sparen Zeit',        desc: 'Kein Sortieren, kein Schleppen, kein Warten am Trockner. Ihre Zeit gehört wieder Ihnen.' },
  { icon: 'bi:droplet',       title: 'Schonend & sauber',      desc: 'Wir waschen nach Pflegehinweis, trennen sauber und behandeln empfindliche Textilien mit Sorgfalt.' },
  { icon: 'bi:person-check',  title: 'Feste Ansprechperson',   desc: 'Kein anonymer Waschsalon. Sie haben ein festes, vertrautes Gesicht für Ihre Wäsche.' },
  { icon: 'bi:tags',          title: 'Faire, klare Preise',    desc: 'Pro Korb oder im Abo. Sie wissen immer vorher, was es kostet. Keine versteckten Gebühren.' },
];

export const faqs: FaqItem[] = [
  { q: 'Wie funktioniert die Abholung?', a: 'Sie melden sich über das Formular oder telefonisch, wir vereinbaren einen Termin und holen Ihre Wäsche direkt bei Ihnen zuhause ab. Nach dem Waschen bringen wir sie frisch und gefaltet zurück.' },
  { q: 'Was kostet der Service?', a: 'Wir rechnen entweder pro Wäschekorb oder über ein monatliches Abo ab. Den genauen Preis stimmen wir kurz mit Ihnen ab, damit er zu Ihrer Wäschemenge passt. Abholung und Lieferung in Düsseldorf sind inklusive.' },
  { q: 'Wie schnell bekomme ich meine Wäsche zurück?', a: 'In der Regel innerhalb von 24 bis 48 Stunden. Wenn es einmal schneller gehen muss, sprechen Sie uns an.' },
  { q: 'Waschen Sie auch empfindliche Textilien?', a: 'Ja. Wir waschen nach den Pflegehinweisen und behandeln empfindliche Stücke gesondert. Sagen Sie uns einfach Bescheid, worauf wir achten sollen.' },
  { q: 'In welchen Stadtteilen seid ihr unterwegs?', a: 'Wir starten in Düsseldorf und den umliegenden Stadtteilen. Ihren Stadtteil nicht sicher dabei? Fragen Sie kurz an, wir sagen Ihnen ehrlich, ob wir es einrichten können.' },
];

export const cta: CtaData = {
  heading:   'Nie wieder Wäsche schleppen.',
  features:  ['Abholung & Lieferung inklusive', 'Einzeln oder im Abo', 'Feste Ansprechperson'],
  phone:     SITE.PHONE,
  phoneHref: SITE.PHONE_HREF,
  quoteHref: '/contact',
  bgImage:   '',
};

// ── Angebote / Sackgrößen (Startschätzungen) ────────────────────────────────
export interface OfferItem {
  size:     string;
  name:     string;
  capacity: string;
  hint:     string;
  price:    string;
  featured?: boolean;
}

export const offers: OfferItem[] = [
  { size: 'S',  name: 'Kleiner Sack',      capacity: 'bis ca. 6 kg',  hint: 'etwa eine Waschmaschine voll', price: '29' },
  { size: 'M',  name: 'Mittlerer Sack',    capacity: 'bis ca. 10 kg', hint: 'etwa zwei Ladungen',           price: '44', featured: true },
  { size: 'L',  name: 'Großer Sack',       capacity: 'bis ca. 14 kg', hint: 'für größere Mengen',           price: '62' },
  { size: 'XL', name: 'Extra großer Sack', capacity: 'bis ca. 18 kg', hint: 'wenn viel zusammenkommt',      price: '79' },
];

export const offerIncluded: string[] = [
  'Abholung & Lieferung inklusive',
  'Zurück in der Regel in 24 bis 48 Stunden',
  'Gewaschen nach Pflegehinweis, sauber gefaltet',
  'Feste Ansprechperson',
];

export const offerNotes = {
  abo:        'Im Abo (alle 1 bis 2 Wochen, fester Tag) günstiger und Lieferung immer frei.',
  firstOrder: 'Erste Abholung 20 % günstiger, einfach zum Ausprobieren.',
  disclaimer: 'Preise sind Startpreise und können je nach Stadtteil und Menge leicht abweichen.',
};
