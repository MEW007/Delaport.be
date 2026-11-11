# Delaport.be — instructies voor Claude

Website van de Delaport group, gebouwd met Astro en bedoeld voor Cloudflare Pages. Zie `ROADMAP.md` voor het stappenplan en wat nog open staat. Communiceer met de eigenaar in het Nederlands.

## Structuur
- `src/config.ts`: contactgegevens, `infrastructurePublic`-vlag, analytics-token, formuliersleutel. Pas gedeelde gegevens hier aan, niet in pagina's.
- `src/layouts/Base.astro`: html-skelet, meta/SEO, analytics. `Irrigation.astro` en `Infrastructure.astro` voegen per sectie header/footer toe.
- `src/pages/irrigation/*`: Nederlandstalig, voor particulieren/tuinaannemers.
- `src/pages/infrastructure/index.astro`: Engelstalig, B2B. Verborgen zolang `infrastructurePublic` op `false` staat.
- `src/assets/realisaties/`: projectfoto's (Astro optimaliseert ze automatisch naar webp).
- `public/_redirects`: 301's van oude Combell-URL's.

## Commando's
- `npm install` → `npm run dev` (http://localhost:4321) → `npm run build` (output in `dist/`).
- Draai `npm run build` voor elke commit; de build moet slagen.

## Regels
- **Deze repo is publiek.** Nooit namen van (potentiële) klanten of lopende voorstellen (bv. PSA, Aurubis, Denys), prijzen/fees, NDA-inhoud of interne documenten toevoegen. Ook geen persoonlijke documenten (sollicitaties e.d.).
- Geen trackers of cookies toevoegen (geen Google Analytics, geen Meta pixel). Analyse gebeurt cookieloos via Cloudflare Web Analytics, zodat er geen cookiebanner nodig is.
- Externe scripts alleen als het echt nodig is; de site moet statisch en snel blijven.
- Mobiel eerst: controleer layouts op ±375px breed.
- Werk op een branch en laat de eigenaar de Cloudflare-preview nakijken vóór merge naar `main` (`main` = productie zodra Cloudflare Pages gekoppeld is).
