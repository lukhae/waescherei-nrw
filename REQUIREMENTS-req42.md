# Wäschebutler Düsseldorf — Requirements (req42)

Stand: 2026-08-17. Sprache: Deutsch. Scope dieses Dokuments: die **Website** (Marketing- und Lead-Gen-Seite), nicht der operative Wäschebetrieb. Das Geschäftsmodell ist nur so weit beschrieben, wie es die Website bestimmt.

Status der Zahlen: Preise und Kilomengen sind **Startschätzungen**, final nach der Fahrten-/Unit-Economics-Kalkulation.

---

## 1. Business Goals

| ID | Ziel | Messbar |
|----|------|---------|
| BG-1 | Nachfrage validieren, bevor Maschinen gekauft werden ("erst verkaufen, nicht waschen") | Anzahl echter Anfragen über die Seite |
| BG-2 | Die ersten 10 Kunden gewinnen | 10 qualifizierte Anfragen, davon X Abschlüsse |
| BG-3 | Zwei getrennte Zielgruppen ansprechen, ohne sie zu vermischen | Getrennte Anfragen pro Pfad (privat vs. Entlastung) messbar |
| BG-4 | Premium-/Butler-Wahrnehmung aufbauen (nicht "billiger Waschsalon") | Qualitative Rückmeldung, Wiedererkennung |
| BG-5 | Lokale Auffindbarkeit in Düsseldorf (SEO-Fundament für spätere Stadtteil-Seiten) | Ranking für "Wäscheservice Düsseldorf" o.ä. (später) |

**Kern-Ökonomie-Leitsatz:** CAC + COGS < Umsatz. Die Seite muss günstig Leads bringen (niedriger CAC) und die richtigen Erwartungen setzen (feste Abholtage, Mindestmenge), damit die Fahrten profitabel bleiben.

---

## 2. Stakeholder

| ID | Stakeholder | Interesse an der Website |
|----|-------------|--------------------------|
| ST-1 | Lukas (Gründer, Marketing/Web) | Baut und betreibt die Seite, will Leads |
| ST-2 | Partner (Gründer, Betrieb) | Braucht qualifizierte, planbare Anfragen |
| ST-3 | Privatkunde (Nutzer) | Bequemer Wäscheservice, klarer Preis, schnell |
| ST-4 | Angehörige von Pflegebedürftigen (Käufer im Entlastungsfall) | "Jemand kümmert sich", ohne Eigenanteil, vertrauenswürdig |
| ST-5 | Pflegebedürftige Person (Endnutzer im Entlastungsfall) | Persönlicher Kontakt, Würde, Einfachheit |
| ST-6 | Pflegekasse (Kostenträger, indirekt) | Korrekte Abrechnung §45b, anerkanntes Angebot |
| ST-7 | Suchmaschine (Google) | Indexierbare, schnelle, saubere Seite |

---

## 3. Scope

### Business Scope
Vermittlung und Verkauf eines mobilen Wäscheservices in Düsseldorf über zwei Pfade: **Privat** (Selbstzahler, Sackmodell) und **Entlastung** (Pflegegrad, §45b, persönlicher Besuch).

### Product Scope (Website)
Im Scope:
- Splitter-Startseite (`/`), Landingpage Privat (`/privat`), Landingpage Entlastung (`/pflege`), Kontaktseite (`/contact`), Rechtstexte (`/privacy`, `/terms`, Impressum).
- Kontaktformular (echter Versand), Telefon-CTA.

Nicht im Scope (jetzt): Online-Buchung/App, Zahlungsabwicklung, Kundenkonto, Preisrechner, Chemischreinigung/Bügeln, B2B/Gewerbe, Live-Routenplanung.

### Kontext / Schnittstellen

