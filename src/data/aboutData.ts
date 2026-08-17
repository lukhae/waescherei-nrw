// ── Heading Page ───────────────────────────────────────────────────────────
export interface HeadingPageData {
  badge:       string;
  icon:        string;
  heading:     string;
  description: string;
  breadcrumb:  { label: string; href?: string }[];
}

// ── Story Section ──────────────────────────────────────────────────────────
export interface StoryBadge {
  icon:  string;
  title: string;
  sub:   string;
}

export interface StoryData {
  badge:     string;
  heading:   string;
  body:      string[];
  image:     string;
  alt:       string;
  accolade1: { value: string; label: string };
  accolade2: { value: string; label: string };
  badges:    StoryBadge[];
}

// ── Mission / Vision ───────────────────────────────────────────────────────
export interface MissionCardData {
  icon:  string;
  title: string;
  body:  string;
}

export interface MissionVisionData {
  badge:       string;
  heading:     string;
  description: string;
  cards:       MissionCardData[];
}

// ── Core Values ────────────────────────────────────────────────────────────
export interface CoreValueItem {
  icon:  string;
  title: string;
  desc:  string;
}

export interface CoreValuesData {
  badge:       string;
  heading:     string;
  description: string;
  values:      CoreValueItem[];
}

// ── Team ───────────────────────────────────────────────────────────────────
export interface TeamMember {
  image:    string;
  name:     string;
  role:     string;
  linkedin?: string;
  email?:   string;
}

export interface TeamData {
  badge:       string;
  heading:     string;
  description: string;
  members:     TeamMember[];
}

// ── CTA override ───────────────────────────────────────────────────────────
export interface AboutCtaData {
  heading:  string;
  features: string[];
}

// ═══════════════════════════════════════════════════════════════════════════
// DEFAULT DATA
// ═══════════════════════════════════════════════════════════════════════════

export const headingPage: HeadingPageData = {
  badge:       'Über unser Unternehmen',
  icon:        'bi:info-circle',
  heading:     'Wer wir sind',
  description: 'Reinigungsunternehmen aus Düsseldorf. Seit über 10 Jahren für Gewerbe, Wohnimmobilien, Gastronomie und mehr in NRW.',
  breadcrumb:  [{ label: 'Startseite', href: '/' }, { label: 'Über uns' }],
};

export const story: StoryData = {
  badge:   'Unsere Geschichte',
  heading: 'Zuverlässig. Für jeden Bedarf.',
  body: [
    'Büros, Wohnhäuser, Restaurants, Lagerhallen, Ferienwohnungen: Jedes Objekt hat seine eigenen Anforderungen. Wir kennen sie alle, weil wir seit über 10 Jahren genau dort arbeiten, wo andere aufhören.',
    'Über 1.000 Kunden in NRW vertrauen heute auf unser Team, von der Einzelwohnung bis zum Logistikzentrum mit mehreren Standorten.',
  ],
  image:     '/img/about.jpg',
  alt:       'Unser Reinigungsteam im Einsatz',
  accolade1: { value: '10+', label: 'Jahre Erfahrung' },
  accolade2: { value: '1.000+', label: 'Zufriedene Kunden' },
  badges: [
    { icon: 'bi:shield-check', title: 'Vollversichert',      sub: 'Haftpflicht & Betrieb'        },
    { icon: 'bi:award',        title: 'Geschultes Team',     sub: 'Regelmäßige Weiterbildung'    },
    { icon: 'bi:geo-alt',      title: 'Regional verankert',  sub: 'NRW-weit tätig'               },
    { icon: 'bi:leaf',         title: 'Umweltgerecht',       sub: 'Ökologische Reinigungsmittel' },
  ],
};

export const missionVision: MissionVisionData = {
  badge:       'Zweck & Ausrichtung',
  heading:     'Mission & Vision',
  description: 'Warum wir tun was wir tun, und wo wir hinwollen.',
  cards: [
    {
      icon:  'bi:bullseye',
      title: 'Unsere Mission',
      body:  'Unternehmen, Hausverwaltungen und Privatkunden in NRW entlasten, indem wir zuverlässige, gründliche Reinigungsdienstleistungen erbringen, die auf den jeweiligen Bedarf zugeschnitten sind. Damit Sie sich auf das konzentrieren können, was wirklich zählt.',
    },
    {
      icon:  'bi:eye',
      title: 'Unsere Vision',
      body:  'Der bevorzugte Reinigungspartner in NRW zu sein, der erste Name, der fällt, wenn es um Verlässlichkeit, Qualität und fairen Umgang geht.',
    },
  ],
};

export const coreValues: CoreValuesData = {
  badge:       'Was uns leitet',
  heading:     'Unsere Werte',
  description: 'Was hinter jeder Entscheidung, jedem Einsatz und jedem Kontakt steckt.',
  values: [
    { icon: 'bi:patch-check-fill', title: 'Integrität',                  desc: 'Wir sagen, was wir tun, und tun, was wir sagen. Transparente Preise, klare Kommunikation, keine versteckten Kosten.' },
    { icon: 'bi:stars',            title: 'Gründlichkeit',               desc: 'Details entscheiden. Von der Ecke bis zur Fuge behandeln wir jeden Bereich mit der gleichen Sorgfalt.' },
    { icon: 'bi:people-fill',      title: 'Respekt',                     desc: 'Gegenüber Kunden, Mietern, Mitarbeitern und unserem eigenen Team. Jeder verdient eine respektvolle Begegnung.' },
    { icon: 'bi:leaf-fill',        title: 'Umweltverantwortung',         desc: 'Ökologisch verträgliche Mittel, effiziente Routen und ressourcenschonende Prozesse.' },
    { icon: 'bi:clock-history',    title: 'Verlässlichkeit',             desc: 'Pünktlichkeit ist für uns keine Tugend, sondern Standard. Ihre Liegenschaft verlässt sich auf uns, und das zu Recht.' },
    { icon: 'bi:arrow-repeat',     title: 'Kontinuierliche Verbesserung', desc: 'Wir schulen regelmäßig, holen Feedback ein und passen uns neuen Anforderungen an.' },
  ],
};

export const team: TeamData = {
  badge:       'Das Team',
  heading:     'Die Menschen hinter dem Sauber',
  description: 'Erfahren, geschult und mit echtem Einsatz bei der Sache.',
  members: [
    { image: '/img/team1.jpg', name: '[Geschäftsführer]',  role: 'Gründer & Geschäftsführer',  linkedin: '#', email: '#' },
    { image: '/img/team2.jpg', name: '[Operationsleiter]', role: 'Betriebsleitung',             linkedin: '#', email: '#' },
    { image: '/img/team3.jpg', name: '[Teamleiter]',       role: 'Leitender Vorarbeiter',       linkedin: '#', email: '#' },
    { image: '/img/team4.jpg', name: '[Kundenbetreuung]',  role: 'Kundenbetreuung & Qualität',  linkedin: '#', email: '#' },
  ],
};

export const aboutCta: AboutCtaData = {
  heading:  'Sauberkeit, auf die Sie sich verlassen können.',
  features: ['Keine Mindestlaufzeit', 'Flexible Einsatzzeiten', 'Zufriedenheitsgarantie'],
};
