// ── Hero ───────────────────────────────────────────────────────────────────
export interface HeroStat { num: string; label: string; }

export interface HeroData {
  badge:       string;
  heading:     string[];
  description: string;
  ctaPrimary:  { label: string; href: string; icon: string };
  ctaPhone:    { label: string; href: string };
  image:       string;
  award:       { value: string; label: string };
  stats:       HeroStat[];
}

export const hero: HeroData = {
  badge: 'Ihr professioneller Reinigungspartner',
  heading: ['Professionelle Reinigung', 'für jeden Bedarf'],
  description: 'Gewerbe, Wohnimmobilien, Gastronomie, Industrie und mehr. Zuverlässig, gründlich und flexibel in NRW.',
  ctaPrimary: { label: 'Unsere Leistungen', href: '#services', icon: 'bi:stars' },
  ctaPhone:   { label: 'Jetzt anrufen', href: 'tel:+492110000000' },
  image: '/img/hero.jpg',
  award: { value: '10+', label: 'Jahre Erfahrung' },
  stats: [
    { num: '1.000+', label: 'Zufriedene Kunden' },
    { num: '4.9★',   label: 'Google Bewertung' },
    { num: 'NRW',    label: 'Köln, Düsseldorf, Ruhrgebiet' },
    { num: '100%',   label: 'Versicherter Schutz' },
  ],
};

// ── Services ───────────────────────────────────────────────────────────────
export interface ServiceItem {
  image:    string;
  alt:      string;
  title:    string;
  excerpt:  string;
  features: string[];
  href:     string;
}

export const services: ServiceItem[] = [
  {
    image: '/img/industry-office.jpg', alt: 'Büros & Gewerbe',
    title: 'Büros & Gewerbe', href: '/industries/bueros',
    excerpt: 'Professionelle Reinigung für Büros, Verwaltungsgebäude und Gewerbeimmobilien aller Größen.',
    features: ['Außerhalb der Arbeitszeiten', 'Feste Reinigungsteams', 'Multi-Standort-Verträge'],
  },
  {
    image: '/img/industry-residential.jpg', alt: 'Wohnimmobilien',
    title: 'Wohnimmobilien', href: '/industries/wohnhaeuser',
    excerpt: 'Reinigung für Wohnhäuser, Wohnungen, Treppenhäuser, Wohnanlagen und Privathaushalte.',
    features: ['Regelmäßig oder einmalig', 'Treppenhausreinigung inklusive', 'Ferienwohnungen und Studentenwohnheime'],
  },
  {
    image: '/img/industry-restaurant.jpg', alt: 'Gastronomie & Hotel',
    title: 'Gastronomie & Hotel', href: '/industries/restaurants',
    excerpt: 'Hygienische Reinigung für Restaurants, Cafés, Hotels und gastronomische Betriebe.',
    features: ['HACCP-konforme Küchen', 'Flexible Einsatzzeiten', 'Tägliche Unterhaltsreinigung'],
  },
  {
    image: '/img/industry-retail.jpg', alt: 'Einzelhandel',
    title: 'Einzelhandel', href: '/industries/einkaufszentren',
    excerpt: 'Sauberkeit für Einkaufszentren, Supermärkte, Einzelhandelsgeschäfte und Autohäuser.',
    features: ['Vor Öffnung oder nach Ladenschluss', 'Schaufenster und Vitrinen', 'Schnelle Reaktionszeiten'],
  },
  {
    image: '/img/industry-warehouse.jpg', alt: 'Industrie & Logistik',
    title: 'Industrie & Logistik', href: '/industries/lagerhallen',
    excerpt: 'Reinigung für Lagerhallen, Logistikzentren, Produktionsstätten und Parkhäuser.',
    features: ['Maschinengestützte Reinigung', 'Große Flächen und Hallenboden', 'Industrielle Reinigungsstandards'],
  },
  {
    image: '/img/industry-event.jpg', alt: 'Events & Sonderobjekte',
    title: 'Events & Sonderobjekte', href: '/industries/veranstaltungsorte',
    excerpt: 'Reinigung für Veranstaltungsorte, Messehallen, Kongresszentren, Neubauten und Kirchen.',
    features: ['Vor- und Nachbereitung', 'Baureinigung und Bauendreinigung', 'Kurzfristige Verfügbarkeit'],
  },
];

// ── Industries ─────────────────────────────────────────────────────────────
export interface IndustryItem {
  icon:  string;
  label: string;
  desc:  string;
  href:  string;
}