| Schnittstelle | Bedeutung |
|---------------|-----------|
| IF-1 Formspree (o.ä.) | Nimmt Formular-Anfragen entgegen, leitet sie per E-Mail weiter |
| IF-2 Telefon | Direkter Kanal (tel:-Link) für Anrufe |
| IF-3 Domain/Hosting | waeschebutler.de, statisches Hosting |
| IF-4 Suchmaschine | Crawlt/indexiert die Seiten (Sitemap, robots) |
| IF-5 Pflegekasse (offline) | Kein technischer Anschluss; Abrechnung läuft außerhalb der Website |

---

## 4. Product Backlog (gerankt)

Format: `Als <Rolle> möchte ich <Funktion>, damit <Nutzen>.`

### Epic A — Zwei-Pfade-Struktur
- **US-1 (must):** Als Besucher möchte ich auf der Startseite sofort zwischen "privat" und "mit Pflegegrad" wählen, damit ich direkt die für mich passende Seite sehe.
- **US-2 (must):** Als Privatkunde möchte ich auf `/privat` verstehen, wie der Service abläuft und was er kostet, damit ich anfragen kann.
- **US-3 (must):** Als Angehöriger möchte ich auf `/pflege` verstehen, dass die Pflegekasse zahlt und wie der persönliche Service abläuft, damit ich Vertrauen fasse und anfrage.

### Epic B — Angebot verständlich machen
- **US-4 (must):** Als Privatkunde möchte ich die Sackgrößen S/M/L/XL mit Preis und "für wen" sehen, damit ich ohne Rechnen die richtige wähle.
- **US-5 (must):** Als Angehöriger möchte ich das Entlastungs-Paket als "kostet Sie nichts" (0 Eigenanteil) verstehen, damit die Hürde niedrig ist.
- **US-6 (must):** Als Besucher möchte ich die Verb-Kette (abholen, waschen, falten, zurückbringen) sehen, damit ich den Komfort sofort begreife.
- **US-7 (should):** Als Besucher möchte ich die festen Abholtage / das Einsatzgebiet sehen, damit ich weiß ob mein Stadtteil dabei ist.

### Epic C — Anfrage auslösen (Conversion)
- **US-8 (must):** Als Interessent möchte ich ein kurzes Formular ausfüllen (Name, Kontakt, Anliegen, Nachricht), damit ich unverbindlich anfrage.
- **US-9 (must):** Als Interessent möchte ich anrufen können (ein Klick auf Mobil), damit ich sofort Kontakt habe.
- **US-10 (must):** Als Betreiber möchte ich Anfragen zuverlässig per E-Mail erhalten, damit kein Lead verloren geht (echter Versand, Fehler-Fallback auf Telefon/E-Mail).
- **US-11 (should):** Als Betreiber möchte ich im Formular sehen, aus welchem Pfad die Anfrage kommt (privat/Entlastung), damit ich sie richtig behandle.

### Epic D — Vertrauen
- **US-12 (should):** Als Besucher möchte ich Vertrauens-Signale sehen (48h, Zufriedenheitsgarantie, nach Pflegehinweis getrennt gewaschen, feste Ansprechperson), damit ich buche.
- **US-13 (could):** Als Angehöriger möchte ich FAQ zum Entlastungsbetrag lesen (§45b, Anspruch, Eigenanteil), damit meine Fragen vorab geklärt sind. (bereits umgesetzt)

### Epic E — Recht & Auffindbarkeit
- **US-14 (must):** Als Betreiber möchte ich Impressum, Datenschutz und AGB haben, damit die Seite rechtssicher ist (DSGVO, TMG).
- **US-15 (should):** Als Betreiber möchte ich saubere Meta-Titel/Descriptions und eine Sitemap, damit Google die Seiten findet.

---

## 5. Supporting Models

**Sitemap:**
```
/               Splitter (privat | mit Pflegegrad)
├── /privat     Landingpage Privat  (Hero, So gehts, Angebote S/M/L/XL, Warum, FAQ, CTA, Kontakt)
├── /pflege     Landingpage Entlastung (Hero, So gehts, 131€-Paket, Warum, FAQ Entlastung, CTA, Kontakt)
├── /contact    Kontakt (Heading + Formular)
├── /privacy    Datenschutz
├── /terms      AGB
└── /impressum  Impressum  (TODO anlegen)
```

