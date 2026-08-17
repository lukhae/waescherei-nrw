// ── Types ──────────────────────────────────────────────────────────────────
export interface AreaItem {
  img:      string;
  name:     string;
  clients:  string;
  response: string;
  zips:     string;
  desc:     string;
  badge?:   string;
}

export interface CoverageStat {
  value: string;
  label: string;
}

export interface AreaFaq {
  q: string;
  a: string;
}

export interface CoverageData {
  badge:       string;
  heading:     string;
  description: string;
  note:        string;
  stats:       CoverageStat[];
  mapImage:    string;
  phone:       string;
  phoneHref:   string;
}

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

export const coverageData: CoverageData = {
  badge:       'Einsatzgebiete',
  heading:     'NRW von Köln bis Dortmund',
  description: 'Eigene Teams, keine Subunternehmer. Gleicher Ansprechpartner und gleiche Qualität an jedem Standort.',
  note:        'Ortskundige Teams mit kurzen Reaktionszeiten, weil wir dort zuhause sind wo unsere Kunden sind.',
  stats: [
    { value: '8+',    label: 'Einsatzregionen' },
    { value: '1.000+', label: 'Aktive Objekte' },
    { value: '24h',   label: 'Reaktionszeit' },
  ],
  mapImage:  '/img/map.png',
  phone:     '+49 211 000 0000',
  phoneHref: 'tel:+492110000000',
};

export const areas: AreaItem[] = [
  {
    img:      '/img/koeln.jpg',
    name:     'Köln',
    clients:  '150+ Objekte',
    response: 'Gleichtags',
    zips:     '50667–51149',
    desc:     'Büros, Restaurants, Einzelhandel und Wohnanlagen im gesamten Stadtgebiet. Unser stärkstes Einsatzgebiet mit eigenem Stammpersonal vor Ort.',
    badge:    'Häufigste Anfragen',
  },
  {
    img:      '/img/duesseldorf.jpg',
    name:     'Düsseldorf',
    clients:  '100+ Objekte',
    response: 'Gleichtags',
    zips:     '40210–40629',
    desc:     'Gewerbeimmobilien, Boutiques, Hotels und Wohnanlagen in der Landeshauptstadt. Inklusive Messe- und Eventflächen rund um das Messegelände.',
    badge:    '',
  },
  {
    img:      '/img/essen.jpg',
    name:     'Essen & Ruhrgebiet',
    clients:  '80+ Objekte',
    response: 'Gleichtags',
    zips:     '45127–45359',
    desc:     'Lagerhallen, Logistikzentren, Büros und Wohnimmobilien im Herzen des Ruhrgebiets. Erfahrung mit großen Industrieflächen und dichtem Wohnungsbestand.',
    badge:    '',
  },
  {
    img:      '/img/dortmund.jpg',
    name:     'Dortmund',
    clients:  '50+ Objekte',
    response: 'Folgetags',
    zips:     '44135–44388',
    desc:     'Gewerbegebiete, Einkaufszentren und Wohnanlagen im östlichen Ruhrgebiet. Schnelle Erreichbarkeit durch ortskundige Teams.',
    badge:    '',
  },
  {
    img:      '/img/bochum.jpg',
    name:     'Bochum & Herne',
    clients:  '35+ Objekte',
    response: 'Folgetags',
    zips:     '44787–44894',
    desc:     'Büros, Praxen, Einzelhandel und Treppenhäuser im mittleren Ruhrgebiet. Flexible Einsatzzeiten auch für kleinere Objekte und Privathaushalte.',
    badge:    '',
  },
  {
    img:      '/img/duisburg.jpg',
    name:     'Duisburg',
    clients:  '40+ Objekte',
    response: 'Folgetags',
    zips:     '47051–47279',
    desc:     'Industrie und Logistik am Rhein, Wohnimmobilien und Gewerbeflächen. Erfahrung mit hafennahen Industrieobjekten und großen Lagerhallen.',
    badge:    '',
  },
  {
    img:      '/img/wuppertal.jpg',
    name:     'Wuppertal & Bergisches Land',
    clients:  '30+ Objekte',
    response: 'Folgetags',
    zips:     '42103–42399',
    desc:     'Büros, Wohnhäuser und Gewerbeimmobilien im Bergischen Land. Auch für Objekte in Hanglagen und historischen Gebäuden mit besonderen Anforderungen.',
    badge:    '',
  },
  {
    img:      '/img/bonn.jpg',
    name:     'Bonn & Rhein-Sieg',
    clients:  '45+ Objekte',
    response: 'Folgetags',
    zips:     '53111–53359',
    desc:     'Büros, Praxen, Restaurants und Wohnanlagen im südlichen NRW. Wachsender Standort mit kurzen Reaktionszeiten für das Bonner Stadtgebiet.',
    badge:    '',
  },
];

export const areaFaqs: AreaFaq[] = [
  {
    q: 'Fallen für entferntere Einsatzgebiete Zusatzkosten an?',
    a: 'In unserem Kerngebiet Köln, Düsseldorf und dem zentralen Ruhrgebiet entstehen keine Anfahrtspauschalen. Für Objekte in Randgebieten wie Bonn oder dem Bergischen Land können bei kleineren Einzelaufträgen geringe Fahrtkostenpauschalen anfallen. Dauerverträge schließen dies in der Regel in den Grundpreis ein.',
  },
  {
    q: 'Können Sie mehrere Standorte desselben Unternehmens betreuen?',
    a: 'Ja, Multi-Standort-Betreuung ist ein Schwerpunkt unserer Arbeit. Unternehmen mit mehreren Filialen, Wohnungsbaugesellschaften mit mehreren Objekten oder Handelsketten erhalten einen zentralen Ansprechpartner, eine konsolidierte Abrechnung und einheitliche Qualität an allen Standorten.',
  },
  {
    q: 'Wie schnell können Sie mit einem neuen Auftrag starten?',
    a: 'In Köln und Düsseldorf können neue Daueraufträge in der Regel innerhalb von 3 bis 5 Werktagen beginnen. In weiteren Regionen innerhalb von 5 bis 10 Werktagen je nach Personalverfügbarkeit. Dringende Einzel- oder Notfalleinsätze klären wir kurzfristig telefonisch.',
  },
  {
    q: 'Was, wenn mein Objekt außerhalb Ihres Gebiets liegt?',
    a: 'Rufen Sie uns trotzdem an. Besonders für größere Objekte oder Kunden mit mehreren Standorten lässt sich der Einsatzradius flexibel erweitern. Wenn Sie sich in NRW befinden, finden wir in den meisten Fällen eine Lösung.',
  },
  {
    q: 'Haben Sie feste Ansprechpartner pro Region?',
    a: 'Ja. Jedes Einsatzgebiet hat einen regionalen Teamleiter, der die Objekte vor Ort kennt und regelmäßige Qualitätskontrollen durchführt. Sie haben immer einen festen Kontakt, der Ihr Objekt persönlich kennt.',
  },
  {
    q: 'Kann ich immer das gleiche Reinigungsteam anfragen?',
    a: 'Ja, wir setzen auf stabile Teams pro Objekt. Das schafft Vertrauen und sorgt für gleichbleibende Qualität. Wir rotieren Teams nur im Krankheits- oder Urlaubsfall und informieren Sie dann vorab.',
  },
];