export const industries: IndustryItem[] = [
  { icon: 'bi:arrow-repeat',    label: 'Unterhaltsreinigung',      desc: 'Regelmäßige Reinigung nach individuellem Plan, täglich oder wöchentlich.',       href: '/services/unterhaltsreinigung' },
  { icon: 'bi:building',        label: 'Büroreinigung',            desc: 'Saubere Arbeitsumgebung, außerhalb der Bürozeiten oder nach Absprache.',         href: '/services/bueroeinigung' },
  { icon: 'bi:brush',           label: 'Grundreinigung',           desc: 'Intensive Tiefenreinigung bei Bedarf, saisonal oder nach Veranstaltungen.',      href: '/services/grundreinigung' },
  { icon: 'bi:window',          label: 'Glas- & Fensterreinigung', desc: 'Streifenfreie Reinigung von Fenstern, Glasfronten und Glasflächen.',            href: '/services/glasreinigung' },
  { icon: 'bi:grid',            label: 'Teppichreinigung',         desc: 'Professionelle Teppich- und Polsterreinigung mit modernen Reinigungsverfahren.', href: '/services/teppichreinigung' },
  { icon: 'bi:house-check',     label: 'Bauendreinigung',          desc: 'Gründliche Reinigung nach Bau- oder Renovierungsarbeiten für die Übergabe.',    href: '/services/bauendreinigung' },
  { icon: 'bi:calendar-event',  label: 'Eventreinigung',           desc: 'Reinigung vor, während und nach Veranstaltungen, Messen und Events.',           href: '/services/eventreinigung' },
  { icon: 'bi:tools',           label: 'Hausmeisterservice',       desc: 'Gebäudebetreuung, Winterdienst und Hausmeisterdienste aus einer Hand.',         href: '/services/hausmeisterservice' },
];

// ── Why ────────────────────────────────────────────────────────────────────
export interface WhyItem {
  icon:  string;
  title: string;
  desc:  string;
}

export const whyItems: WhyItem[] = [
  { icon: 'bi:shield-check',  title: 'Vollständig versichert',             desc: 'Haftpflicht- und Betriebsversicherung für jeden Einsatz bei Ihnen.' },
  { icon: 'bi:person-check',  title: 'Geschultes, zuverlässiges Personal', desc: 'Alle Mitarbeitenden werden sorgfältig ausgewählt und regelmäßig weitergebildet.' },
  { icon: 'bi:leaf',          title: 'Umweltgerechte Reinigungsmittel',     desc: 'Ökologisch verträgliche Produkte, die Mensch und Umwelt schonen.' },
  { icon: 'bi:patch-check',   title: 'Zufriedenheitsgarantie',             desc: 'Bei Unzufriedenheit kommen wir kostenlos nach und beheben das Problem.' },
];

// ── How it Works ───────────────────────────────────────────────────────────
export interface StepItem {
  num:   string;
  icon:  string;
  title: string;
  desc:  string;
}

export const steps: StepItem[] = [
  { num: '01', icon: 'bi:telephone',       title: 'Anfrage stellen',           desc: 'Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir melden uns innerhalb weniger Stunden.' },
  { num: '02', icon: 'bi:calendar2-check', title: 'Besichtigung vor Ort',      desc: 'Wir besichtigen Ihr Objekt und erstellen einen maßgeschneiderten Reinigungsplan.' },
  { num: '03', icon: 'bi:people',          title: 'Reinigung beginnt',         desc: 'Unser Team erscheint pünktlich mit allem notwendigen Equipment und führt die Reinigung durch.' },
  { num: '04', icon: 'bi:graph-up',        title: 'Laufende Qualitätsprüfung', desc: 'Regelmäßige Kontrollen stellen gleichbleibend hohe Qualität sicher.' },
];

// ── Service Areas ──────────────────────────────────────────────────────────
export const serviceAreas: string[] = [
  'Köln', 'Düsseldorf', 'Essen', 'Dortmund', 'Bochum', 'Duisburg', 'Wuppertal', 'Bonn',
];

// ── Gallery ────────────────────────────────────────────────────────────────
export interface GalleryItem {
  image:       string;
  alt:         string;
  title:       string;
  description: string;
}