**Conversion-Flow:** Startseite -> Pfad wählen -> Angebot verstehen -> Formular/Anruf -> Betreiber meldet sich -> (offline) Abholung/Service.

---

## 6. Quality Requirements

| ID | Qualitätsmerkmal | Anforderung (messbar) |
|----|------------------|------------------------|
| QR-1 | Performance | Startseite lädt schnell (statisch, wenige/keine Fotos, Lighthouse Performance > 90) |
| QR-2 | Responsiv | Voll nutzbar auf Mobil (die meisten Besucher kommen mobil), kein horizontales Scrollen |
| QR-3 | Barrierefreiheit (wichtig wegen Zielgruppe Senioren/Angehörige) | Gut lesbare Schriftgrößen, hoher Kontrast, klickbare Telefonnummer, klare Buttons |
| QR-4 | Verständlichkeit | Angebot ohne Rechnen erfassbar (Sackgrößen, "kostet Sie nichts"); einfache Sprache |
| QR-5 | Datenschutz (DSGVO) | Nur nötige Formularfelder, Hinweis auf vertrauliche Behandlung, Datenschutzseite verlinkt, keine unnötigen Third-Party-Tracker |
| QR-6 | Zuverlässigkeit Lead-Kanal | Formular-Versand funktioniert; bei Fehler sichtbarer Fallback (Telefon/E-Mail), kein stiller Verlust |
| QR-7 | SEO-Grundlage | Eindeutige Title/Description je Seite, Sitemap, canonical, deutschsprachig, lokale Begriffe (Düsseldorf) |
| QR-8 | Wartbarkeit | Inhalte zentral in `src/data/*` pflegbar, ohne Code-Kenntnisse Texte/Preise ändern |
| QR-9 | Rechtssicherheit Aussagen | Keine Falschbehauptung zur Anerkennung als Angebot zur Unterstützung im Alltag, solange nicht anerkannt |

---

## 7. Constraints

### 7.1 Organisatorische Constraints
| ID | Constraint |
|----|-----------|
| C-O1 | Angebot ist in NRW **noch nicht als "Angebot zur Unterstützung im Alltag" (§45a) anerkannt** -> Copy darf Anerkennung/Abrechenbarkeit nicht als gegeben behaupten |
| C-O2 | Startkapital minimal, Risiko-arm (vorhandener Keller, 2 Personen), daher schlanker Service (kein Bügeln/Sonderteile am Start) |
| C-O3 | Nur 2 Personen im Betrieb -> Fahrten müssen gebündelt (feste Abholtage) sein |
| C-O4 | Firmierung/Impressum-Daten noch offen (Rechtsform, Adresse) |

### 7.2 Technische Constraints
| ID | Constraint |
|----|-----------|
| C-T1 | Astro 6 + Tailwind 4, datengetrieben (`src/data`), statischer Build |
| C-T2 | Statisches Hosting (kein Server-Backend) -> Formular über externen Dienst (Formspree o.ä.) |
| C-T3 | Foto-arm (keine passenden eigenen Bilder) -> Icon-/Gradient-Design, Butler-Branding |
| C-T4 | Domain waeschebutler.de (DNS-frei laut Check, final beim Registrar zu sichern) |

---

## 8. Domain Terminology

