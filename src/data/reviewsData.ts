// ── Types ─────────────────────────────────────────────────────────────────
export interface ReviewItem {
  name:    string;
  role:    string;
  service: string;
  rating:  number;
  date:    string;
  avatar:  string;
  text:    string;
}

export interface FilterCategory {
  id:    string;
  label: string;
}

export interface Platform {
  icon:   string;
  name:   string;
  rating: string;
  count:  string;
}

export interface FeaturedReviewData {
  videoUrl:      string;
  videoThumb:    string;
  storyBadge:    string;
  storyHeading:  string;
  storyIntro:    string;
  storyQuote:    string;
  clientName:    string;
  clientRole:    string;
  clientAvatar:  string;
}

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

export const featuredReview: FeaturedReviewData = {
  videoUrl:     'https://www.youtube.com/watch?v=MRM5MvO2BpM',
  videoThumb:   '/img/male-3.jpg',
  storyBadge:   'Erfahrungsbericht',
  storyHeading: 'Wie wir das Logistikzentrum eines Kölner Großhändlers betreuen',
  storyIntro:   'Als das Unternehmen nach Expansion auf 8.000 m² einen zuverlässigen Reinigungspartner für Lagerhallen, Büros und Sozialbereiche suchte, war ein fester Ansprechpartner und planbare Qualität entscheidend.',
  storyQuote:   'Seit zwei Jahren kein einziger Ausfall. Das Team kennt unsere Abläufe, arbeitet eigenständig und meldet sich proaktiv wenn etwas auffällt. Genau das brauchen wir im laufenden Betrieb.',
  clientName:   'Markus B.',
  clientRole:   'Betriebsleiter, Logistik- und Handelsunternehmen Köln',
  clientAvatar: '/img/male1.jpg',
};

export const filterCategories: FilterCategory[] = [
  { id: 'all',        label: 'Alle Bewertungen' },
  { id: 'gewerbe',   label: 'Gewerbe & Büros'  },
  { id: 'wohnen',    label: 'Wohnimmobilien'    },
  { id: 'gastro',    label: 'Gastronomie'       },
  { id: 'industrie', label: 'Industrie'         },
  { id: 'events',    label: 'Events & Sonstiges' },
];

export const reviews: ReviewItem[] = [
  {
    name:    'Markus T.',
    role:    'Geschäftsführer, Logistikunternehmen Köln',
    service: 'industrie',
    rating:  5,
    date:    'März 2026',
    avatar:  '/img/male2.jpg',
    text:    'Seit zwei Jahren lassen wir unsere Lagerhallen und Büroflächen von diesem Team reinigen. Pünktlich, gründlich, keine Ausfälle. Genau das, was wir als Betrieb brauchen.',
  },
  {
    name:    'Sandra K.',
    role:    'Hausverwaltung, Wohnanlage Düsseldorf',
    service: 'wohnen',
    rating:  5,
    date:    'Februar 2026',
    avatar:  '/img/female1.jpg',
    text:    'Die Treppenhäuser unserer drei Wohnanlagen werden zuverlässig wöchentlich gereinigt. Die Mieter sind zufrieden, die Abrechnung läuft unkompliziert. Klare Empfehlung.',
  },
  {
    name:    'Thomas W.',
    role:    'Restaurantleiter, Essen',
    service: 'gastro',
    rating:  5,
    date:    'Februar 2026',
    avatar:  '/img/male3.jpg',
    text:    'Küche und Gastraum werden täglich vor Öffnung gereinigt. HACCP-konform, verlässlich und das Team weiß genau was in einer Gastroküche zu tun ist. Sehr zufrieden.',
  },
  {
    name:    'Julia R.',
    role:    'Office Managerin, Beratungsunternehmen Düsseldorf',
    service: 'gewerbe',
    rating:  5,
    date:    'Januar 2026',
    avatar:  '/img/avatar-none.jpg',
    text:    'Unsere drei Etagen Bürofläche werden jeden Abend gereinigt. Festes Team, immer dieselben Gesichter, Qualität ist gleichbleibend hoch. Nach einem Jahr Zusammenarbeit bin ich rundum zufrieden.',
  },
  {
    name:    'Bernd H.',
    role:    'Hausverwalter, Immobilienverwaltung Bochum',
    service: 'wohnen',
    rating:  5,
    date:    'Januar 2026',
    avatar:  '/img/avatar-none.jpg',
    text:    'Wir lassen 12 Objekte über diesen Anbieter betreuen. Ein Ansprechpartner, eine Rechnung, einheitliche Qualität in allen Häusern. Die Zusammenarbeit läuft reibungslos seit 18 Monaten.',
  },
  {
    name:    'Klaus M.',
    role:    'Centermanager, Einkaufszentrum Dortmund',
    service: 'gewerbe',
    rating:  5,
    date:    'Dezember 2025',
    avatar:  '/img/avatar-none.jpg',
    text:    'Das Team ist täglich vor Ladenöffnung fertig. Sauberkeit im gesamten Center hat sich seit dem Wechsel zu diesem Anbieter spürbar verbessert. Kunden und Mieter haben das positiv kommentiert.',
  },
  {
    name:    'Monika S.',
    role:    'Eventmanagerin, Veranstaltungszentrum Köln',
    service: 'events',
    rating:  5,
    date:    'Dezember 2025',
    avatar:  '/img/avatar-none.jpg',
    text:    'Nach jeder Veranstaltung, egal wie groß, ist die Halle am nächsten Morgen wieder bereit. Flexibel, schnell und gründlich. Für Events ist das genau der Partner den man braucht.',
  },
  {
    name:    'Andreas F.',
    role:    'Inhaber, Fitnessstudio Wuppertal',
    service: 'gewerbe',
    rating:  4,
    date:    'November 2025',
    avatar:  '/img/avatar-none.jpg',
    text:    'Umkleiden, Geräteraum und Sanitäranlagen werden täglich gereinigt. Nach einem Hinweis zur Desinfektion der Griffe haben sie sofort reagiert und den Plan angepasst. Guter, professioneller Partner.',
  },
  {
    name:    'Petra L.',
    role:    'Inhaberin, Boutique-Hotel Bonn',
    service: 'gastro',
    rating:  5,
    date:    'November 2025',
    avatar:  '/img/avatar-none.jpg',
    text:    'Hotelzimmer, Frühstücksraum und Lobby werden täglich auf höchstem Niveau gereinigt. Gästebewertungen zur Sauberkeit sind seit dem Wechsel spürbar besser geworden. Sehr empfehlenswert.',
  },
];

export const platforms: Platform[] = [
  { icon: 'bi:google',           name: 'Google',         rating: '4.9', count: '152 Bewertungen' },
  { icon: 'bi:facebook',         name: 'Facebook',       rating: '5.0', count: '63 Bewertungen'  },
  { icon: 'bi:patch-check-fill', name: 'Empfohlen',      rating: '★★★★★', count: 'Verifizierte Kunden' },
  { icon: 'bi:award',            name: 'Zertifiziert',   rating: 'A+',  count: 'Geprüfte Qualität' },
];