export const gallery: GalleryItem[] = [
  { image: '/img/industry-office.jpg',      alt: 'Büroreinigung',        title: 'Büroreinigung',        description: 'Professionelle Reinigung eines modernen Bürogebäudes nach Büroschluss.' },
  { image: '/img/industry-staircase.jpg',   alt: 'Treppenhausreinigung', title: 'Treppenhausreinigung', description: 'Regelmäßige Reinigung und Pflege von Treppenhäusern in Wohnanlagen.' },
  { image: '/img/deep-cleaning.jpg',        alt: 'Grundreinigung',       title: 'Grundreinigung',       description: 'Intensive Tiefenreinigung mit professionellem Maschineneinsatz.' },
  { image: '/img/service-glasreinigung.jpg', alt: 'Glasreinigung',       title: 'Glasreinigung',        description: 'Streifenfreie Reinigung von Glasfronten und Schaufenstern.' },
  { image: '/img/industry-residential.jpg', alt: 'Bauendreinigung',      title: 'Bauendreinigung',      description: 'Gründliche Reinigung nach Renovierung, fertig für die Übergabe.' },
  { image: '/img/industry-event.jpg',       alt: 'Eventreinigung',       title: 'Eventreinigung',       description: 'Schnelle Reinigung nach Veranstaltungen und Messen.' },
];

// ── Reviews ────────────────────────────────────────────────────────────────
export interface ReviewItem {
  name:   string;
  role:   string;
  avatar: string;
  text:   string;
}

export const reviews: ReviewItem[] = [
  {
    name: 'Markus T.', role: 'Geschäftsführer, Logistikunternehmen Köln', avatar: '/img/male2.jpg',
    text: 'Seit zwei Jahren lassen wir unsere Lagerhallen und Büroflächen von diesem Team reinigen. Pünktlich, gründlich, keine Ausfälle. Genau das, was wir als Betrieb brauchen.',
  },
  {
    name: 'Sandra K.', role: 'Hausverwaltung, Wohnanlage Düsseldorf', avatar: '/img/female1.jpg',
    text: 'Die Treppenhäuser unserer drei Wohnanlagen werden zuverlässig wöchentlich gereinigt. Die Mieter sind zufrieden, die Abrechnung läuft unkompliziert. Klare Empfehlung.',
  },
  {
    name: 'Thomas W.', role: 'Restaurantleiter, Essen', avatar: '/img/male3.jpg',
    text: 'Küche und Gastraum werden täglich vor Öffnung gereinigt. HACCP-konform, verlässlich und das Team weiß genau was in einer Gastroküche zu tun ist. Sehr zufrieden.',
  },
];

export interface ReviewStat { num: string; label: string; sub: string; }

export const reviewStats: ReviewStat[] = [
  { num: '4.9/5',  label: 'Google Bewertung',      sub: 'Basierend auf 150+ Bewertungen' },
  { num: '1.000+', label: 'Zufriedene Kunden',     sub: 'In Köln, Düsseldorf und Ruhrgebiet' },
  { num: '100%',   label: 'Zufriedenheitsgarantie', sub: 'Oder wir reinigen kostenlos nach' },
];

// ── FAQ ────────────────────────────────────────────────────────────────────
export interface FaqItem { q: string; a: string; }

export const faqs: FaqItem[] = [
  { q: 'Welche Objekte reinigen Sie?', a: 'Wir reinigen Büros, Gewerbeimmobilien, Wohnhäuser, Wohnanlagen, Treppenhäuser, Privathaushalte, Restaurants, Hotels, Einzelhandelsgeschäfte, Lagerhallen, Veranstaltungsorte und mehr. Sprechen Sie uns an, wir finden eine Lösung für Ihr Objekt.' },
  { q: 'Können Sie außerhalb der Geschäftszeiten reinigen?', a: 'Ja, wir passen uns Ihrem Betriebsablauf an. Für Büros reinigen wir bevorzugt nach Büroschluss, für Restaurants und Hotels vor der Öffnung. Abendtermine und Wochenendtermine sind bei uns Standard.' },
  { q: 'Bringen Sie eigenes Reinigungsmaterial mit?', a: 'Ja, unser Team kommt mit allem notwendigen Equipment. Wir verwenden umweltgerechte Reinigungsmittel, die für den jeweiligen Einsatzbereich geeignet sind. Falls Sie eigene Produkte bevorzugen, arbeiten wir selbstverständlich damit.' },
  { q: 'Bieten Sie auch einmalige Reinigungen an?', a: 'Ja, neben laufenden Reinigungsverträgen bieten wir auch einmalige Einsätze an: Grundreinigung, Bauendreinigung, Eventreinigung oder Reinigung nach Umzügen. Kein Mindestvertrag nötig.' },
  { q: 'Betreuen Sie auch mehrere Standorte?', a: 'Ja, Multi-Standort-Verträge sind ein Schwerpunkt unserer Arbeit. Unternehmen mit mehreren Filialen oder Objekten erhalten einen zentralen Ansprechpartner, eine konsolidierte Abrechnung und einheitliche Qualitätsstandards.' },
  { q: 'Wie stellen Sie gleichbleibende Qualität sicher?', a: 'Durch regelmäßige Qualitätskontrollen, detaillierte Reinigungsprotokolle und kontinuierliche Mitarbeiterschulungen. Jedes Objekt bekommt einen festen Reinigungsplan und ein festes Team. Bei Abweichungen reagieren wir innerhalb von 24 Stunden.' },
];