| Begriff | Bedeutung |
|---------|-----------|
| Entlastungsbetrag (§45b SGB XI) | 131 €/Monat Leistung der Pflegeversicherung für Menschen mit Pflegegrad 1-5, für Angebote zur Alltagsunterstützung |
| Pflegegrad 1-5 | Einstufung der Pflegebedürftigkeit; ab Grad 1 voller Anspruch auf Entlastungsbetrag |
| Angebot zur Unterstützung im Alltag (§45a) | Landesrechtlich anerkanntes Angebot, über das der Entlastungsbetrag abgerechnet werden darf |
| Eigenanteil | Betrag, den der Kunde selbst zahlt; Ziel im Entlastungsfall: 0 € |
| Sackmodell (S/M/L/XL) | Verkauf nach Sackgröße statt nach Kilo; der Sack begrenzt die Menge, kein Wiegen |
| Fair-Use-Grenze | Interne Mengenobergrenze im Entlastungs-Paket, schützt die Marge |
| Feste Abholtage | Pro Stadtteil festgelegte Abhol-/Liefertage, Grundlage profitabler Routen |
| CAC / COGS | Kundengewinnungskosten / Herstellungskosten der Leistung |

---

## 9. Assets

- **Budget:** minimal, bootstrapped (vorhandener Keller in Düsseldorf, Platz für +2 Waschmaschinen + Trockner ohne Extrakosten).
- **Zeitrahmen:** Website als Erstes (Warteliste/Anfragen), parallel Business-Plan-Kalkulation; danach ersten Kunden bedienen.
- **Team:** Lukas (Web/Marketing/Internet-Kanal), Partner (Betrieb/Flyer/vor Ort). Beide akquirieren.
- **Externe Ressourcen:** Formspree (Formular), Domain-Registrar, Silber-Oase (Entlastungs-Content-Quelle), evtl. später Chemischreinigungs-Partner.

---

## 10. Roadmap

| Phase | Inhalt | Status |
|-------|--------|--------|
| P0 | Rebrand Template -> Wäschebutler, Splitter + /privat + /pflege + /contact | erledigt |
| P1 | Angebote einbauen: S/M/L/XL (privat) + 131€-Paket (pflege) | offen (dieses Dokument) |
| P2 | Echte Kontaktdaten, Formspree-Endpoint, Impressum, Domain sichern | offen |
| P3 | Business-Plan: Fahrten-/Unit-Economics rechnen -> echte Preise eintragen | offen |
| P4 | Launch + Flyer (Nachbarschaft, Senioren-Orte) + Internet-Kanal | offen |
| P5 (später) | Stadtteil-SEO-Seiten, Express, Bügeln/Sonderteile, ggf. B2B, Online-Buchung | Backlog |

---

## 11. Risks & Assumptions

### Risiken
| ID | Risiko | Gegenmaßnahme |
|----|--------|---------------|
| R-1 | Fahrten unrentabel (CAC+COGS > Umsatz) | Feste Abholtage, Mindestmenge (kleinster Sack), Kalkulation vor Preis-Fixierung |
| R-2 | Entlastungs-Anerkennung dauert/kommt nicht | Copy vorsichtig formulieren; Privat-Pfad kann eigenständig laufen |
| R-3 | Kein Lead-Eingang (Formular kaputt/Endpoint fehlt) | Echter Versand + Fehler-Fallback (QR-6); Telefon prominent |
| R-4 | Name/Domain-Konflikt "Wäschebutler" | Beschreibend/schwach, lokal unkritisch; DPMA prüfen vor Marken-Invest |
| R-5 | Schwere/überfüllte Säcke (Ergonomie, Marge) | Realistische Kapazitäten, Fair-Use-Grenze |

### Annahmen
| ID | Annahme |
|----|---------|
| A-1 | Privatkunden kommen überwiegend mobil und wollen einfachen, planbaren Service |
| A-2 | Die meisten Privat-Anfragen betreffen Größe S/M |
| A-3 | Entlastungs-Kunden (Einzelpersonen) machen wenig Wäsche, daher passt das Volumen in die 131 € |
| A-4 | Direkter Kontakt (Formular/Telefon) reicht für die ersten 10 Kunden; keine App nötig |
| A-5 | waeschebutler.de ist frei und sicherbar |
