// ── Zentrale Marken- und Kontaktdaten ───────────────────────────────────────
// TODO(Lukas): echte Kontaktdaten eintragen bevor live geht (Telefon, E-Mail,
// Adresse fuer Impressum). Domain waeschebutler.de noch sichern.

export const SITE = {
  NAME:      'Wäschebutler',
  TAGLINE:   'Frische Wäsche, ganz ohne Aufwand.',
  CITY:      'Düsseldorf',
  DOMAIN:    'waeschebutler.de',

  // Platzhalter – vor Go-Live ersetzen
  PHONE:     '0211 000 0000',
  PHONE_HREF:'tel:+492110000000',
  EMAIL:     'hallo@waeschebutler.de',
  EMAIL_HREF:'mailto:hallo@waeschebutler.de',
  ADDRESS:   'Düsseldorf',

  HOURS:     'Mo.–Sa. 8–20 Uhr',

  // Formspree-Endpoint fuer das Kontaktformular.
  // TODO(Lukas): auf https://formspree.io ein Formular anlegen und die ID
  // aus https://formspree.io/f/XXXXXXXX hier eintragen.
  FORM_ENDPOINT: 'https://formspree.io/f/PLACEHOLDER',
} as const;

export const SOCIALS = [
  { icon: 'bi:instagram', href: '#' },
  { icon: 'bi:facebook',  href: '#' },
];