// ── Blog ───────────────────────────────────────────────────────────────────
export interface BlogPost { image: string; date: string; title: string; href: string; }

export const blogPosts: BlogPost[] = [
  { image: '/img/blog1.jpg', date: '10. Juni 2026', title: 'Unterhaltsreinigung vs. Grundreinigung: Was braucht Ihr Betrieb wirklich?',   href: '/blog-detail' },
  { image: '/img/blog2.jpg', date: '5. Juni 2026',  title: 'Büroreinigung richtig planen: Checkliste für Facility Manager',                href: '/blog-detail' },
  { image: '/img/blog3.jpg', date: '28. Mai 2026',  title: 'HACCP in der Gastroküche: Was Restaurants bei der Reinigung beachten müssen', href: '/blog-detail' },
  { image: '/img/blog4.jpg', date: '20. Mai 2026',  title: '5 Zeichen, dass Ihr Objekt einen professionellen Reinigungsservice braucht',  href: '/blog-detail' },
];

// ── CTA ────────────────────────────────────────────────────────────────────
export interface CtaData {
  heading:    string;
  features:   string[];
  phone:      string;
  phoneHref:  string;
  quoteHref:  string;
  bgImage:    string;
}

export const cta: CtaData = {
  heading:   'Sauberkeit, auf die Sie sich verlassen können.',
  features:  ['Keine Mindestlaufzeit', 'Flexible Einsatzzeiten', 'Zufriedenheitsgarantie'],
  phone:     '+49 211 000 0000',
  phoneHref: 'tel:+492110000000',
  quoteHref: '/contact',
  bgImage:   '/img/pressure.jpg',
};

// ── Contact ────────────────────────────────────────────────────────────────
export interface ContactInfoItem { icon: string; label: string; value: string; href?: string; }

export const contactInfo: ContactInfoItem[] = [
  { icon: 'bi:geo-alt-fill',   label: 'Adresse', value: 'Musterstraße 1, 40210 Düsseldorf' },
  { icon: 'bi:telephone-fill', label: 'Telefon', value: '+49 211 000 0000', href: 'tel:+492110000000' },
  { icon: 'bi:envelope-fill',  label: 'E-Mail',  value: 'info@[firmenname].de', href: 'mailto:info@firmenname.de' },
  { icon: 'bi:clock-fill',     label: 'Zeiten',  value: 'Mo.–Fr. 7–19 Uhr\nNotfalleinsätze nach Absprache' },
];

export const contactServices: string[] = [
  'Unterhaltsreinigung', 'Büroreinigung', 'Grundreinigung', 'Glas- & Fensterreinigung',
  'Teppichreinigung', 'Bauendreinigung', 'Eventreinigung', 'Hausmeisterservice',
];

// ── Footer ─────────────────────────────────────────────────────────────────
export interface FooterLink { label: string; href: string; }
export interface SocialLink { icon: string; href: string; }

export const footerLinks: FooterLink[] = [
  { label: 'Einsatzgebiete', href: '/service-area' },
  { label: 'Einrichtungen',  href: '/industries'   },
  { label: 'Leistungen',     href: '/services'     },
  { label: 'Über uns',       href: '/about'        },
  { label: 'Blog',           href: '/blogs'        },
  { label: 'Kontakt',        href: '/contact'      },
];

export const footerServices: FooterLink[] = [
  { label: 'Büros & Gewerbe',        href: '/industries/bueros'             },
  { label: 'Wohnimmobilien',         href: '/industries/wohnhaeuser'        },
  { label: 'Gastronomie & Hotel',    href: '/industries/restaurants'        },
  { label: 'Einzelhandel',           href: '/industries/einkaufszentren'    },
  { label: 'Industrie & Logistik',   href: '/industries/lagerhallen'        },
  { label: 'Events & Sonderobjekte', href: '/industries/veranstaltungsorte' },
];

export const socialLinks: SocialLink[] = [
  { icon: 'bi:linkedin',  href: '#' },
  { icon: 'bi:facebook',  href: '#' },
  { icon: 'bi:instagram', href: '#' },
];
