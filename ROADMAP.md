# Delaport.be — stappenplan

Doel: delaport.be weghalen van de gesloten Combell-sitebuilder en zelf beheren als code (deze repo), met twee deelbedrijven op één domein en cookieloze bezoekersanalyse.

```
delaport.be/                  → Delaport group (startpagina)
delaport.be/irrigation/       → Delaport Irrigation — automatische tuinberegening (NL, B2C/tuinaannemers)
delaport.be/infrastructure/   → Delaport Infrastructure — scope governance grote projecten (EN, B2B)
```

| Onderdeel | Keuze |
|---|---|
| Code | Astro (statische site) in deze repo |
| Hosting | Cloudflare Workers (static assets), gekoppeld aan GitHub: automatische deploy bij elke push naar `main` — test-URL: https://delaport-be.mertensward-mew.workers.dev |
| Analyse | Cloudflare Web Analytics (cookieloos) + Google Search Console |
| Formulier | Web3Forms (gratis), valt terug op `mailto:` zolang er geen sleutel is |
| E-mail | Blijft bij Microsoft 365 — **MX/SPF/DKIM/autodiscover-records nooit wijzigen of vergeten** |
| DNS | Nu bij Combell (ns*.combell.net/eu) |

---

## Fase 0 — Voorbereiding
- [x] Inhoud en foto's van de huidige site overgenomen (home, impressie, contact, vacature)
- [x] Lijst van oude URL's → redirects in `public/_redirects`
- [x] Oude sollicitatiepagina's uit de repo verwijderd
- [x] Cloudflare-account aanmaken
- [ ] Beslissen: repo publiek laten of privé maken (Cloudflare Pages werkt met beide)

## Fase 1 — Bouwen
- [x] Astro-project, gedeelde layout, aparte stijl per sectie
- [x] Irrigation: home, realisaties, vacature, contact/offerte, bedankt
- [x] Infrastructure: one-pager (approach, 10 services, team, contact) — **verborgen** (`infrastructurePublic: false`)
- [x] Groepsstartpagina, privacyverklaring, 404
- [x] SEO-basis: titels/descriptions, canonical, sitemap, robots.txt, LocalBusiness- en JobPosting-structured data
- [ ] Ondernemingsnummer + volledig adres in footer en privacyverklaring
- [ ] Meer/betere foto's en korte projectomschrijvingen bij realisaties
- [ ] Teksten nalezen (Irrigation: tone of voice; Infrastructure: elke vennoot keurt eigen profiel goed)
- [ ] Open Graph-afbeelding (deelvoorbeeld voor LinkedIn/WhatsApp)
- [ ] Web3Forms-sleutel aanvragen en invullen in `src/config.ts`

## Fase 2 — Live zetten  ← **bezig**
- [x] Cloudflare koppelen aan deze GitHub-repo (Workers Builds; build: `npm run build`, output: `dist`)
- [x] Gecontroleerd op workers.dev: alle pagina's 200, redirects 301, 404-pagina, noindex op Infrastructure
- [ ] DNS-zone naar Cloudflare (nameservers bij Combell wijzigen) — **alle mail- en Microsoft 365-records eerst overnemen, DNS only**
- [ ] Custom domains `www.delaport.be` + `delaport.be` op de Worker; redirect root → www
- [ ] Testen: mail versturen/ontvangen op info@delaport.be, oude URL's redirecten correct
- [ ] Combell-sitebuilder pas opzeggen na ±1 week stabiele werking (domein mag bij Combell blijven)

## Fase 3 — Bezoekersanalyse
- [ ] Cloudflare Web Analytics aanzetten → token in `src/config.ts` (`cfAnalyticsToken`)
- [ ] Google Search Console: domein verifiëren (DNS TXT-record), sitemap indienen (`/sitemap-index.xml`)
- [ ] Google Bedrijfsprofiel voor Delaport Irrigation aanmaken/claimen
- [ ] Maandelijks kijken: bezoekers per sectie, herkomst, zoektermen, formulierinzendingen

## Fase 4 — Onderhoud (doorlopend)
- Wijziging vragen aan Claude Code (lokaal of op claude.ai/code) → branch → preview-URL nakijken → mergen naar `main` → automatisch live
- Voor het beregeningsseizoen (maart–april): realisaties en vacature bijwerken
- Optioneel later: eenvoudige CMS (Pages CMS / Decap) om tekst te wijzigen zonder code

---

## Infrastructure live zetten — voorwaarden
1. Belangenconflict formeel uitgeklaard (PSA-arbeidscontract: bijbetrekking/concurrentiebeding, schriftelijke waiver).
2. Elke vennoot heeft het eigen profiel goedgekeurd.
3. Geen klantnamen, lopende voorstellen, prijzen of NDA-inhoud op de site.
4. Dan: `infrastructurePublic: true` in `src/config.ts` en de `Disallow: /infrastructure/`-regel uit `public/robots.txt` halen.
